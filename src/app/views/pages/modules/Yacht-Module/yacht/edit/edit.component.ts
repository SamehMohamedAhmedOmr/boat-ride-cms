import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {YachtsService} from '../../../../../../core/services/Yacht-Module/yachts/yachts.service';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';
import {YachtsObservableService} from '../../../../../../core/services/Yacht-Module/yachts/yachts.observable.service';
import {ErrorMsgHelperService} from '../../../../../../core/services/Helpers/error.msg.helper.service';


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

	model: YachtsModel;

	id = null;
	is_result: boolean;

	selected_images: [] = [];

	enums: YachtsEnumsModel;
	services: ServicesModel[] = [];
	banner_image: string;


	constructor(private formBuilder: FormBuilder,
				private service: YachtsService,
				private yachtsObservableService: YachtsObservableService,
				private formErrorService: FormErrorService,
				private errorMsgHelperService: ErrorMsgHelperService,
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
		this.page_name = this.translateService.instant('Components.YACHTS.name');
		this.content_name = this.translateService.instant('Components.YACHTS.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = false;
		this.get();
		this.getDependencies();
	}

	private getDependencies() {
		this.yachtsObservableService.getEnums();

		this.yachtsObservableService.enums_observable.subscribe((value:YachtsEnumsModel) => {
			this.enums = value;
			this.cdr.markForCheck();
		});

		this.yachtsObservableService.services_observable.subscribe((value:ServicesModel[]) => {
			this.services = value;
			this.cdr.markForCheck();
		});

		this.yachtsObservableService.loading_observable.subscribe((value:boolean) => {
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
					this.selected_images = this.model.images;
					this.banner_image = this.model.banner_image;
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

			facilities_en: [this.model.facilities?.en, Validators.required] ,
			facilities_ar: [this.model.facilities?.ar, Validators.required] ,

			what_is_included_en: [this.model.what_is_included?.en, Validators.required] ,
			what_is_included_ar: [this.model.what_is_included?.ar, Validators.required] ,

			what_expect_description_en: [this.model.what_expect_description?.en, Validators.required] ,
			what_expect_description_ar: [this.model.what_expect_description?.ar, Validators.required] ,

			seo_title_en: [this.model.seo?.title?.en, Validators.required],
			seo_title_ar: [this.model.seo?.title?.ar, Validators.required],
			seo_description_en: [this.model.seo?.description?.en, Validators.required],
			seo_description_ar: [this.model.seo?.description?.ar, Validators.required],
			seo_meta_tags_en: [this.model.seo?.keywords?.en],
			seo_meta_tags_ar: [this.model.seo?.keywords?.ar],

			type: [this.model.type, Validators.required] ,
			code: [this.model.code, Validators.required] ,
			color: [this.model.color, Validators.required] ,
			passenger_capacity: [this.model.passenger_capacity, Validators.required] ,
			size: [this.model.size, Validators.required] ,
			no_of_captain: [this.model.no_of_captain, Validators.required] ,
			crew_members: [this.model.crew_members, Validators.required] ,
			corporate_company: [this.model.corporate_company, Validators.required] ,
			corporate_price: [this.model.corporate_price, Validators.required] ,
			selling_per_hour: [this.model.selling_per_hour, Validators.required] ,
			yacht_special_price: [this.model.yacht_special_price, Validators.required] ,
			minimum_hours_booking: [this.model.minimum_hours_booking, Validators.required] ,
			apply_vat: [this.model.apply_vat ? '1' : '0', Validators.required] ,
			status: [this.model.status, Validators.required] ,
			beds: [this.model.beds, Validators.required] ,

			// @ts-ignore
			services: [this.model.services.map(k => k.id), Validators.required] ,
			images: [''] ,
			banner_image: [''],

			/* Technical Information*/
			manufacturer: [this.model.manufacturer, Validators.required] ,
			fuel_type: [this.model.fuel_type + '', Validators.required] ,
			hull_type: [this.model.hull_type + '', Validators.required] ,
			engine_type: [this.model.engine_type + '', Validators.required] ,
			horse_Power: [this.model.horse_Power , Validators.required] ,
			max_speed: [this.model.max_speed, Validators.required] ,
			cruising_speed: [this.model.cruising_speed, Validators.required] ,
			length: [this.model.length, Validators.required] ,
			beam: [this.model.beam, Validators.required] ,
			model: [this.model.model, Validators.required] ,
			year: [this.model.year, Validators.required] ,


			/* Key Feature*/
			water_slider: [this.model.water_slider] ,
			safety_equipment: [this.model.safety_equipment] ,
			soft_drinks_refreshments: [this.model.soft_drinks_refreshments] ,
			swimming_equipment: [this.model.swimming_equipment] ,
			ice_tea_water: [this.model.ice_tea_water] ,
			DVD_player: [this.model.DVD_player] ,
			satellite_system: [this.model.satellite_system] ,
			red_carpet_on_arrival: [this.model.red_carpet_on_arrival] ,
			spacious_saloon: [this.model.spacious_saloon] ,
			BBQ_grill_equipment: [this.model.BBQ_grill_equipment] ,
			fresh_towels: [this.model.fresh_towels] ,
			yacht_slippers: [this.model.yacht_slippers] ,
			bathroom_amenities: [this.model.bathroom_amenities] ,
			under_water_light: [this.model.under_water_light] ,
			LED_screen_tv: [this.model.LED_screen_tv] ,
			sunbathing_on_the_foredeck: [this.model.sunbathing_on_the_foredeck] ,
			fishing_equipment: [this.model.fishing_equipment] ,
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
			let invalid_controls = this.formErrorService.markAsTouched(controls);
			// @ts-ignore
			this.errorMsgHelperService.handleErrors(invalid_controls);
			return;
		}

		this.model.createObjects();

		this.model = this.service.prepareObject(this.model, controls);


		// call service to store shipping rule
		this.isLoadingResults = true;
		this.authNoticeService.setNotice(null);
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
