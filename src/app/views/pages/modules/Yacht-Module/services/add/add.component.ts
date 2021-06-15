import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {ServicesService} from '../../../../../../core/services/Yacht-Module/services.service';
import {ServicesModel} from '../../../../../../core/models/Yacht-Module/services.model';
import {ServicesEnumsModel} from '../../../../../../core/models/Yacht-Module/services.enums.model';

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

	selected_images: [] = [];

	enums: ServicesEnumsModel;

	constructor(private fb: FormBuilder,
				private service: ServicesService,
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
		this.getEnums();
	}

	private getEnums() {

		this.service.listEnums().subscribe(
			(resp) => {
				this.enums = resp;
				this.initForm();
				this.is_result = true;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			} , error => {
				this.isLoadingResults = false;
			});
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

			price: ['', Validators.required] ,
			price_model: ['', Validators.required] ,
			minimum_hours_booking: ['', Validators.required] ,
			max_quantity: ['', Validators.required] ,
			image: ['', Validators.required] ,
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

		model.name.en = controls['name_en'].value;
		model.name.ar = controls['name_ar'].value;

		model.description.en = controls['description_en'].value;
		model.description.ar = controls['description_ar'].value;

		model.price = controls['price'].value;
		model.price_model = controls['price_model'].value;
		model.minimum_hours_booking = controls['minimum_hours_booking'].value;
		model.max_quantity = controls['max_quantity'].value;
		model.seo.title = model.name;
		model.seo.description = model.description;

		model.image = controls['image'].value;

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
