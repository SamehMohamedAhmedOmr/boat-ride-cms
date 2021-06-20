import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {ServicesService} from '../../../../../../core/services/Marketing-Module/services.service';
import {ServicesEnumsModel} from '../../../../../../core/models/Marketing-Module/services.enums.model';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';

@Component({
	selector: 'kt-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, DoCheck, OnDestroy, InitializeComponentInterface {

	page_name: string;
	content_name: string;

	navigationSubscription;
	isValidationError: boolean = false;

	isLoadingResults: any = true;
	form: FormGroup;

	model: ServicesModel;

	id = null;
	is_result: boolean;

	selected_images: [] = [];
	current_image: string;

	enums: ServicesEnumsModel;


	constructor(private formBuilder: FormBuilder,
				private service: ServicesService,
				private formErrorService: FormErrorService,
				private route: ActivatedRoute,
				private router: Router,
				private cdr: ChangeDetectorRef,
				private authNoticeService: AuthNoticeService,
				public translateService: TranslateService,
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

	initializePageName() {
		this.page_name = this.translateService.instant('Components.SERVICES.name');
		this.content_name = this.translateService.instant('Components.SERVICES.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = false;
		this.get();
	}


	private getEnums() {

		this.service.listEnums().subscribe(
			(resp) => {
				this.enums = resp;
				this.initializeForm();
				this.is_result = true;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			} , error => {
				this.isLoadingResults = false;
			});
	}

	private get() {
		this.isLoadingResults = true;
		this.route.params.subscribe((resp) => {
			this.id = resp['id'];
			// call api to get shipping rule
			this.service.get(this.id).subscribe(
				(data) => {
					this.model = data;
					this.current_image = this.model.image;
					this.getEnums();
				}, error => {
					this.authNoticeService.setNotice(this.translateService.instant('COMMON.Item_not_found',
						{name: this.content_name}),
						'danger');
					this.isLoadingResults = false;
					this.isValidationError = true;
					this.cdr.markForCheck();
				}
			);
		});
	}

	/**
	 * Initiate the form
	 *
	 */
	initializeForm() {
		this.form = this.formBuilder.group({

			name_en: [this.model.name?.en, Validators.required],
			name_ar: [this.model.name?.ar, Validators.required],

			description_en: [this.model.description?.en, Validators.required],
			description_ar: [this.model.description?.ar, Validators.required],

			seo_description_en: [this.model.seo?.description?.en, Validators.required],
			seo_description_ar: [this.model.seo?.description?.ar, Validators.required],

			price: [this.model.price, Validators.required],
			price_model: [this.model.price_model + '', Validators.required],
			minimum_hours_booking: [this.model.minimum_hours_booking, Validators.required],
			max_quantity: [this.model.max_quantity, Validators.required],
			image: [''],

		});

		this.isLoadingResults = false;
		this.cdr.markForCheck();

	}


	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to validators name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		return this.formErrorService.isControlHasError(this.form, controlName, validationType);
	}

	updateForm() {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			return this.formErrorService.markAsTouched(controls);
		}

		this.model.createObjects();

		this.model.name.en = controls['name_en'].value;
		this.model.name.ar = controls['name_ar'].value;

		this.model.description.en = controls['description_en'].value;
		this.model.description.ar = controls['description_ar'].value;
		this.model.price = controls['price'].value;
		this.model.price_model = controls['price_model'].value;
		this.model.minimum_hours_booking = controls['minimum_hours_booking'].value;
		this.model.max_quantity = controls['max_quantity'].value;
		this.model.seo.title = this.model.name;
		this.model.seo.description.en = controls['seo_description_en'].value;
		this.model.seo.description.ar = controls['seo_description_ar'].value;
		this.model.image = controls['image'].value;

		// call service to store shipping rule
		this.isLoadingResults = true;
		this.service.update(this.model.id, this.model).subscribe(resp => {
			this.isLoadingResults = false;
			this.authNoticeService.setNotice(this.translateService.instant('COMMON.Edited_successfully',
				{name: this.content_name}),
				'success');
			this.cdr.markForCheck();
			this.router.navigate(['../'], {relativeTo: this.route}).then();
		}, handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
			this.isLoadingResults = false;
			this.isValidationError = true;
			this.cdr.markForCheck();
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

		if (this.isValidationError) {
			this.authNoticeService.setNotice(null);
		}

	}

}
