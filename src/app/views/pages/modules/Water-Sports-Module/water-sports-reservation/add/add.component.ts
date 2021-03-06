import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';
import {ErrorMsgHelperService} from '../../../../../../core/services/Helpers/error.msg.helper.service';
import {WaterSportTripService} from '../../../../../../core/services/Water-Sport-Module/reservations/water.sport.trip.service';
import {WaterSportTripObservableService} from '../../../../../../core/services/Water-Sport-Module/reservations/water.sport.trip.observable.service';
import {WaterSportTripEnumsModel} from '../../../../../../core/models/Water-Sport-Module/reservation/water.sport.trip.enums.model';
import {WaterSportsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.model';
import {WaterSportTripModel} from '../../../../../../core/models/Water-Sport-Module/reservation/water.sport.trip.model';


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

	enums: WaterSportTripEnumsModel;
	countries: CountryModel[] = [];
	water_sports: WaterSportsModel[] = [];
	timeSlots: TimeSlotsModel[] = [];


	constructor(private fb: FormBuilder,
				private service: WaterSportTripService,
				private waterSportTripObservableService: WaterSportTripObservableService,
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
		this.page_name = this.translateService.instant('Components.WATER_SPORTS_RESERVATION.name');
		this.content_name = this.translateService.instant('Components.WATER_SPORTS_RESERVATION.single');
	}

	initialiseComponent() {
		this.getDependencies();
	}

	private getDependencies() {
		this.waterSportTripObservableService.getEnums();

		this.waterSportTripObservableService.enums_observable.subscribe((value:WaterSportTripEnumsModel) => {
			this.enums = value;
			this.cdr.markForCheck();
		});

		this.waterSportTripObservableService.water_sport_observable.subscribe((value:WaterSportsModel[]) => {
			this.water_sports = value;
			this.cdr.markForCheck();
		});

		this.waterSportTripObservableService.time_slots_observable.subscribe((value:TimeSlotsModel[]) => {
			this.timeSlots = value;
			this.cdr.markForCheck();
		});

		this.waterSportTripObservableService.country_observable.subscribe((value:CountryModel[]) => {
			this.countries = value;
			this.cdr.markForCheck();
		});

		this.waterSportTripObservableService.loading_observable.subscribe((value:boolean) => {
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
			name: ['', Validators.required],
			title: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', Validators.required],
			address: ['', Validators.required],
			country_id: ['', Validators.required],

			start_hour: ['', Validators.required],
			start_date: ['', Validators.required],
			end_hour: ['', Validators.required],
			end_date: ['', Validators.required],
			water_sport_id: ['', Validators.required],

			status: ['', Validators.required],
			payment_method: ['', Validators.required],
			number_of_people: ['', Validators.required],
			rate_per_hour: new FormControl({value: 0, disabled: true}),
			other_charges: [0, Validators.required],
			discount: [0, Validators.required],
			minimum_Advance_Payment: [0, Validators.required],
			total_price: new FormControl({value: 0, disabled: true}),
			paid_amount: [0],

			client_notes: [''],
			admin_notes: [''],

			coupon_code: [''],
			trip_duration: new FormControl({value: 0, disabled: true}),
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

		let model = new WaterSportTripModel(null);
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
