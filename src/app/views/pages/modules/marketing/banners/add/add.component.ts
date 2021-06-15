import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import { BannersService } from '../../../../../../core/services/Marketing-Module/banners.service';
import { BannersModel } from '../../../../../../core/models/Marketing-Module/banners.model';
import {BannersManager} from '../../../../../../core/managers/Marketing-Module/banners.manager';
import {BannersTypesModel} from '../../../../../../core/models/Marketing-Module/banners..types.model';

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
	selected_image: [] = [];

	is_result:boolean;

	banners_types:BannersTypesModel[] = [];

	constructor(private fb: FormBuilder,
				private service: BannersService,
				private bannersManager: BannersManager,
				private formErrorService: FormErrorService,
				private route: ActivatedRoute,
				private router: Router,
				private cdr: ChangeDetectorRef,
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
		this.page_name = this.translateService.instant('Components.BANNERS.name');
		this.content_name = this.translateService.instant('Components.BANNERS.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.getDependencies();
	}


	private getDependencies() {
		this.isLoadingResults = true;
		this.bannersManager.getBannersTypeObservable().subscribe(model => {
			if (model){
				this.banners_types = model;
			}
		});


		this.bannersManager.getAllLoadingObservable().subscribe(model => {
			if (model){
				this.is_result = model;
				this.isLoadingResults = !model;
				this.cdr.markForCheck();
				if (this.is_result){
					this.initForm();
				}
			}
		});

	}
	/**
	 * Initiate the form
	 *
	 */
	private initForm() {
		this.form = this.fb.group({

			name_ar: ['', Validators.required] ,
			name_en: ['', Validators.required] ,

			type_id: ['', Validators.required] ,
			link: ['', Validators.required] ,

			is_active: 	['1', Validators.required],
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

		const model = new BannersModel(null);
		model.is_active = controls['is_active'].value;

		model.names.ar = controls['name_ar'].value;
		model.names.en = controls['name_en'].value;
		model.type_id = controls['type_id'].value;
		model.link = controls['link'].value;

		if (this.selected_image.length){
			// @ts-ignore
			model.image = this.selected_image[0];
		}

		if (!model.image){
			this.authNoticeService.setNotice('Please select image', 'danger');
			return ;
		}

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

	handleSelectedImage($event) {
		this.selected_image = $event;
	}



}
