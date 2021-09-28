import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {YachtsTripService} from '../../../../../../core/services/Yacht-Module/reservations/yachts.trip.service';
import {YachtsTripModel} from '../../../../../../core/models/Yacht-Module/reservartion/yachts.trip.model';
import {YachtsTripObservableService} from '../../../../../../core/services/Yacht-Module/reservations/yachts.trip.observable.service';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/reservartion/yachts.trip.enums.model';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';
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

	model: YachtsTripModel;

	id = null;
	is_result: boolean;

	enums: YachtsTripEnumsModel;
	countries: CountryModel[] = [];
	yachts: YachtsModel[] = [];
	timeSlots: TimeSlotsModel[] = [];


	constructor(private formBuilder: FormBuilder,
				private service: YachtsTripService,
				private yachtsTripObservableService: YachtsTripObservableService,
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
		this.page_name = this.translateService.instant('Components.YACHTS_RESERVATION.name');
		this.content_name = this.translateService.instant('Components.YACHTS_RESERVATION.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.is_result = false;
		this.get();
		this.getDependencies();
	}

	private getDependencies() {
		this.yachtsTripObservableService.getEnums();

		this.yachtsTripObservableService.enums_observable.subscribe((value:YachtsTripEnumsModel) => {
			this.enums = value;
			this.cdr.markForCheck();
		});

		this.yachtsTripObservableService.yachts_observable.subscribe((value:YachtsModel[]) => {
			this.yachts = value;
			this.cdr.markForCheck();
		});

		this.yachtsTripObservableService.time_slots_observable.subscribe((value:TimeSlotsModel[]) => {
			this.timeSlots = value;
			this.cdr.markForCheck();
		});

		this.yachtsTripObservableService.country_observable.subscribe((value:CountryModel[]) => {
			this.countries = value;
			this.cdr.markForCheck();
		});

		this.yachtsTripObservableService.loading_observable.subscribe((value:boolean) => {
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
			this.service.get(this.id, false).subscribe(
				(data) => {
					this.model = data;
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
			name: [this.model.name, Validators.required],
			title: [this.model.title, Validators.required],
			phone: [this.model.phone, Validators.required],
			email: [this.model.email, Validators.required],
			address: [this.model.address, Validators.required],
			country_id: [this.model.country?.id, Validators.required],

			start_hour: [this.model.start_hour, Validators.required],
			start_date: [this.model.start_date, Validators.required],

			end_hour: [this.model.end_hour, Validators.required],
			end_date: [this.model.end_date, Validators.required],

			status: [this.model.status, Validators.required],
			payment_method: [this.model.payment_method, Validators.required],

			yacht_id: [this.model.yacht?.id, Validators.required],
			number_of_people: [this.model.number_of_people, Validators.required],
			rate_per_hour: new FormControl({value: this.model.rate_per_hour, disabled: true}),
			other_charges: [this.model.other_charges ?? 0, Validators.required],
			discount: [this.model.discount ?? 0, Validators.required],
			minimum_Advance_Payment: [this.model.minimum_Advance_Payment ?? 0, Validators.required],
			total_price: new FormControl({value: this.model.total_price ?? 0, disabled: true}),
			paid_amount: [this.model.paid_amount ?? 0],

			client_notes: [this.model.client_notes],
			admin_notes: [this.model.admin_notes],

			coupon_code: [this.model.coupon_code],
			trip_duration: new FormControl({value: this.model.trip_duration, disabled: true}),
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
