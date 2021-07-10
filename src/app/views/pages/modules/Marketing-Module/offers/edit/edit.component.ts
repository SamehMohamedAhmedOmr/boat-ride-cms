import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {OffersService} from '../../../../../../core/services/Marketing-Module/offers.service';
import {OffersModel} from '../../../../../../core/models/Marketing-Module/offers.model';

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

	model: OffersModel;

	id = null;
	is_result: boolean;

	selected_images: [] = [];
	current_image: string;

	constructor(private formBuilder: FormBuilder,
				private service: OffersService,
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
		this.page_name = this.translateService.instant('Components.OFFERS.name');
		this.content_name = this.translateService.instant('Components.OFFERS.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = false;
		this.get();
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
					this.isLoadingResults = false;
					this.is_result = true;
					this.cdr.markForCheck();
					this.initializeForm();
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

			seo_title_en: [this.model.seo?.title?.en, Validators.required],
			seo_title_ar: [this.model.seo?.title?.ar, Validators.required],
			seo_description_en: [this.model.seo?.description?.en, Validators.required],
			seo_description_ar: [this.model.seo?.description?.ar, Validators.required],

			valid_date: [this.model.valid_date, Validators.required],
			is_active: [this.model.is_active == true ? '1' : '0', Validators.required],
			image: [''],

		});
		console.log(this.model);

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
		this.model.is_active = controls['is_active'].value;
		this.model.valid_date = controls['valid_date'].value;

		this.model.seo.title.en = controls['seo_title_en'].value;
		this.model.seo.title.ar = controls['seo_title_ar'].value;
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
