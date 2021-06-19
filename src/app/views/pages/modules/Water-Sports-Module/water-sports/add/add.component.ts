import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {WaterSportObservableService} from '../../../../../../core/services/Water-Sport-Module/Water-Sport/water.sport.observable.service';
import {WaterSportsService} from '../../../../../../core/services/Water-Sport-Module/Water-Sport/water.sports.service';
import {WaterSportsEnumsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.enums.model';
import {WaterSportsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.model';

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

	enums: WaterSportsEnumsModel;

	constructor(private fb: FormBuilder,
				private service: WaterSportsService,
				private waterSportObservableService: WaterSportObservableService,
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
		this.page_name = this.translateService.instant('Components.WATER_SPORTS.name');
		this.content_name = this.translateService.instant('Components.WATER_SPORTS.single');
	}

	initialiseComponent() {
		this.getDependencies();
	}

	private getDependencies() {
		this.waterSportObservableService.getEnums();

		this.waterSportObservableService.enums_observable.subscribe((value:WaterSportsEnumsModel) => {
			this.enums = value;
			this.cdr.markForCheck();
		});

		this.waterSportObservableService.loading_observable.subscribe((value:boolean) => {
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

			water_sport_description_en: ['', Validators.required] ,
			water_sport_descriptions_ar: ['', Validators.required] ,

			routes_en: ['', Validators.required] ,
			routes_ar: ['', Validators.required] ,

			what_expect_description_en: ['', Validators.required] ,
			what_expect_description_ar: ['', Validators.required] ,

			location_en: ['', Validators.required] ,
			location_ar: ['', Validators.required] ,

			code: ['', Validators.required] ,
			color: ['', Validators.required] ,

			corporate_company: ['', Validators.required] ,
			corporate_price: ['', Validators.required] ,
			selling_per_hour: ['', Validators.required] ,
			special_price: ['', Validators.required] ,
			minimum_hours_booking: ['', Validators.required] ,
			apply_vat: ['0', Validators.required] ,
			status: ['', Validators.required] ,

			images: [''] ,
		});
	}



	clearForm() {
		this.form.reset();
	}

	submitForm () {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			console.log(this.form.controls);
			return this.formErrorService.markAsTouched(controls);
		}

		let model = new WaterSportsModel(null);
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
