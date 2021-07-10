import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {WaterSportsEnumsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.enums.model';
import {WaterSportsService} from '../../../../../../core/services/Water-Sport-Module/Water-Sport/water.sports.service';
import {WaterSportObservableService} from '../../../../../../core/services/Water-Sport-Module/Water-Sport/water.sport.observable.service';
import {WaterSportsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.model';


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

	model: WaterSportsModel;

	id = null;
	is_result: boolean;

	selected_images: [] = [];

	enums: WaterSportsEnumsModel;

	constructor(private formBuilder: FormBuilder,
				private service: WaterSportsService,
				private waterSportObservableService: WaterSportObservableService,
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
		this.page_name = this.translateService.instant('Components.WATER_SPORTS.name');
		this.content_name = this.translateService.instant('Components.WATER_SPORTS.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = false;
		this.get();
		this.getDependencies();
	}

	private getDependencies() {
		this.waterSportObservableService.getEnums();

		this.waterSportObservableService.enums_observable.subscribe((value:WaterSportsEnumsModel) => {
			this.enums = value;
			this.cdr.markForCheck();
		});


		this.waterSportObservableService.loading_observable.subscribe((value:boolean) => {
			if ((!value) && this.model){
				this.initializeForm();
				this.is_result = true;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			}
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
					// @ts-ignore
					this.selected_images = this.model.images.map(k => k.image);
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
			/* Basic Information*/
			name_en: [this.model.name?.en, Validators.required] ,
			name_ar: [this.model.name?.ar, Validators.required] ,

			water_sport_description_en: [this.model.water_sport_description?.en, Validators.required] ,
			water_sport_descriptions_ar: [this.model.water_sport_description?.ar, Validators.required] ,

			routes_en: [this.model.routes?.en, Validators.required] ,
			routes_ar: [this.model.routes?.ar, Validators.required] ,

			what_expect_description_en: [this.model.what_to_expect_description?.en, Validators.required] ,
			what_expect_description_ar: [this.model.what_to_expect_description?.ar, Validators.required] ,

			location_en: [this.model.location?.en, Validators.required] ,
			location_ar: [this.model.location?.ar, Validators.required] ,

			seo_title_en: [this.model.seo?.title?.en, Validators.required],
			seo_title_ar: [this.model.seo?.title?.ar, Validators.required],
			seo_description_en: [this.model.seo?.description?.en, Validators.required],
			seo_description_ar: [this.model.seo?.description?.ar, Validators.required],

			code: [this.model.code, Validators.required] ,
			color: [this.model.color, Validators.required] ,

			corporate_company: [this.model.corporate_company, Validators.required] ,
			corporate_price: [this.model.corporate_price, Validators.required] ,
			selling_per_hour: [this.model.selling_per_hour, Validators.required] ,
			special_price: [this.model.special_price, Validators.required] ,
			minimum_hours_booking: [this.model.minimum_booking, Validators.required] ,
			apply_vat: [this.model.apply_vat ? '1' : '0', Validators.required] ,
			status: [this.model.status, Validators.required] ,

			images: [''] ,
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

		this.model = this.service.prepareObject(this.model, controls);


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
