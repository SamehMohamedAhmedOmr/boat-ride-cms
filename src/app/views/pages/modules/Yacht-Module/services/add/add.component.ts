import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {ServicesService} from '../../../../../../core/services/Setting/services.service';
import {ServicesModel} from '../../../../../../core/models/Settings/services.model';
import {SpecialitiesService} from '../../../../../../core/services/Setting/specialities.service';
import {SpecialitiesModel} from '../../../../../../core/models/Settings/specialities.model';
import {PaginateParams} from '../../../../../../core/models/paginateParams.interface';
import {GlobalConfig} from '../../../../../../core/Global/global.config';

@Component({
	selector: 'kt-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, DoCheck, OnDestroy, InitializeComponentInterface {

	page_name: string;
	content_name: string;

	navigationSubscription;
	isValidationError: boolean = false;

	isLoadingResults: any = true;
	form: FormGroup;
	is_result:boolean;

	specialities: SpecialitiesModel[] = [];

	selected_images: [] = [];

	constructor(private fb: FormBuilder,
				private service: ServicesService,
				private specialitiesService: SpecialitiesService,
				private formErrorService: FormErrorService,
				private cdr: ChangeDetectorRef,
				private route: ActivatedRoute,
				private router: Router,
				public translateService: TranslateService,
				private authNoticeService: AuthNoticeService,
				private helper: HelperService) {
		this.navigationSubscription = this.helper.routingSubscribe(this);
	}



	ngOnInit() {
		this.initialiseComponent();
		this.initializePageName();
	}

	ngDoCheck(): void {
		this.initializePageName();
	}

	initializePageName(){
		this.page_name = this.translateService.instant('Components.SERVICES.name');
		this.content_name = this.translateService.instant('Components.SERVICES.single');
	}

	initialiseComponent() {
		this.getSpecialities();
	}


	/**
	 * Initiate the form
	 *
	 */
	private initForm() {
		this.form = this.fb.group({
			name_en: ['', Validators.required] ,
			name_ar: ['', Validators.required] ,

			description_en: ['', Validators.required] ,
			description_ar: ['', Validators.required] ,

			speciality_id: ['', Validators.required] ,
			is_active: 	['1', Validators.required],
		});
	}

	private getSpecialities() {
		let headerParams : PaginateParams = {
			active : 1,
			per_page: GlobalConfig.pagination_per_page ,
			search_key: null ,
			sort_key: null ,
			sort_order: null ,
			next_page_index: 0,
		};

		this.specialitiesService.list(headerParams, 0).subscribe(
			(resp) => {
				this.specialities = resp;
				this.initForm();
				this.is_result = true;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			} , error => {
				this.isLoadingResults = false;
			});
	}

	clearForm() {
		this.form.reset();
	}

	submitForm () {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			return this.formErrorService.markAsTouched(controls);
		}

		const model = new ServicesModel(null);
		model.is_active = controls['is_active'].value;

		model.languages.en = controls['name_en'].value;
		model.languages.ar = controls['name_ar'].value;

		model.description_languages.en = controls['description_en'].value;
		model.description_languages.ar = controls['description_ar'].value;

		model.images = this.selected_images;

		model.speciality_id = controls['speciality_id'].value;

		// call service to store Banner
		this.isLoadingResults = true;
		this.service.create(model).subscribe(resp => {
			this.form.reset();
			this.isLoadingResults = false;
			this.authNoticeService.setNotice(this.translateService.instant('COMMON.Added_successfully',
				{name : this.content_name}),
				'success');
			this.router.navigate(['../'], { relativeTo: this.route }).then();
		} , handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
			this.isLoadingResults = false;
			this.isValidationError = true;
		});
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.isLoadingResults = false;

		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}

		if (this.isValidationError){
			this.authNoticeService.setNotice(null);
		}

	}


	handleSelectedImage($event: []) {
		this.selected_images = $event;
	}
}
