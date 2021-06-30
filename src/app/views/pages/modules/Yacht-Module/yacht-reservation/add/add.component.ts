import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {YachtsTripService} from '../../../../../../core/services/Yacht-Module/reservations/yachts.trip.service';
import {YachtsTripModel} from '../../../../../../core/models/Yacht-Module/yachts.trip.model';
import {YachtsTripObservableService} from '../../../../../../core/services/Yacht-Module/reservations/yachts.trip.observable.service';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.trip.enums.model';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';

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

	enums: YachtsTripEnumsModel;
	countries: CountryModel[] = [];
	yachts: YachtsModel[] = [];
	timeSlots: TimeSlotsModel[] = [];


	constructor(private fb: FormBuilder,
				private service: YachtsTripService,
				private yachtsTripObservableService: YachtsTripObservableService,
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
		this.page_name = this.translateService.instant('Components.YACHTS_RESERVATION.name');
		this.content_name = this.translateService.instant('Components.YACHTS_RESERVATION.single');
	}

	initialiseComponent() {
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

		this.yachtsTripObservableService.yachts_time_slots_observable.subscribe((value:TimeSlotsModel[]) => {
			this.timeSlots = value;
			this.cdr.markForCheck();
		});

		this.yachtsTripObservableService.country_observable.subscribe((value:CountryModel[]) => {
			this.countries = value;
			this.cdr.markForCheck();
		});

		this.yachtsTripObservableService.loading_observable.subscribe((value:boolean) => {
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
			yacht_id: ['', Validators.required],

			status: ['', Validators.required],
			payment_method: ['', Validators.required],
			number_of_people: ['', Validators.required],
			rate_per_hour: ['', Validators.required],
			other_charges: ['', Validators.required],
			discount: ['', Validators.required],
			minimum_Advance_Payment: ['', Validators.required],

			client_notes: ['', Validators.required],
			admin_notes: ['', Validators.required],
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

		let model = new YachtsTripModel(null);
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
