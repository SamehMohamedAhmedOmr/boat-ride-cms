import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {YachtsService} from '../../../../../../core/services/Yacht-Module/yachts.service';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';

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

	constructor(private fb: FormBuilder,
				private service: YachtsService,
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
		this.page_name = this.translateService.instant('Components.YACHTS.name');
		this.content_name = this.translateService.instant('Components.YACHTS.single');
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
			apply_vat: ['0', Validators.required] ,
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
