import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';
import {ServicesEnumsModel} from '../../../../../../core/models/Marketing-Module/services.enums.model';
import {ServicesService} from '../../../../../../core/services/Marketing-Module/services.service';


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
		this.page_name = this.translateService.instant('Components.YACHTS.name');
		this.content_name = this.translateService.instant('Components.YACHTS.single');
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
			/* Basic Information*/
			name_en: ['', Validators.required] ,
			name_ar: ['', Validators.required] ,

			facilities_en: ['', Validators.required] ,
			facilities_ar: ['', Validators.required] ,

			what_is_included_en: ['', Validators.required] ,
			what_is_included_ar: ['', Validators.required] ,

			what_expect_description_en: ['', Validators.required] ,
			what_expect_description_ar: ['', Validators.required] ,

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
			apply_vat: ['', Validators.required] ,
			status: ['', Validators.required] ,

			services: ['', Validators.required] ,
			images: ['', Validators.required] ,

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
			water_slider: ['', Validators.required] ,
			safety_equipment: ['', Validators.required] ,
			soft_drinks_refreshments: ['', Validators.required] ,
			swimming_equipment: ['', Validators.required] ,
			ice_tea_water: ['', Validators.required] ,
			DVD_player: ['', Validators.required] ,
			satellite_system: ['', Validators.required] ,
			red_carpet_on_arrival: ['', Validators.required] ,
			spacious_saloon: ['', Validators.required] ,
			BBQ_grill_equipment: ['', Validators.required] ,
			fresh_towels: ['', Validators.required] ,
			yacht_slippers: ['', Validators.required] ,
			bathroom_amenities: ['', Validators.required] ,
			under_water_light: ['', Validators.required] ,
			LED_screen_tv: ['', Validators.required] ,
			sunbathing_on_the_foredeck: ['', Validators.required] ,
			fishing_equipment: ['', Validators.required] ,
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
		this.model.seo.description = this.model.description;
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
