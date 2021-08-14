import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';
import {YachtsService} from '../../../../../../core/services/Yacht-Module/yachts/yachts.service';
import {YachtsObservableService} from '../../../../../../core/services/Yacht-Module/yachts/yachts.observable.service';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';
import {ErrorMsgHelperService} from '../../../../../../core/services/Helpers/error.msg.helper.service';

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

	enums: YachtsEnumsModel;
	services: ServicesModel[] = [];

	constructor(private fb: FormBuilder,
				private service: YachtsService,
				private yachtsObservableService: YachtsObservableService,
				private formErrorService: FormErrorService,
				private errorMsgHelperService: ErrorMsgHelperService,
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
		this.page_name = this.translateService.instant('Components.YACHTS.name');
		this.content_name = this.translateService.instant('Components.YACHTS.single');
	}

	initialiseComponent() {
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
			if (!value){
				this.initForm();
				this.is_result = true;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			}
		});
	}
	/**
	 * Initiate the form
	 *
	 */
	private initForm() {
		this.form = this.fb.group({
			/* Basic Information*/
			name_en: ['', Validators.required] ,
			name_ar: ['', Validators.required] ,

			facilities_en: ['', Validators.required] ,
			facilities_ar: ['', Validators.required] ,

			what_is_included_en: ['', Validators.required] ,
			what_is_included_ar: ['', Validators.required] ,

			what_expect_description_en: ['', Validators.required] ,
			what_expect_description_ar: ['', Validators.required] ,

			seo_title_en: ['', Validators.required] ,
			seo_title_ar: ['', Validators.required] ,

			seo_description_en: ['', Validators.required] ,
			seo_description_ar: ['', Validators.required] ,

			seo_meta_tags_en: [''],
			seo_meta_tags_ar: [''],

			type: ['', Validators.required] ,
			code: ['', Validators.required] ,
			color: ['', Validators.required] ,
			passenger_capacity: ['', Validators.required] ,
			size: ['', Validators.required] ,
			no_of_captain: ['', Validators.required] ,
			crew_members: ['', Validators.required] ,

			corporate_company: ['', Validators.required] ,
			corporate_price: ['', Validators.required] ,
			selling_per_hour: ['', Validators.required] ,
			yacht_special_price: ['', Validators.required] ,
			minimum_hours_booking: ['', Validators.required] ,
			apply_vat: ['0', Validators.required] ,
			status: ['', Validators.required] ,
			beds: ['', Validators.required] ,

			services: ['', Validators.required] ,
			images: [''] ,

			/* Technical Information*/
			manufacturer: ['', Validators.required] ,
			fuel_type: ['', Validators.required] ,
			hull_type: ['', Validators.required] ,
			engine_type: ['', Validators.required] ,
			horse_Power: ['', Validators.required] ,
			max_speed: ['', Validators.required] ,
			cruising_speed: ['', Validators.required] ,
			length: ['', Validators.required] ,
			beam: ['', Validators.required] ,


			/* Key Feature*/
			water_slider: [false] ,
			safety_equipment: [false] ,
			soft_drinks_refreshments: [false] ,
			swimming_equipment: [false] ,
			ice_tea_water: [false] ,
			DVD_player: [false] ,
			satellite_system: [false] ,
			red_carpet_on_arrival: [false] ,
			spacious_saloon: [false] ,
			BBQ_grill_equipment: [false] ,
			fresh_towels: [false] ,
			yacht_slippers: [false] ,
			bathroom_amenities: [false] ,
			under_water_light: [false] ,
			LED_screen_tv: [false] ,
			sunbathing_on_the_foredeck: [false] ,
			fishing_equipment: [false] ,
		});
	}



	clearForm() {
		this.form.reset();
	}

	submitForm () {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			let invalid_controls = this.formErrorService.markAsTouched(controls);
			// @ts-ignore
			this.errorMsgHelperService.handleErrors(invalid_controls);
			return;
		}

		let model = new YachtsModel(null);
		model = this.service.prepareObject(model, controls);

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

}
