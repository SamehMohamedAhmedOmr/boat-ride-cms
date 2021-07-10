import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/reservartion/yachts.trip.enums.model';
import {YachtsTimeSlotsModel} from '../../../../../../core/models/Yacht-Module/reservartion/yachts.time.slots.model';
import {TimeSlotsHelperService} from '../../../../../../core/services/Helpers/time.slots.helper.service';

@Component({
	selector: 'kt-trip-fields-form',
	templateUrl: './trip-fields-form.component.html',
	styleUrls: ['./trip-fields-form.component.scss']
})
export class TripFieldsFormComponent implements OnInit, OnChanges {

	@Input() form: FormGroup;
	@Input() yachts: YachtsModel[];
	@Input() start_timeSlots: YachtsTimeSlotsModel[] = [];
	@Input() end_timeSlots: YachtsTimeSlotsModel[] = [];
	@Input() enumsModel: YachtsTripEnumsModel;
	now: Date = new Date();

	constructor(private timeSlotsHelperService:TimeSlotsHelperService) {
	}

	ngOnInit() {

	}

	ngOnChanges(changes: SimpleChanges): void {
		this.listenOnTripDuration();
		this.listenOnPriceChanges();
	}

	listenOnPriceChanges(){
		this.form.get('yacht_id').valueChanges.subscribe(yacht_id => {
			let target_yacht = this.yachts.find(m => m.id == yacht_id);
			if (target_yacht){
				this.form.get('rate_per_hour').setValue(target_yacht.selling_per_hour);
			}
		});

		this.form.get('rate_per_hour').valueChanges.subscribe(price => {
			this.calculateTotalPrice();
		});

		this.form.get('other_charges').valueChanges.subscribe(price => {
			this.calculateTotalPrice();
		});

		this.form.get('discount').valueChanges.subscribe(price => {
			this.calculateTotalPrice();
		});

		this.form.get('trip_duration').valueChanges.subscribe(price => {
			this.calculateTotalPrice();
		});
	}


	calculateTotalPrice(){
		let rate_per_hour = this.form.controls['rate_per_hour'].value;
		let trip_duration = this.form.controls['trip_duration'].value;
		let other_charges = this.form.controls['other_charges'].value;
		let discount = this.form.controls['discount'].value;

		rate_per_hour = this.convertToNumber(rate_per_hour);
		trip_duration = this.convertToNumber(trip_duration);
		other_charges = this.convertToNumber(other_charges);
		discount = this.convertToNumber(discount);

		let total_price = (rate_per_hour * trip_duration) + other_charges - discount;

		total_price = (total_price < 0) ? 0 : total_price;

		this.form.get('total_price').setValue(total_price);
	}

	convertToNumber(value){
		if (!value){
			return 0;
		}
		return parseFloat(value);
	}


	listenOnTripDuration(){
		this.form.get('start_hour').valueChanges.subscribe(x => {
			this.calculateTripDuration();
		});

		this.form.get('start_date').valueChanges.subscribe(x => {
			this.calculateTripDuration();
		});

		this.form.get('end_hour').valueChanges.subscribe(x => {
			this.calculateTripDuration();
		});

		this.form.get('end_date').valueChanges.subscribe(x => {
			this.calculateTripDuration();
		});
	}

	checkDate(slot) {
		if (slot.status == null){
			return  false;
		}
		let start_date = this.form.get('start_date').value;
		start_date = (start_date) ? start_date : null;

		let status =  this.timeSlotsHelperService.checkDate(slot, this.now, start_date);
		return (status != 'available');
	}


	calculateTripDuration(){
		let start_date = this.form.controls['start_date'].value;
		let end_date = this.form.controls['end_date'].value;
		let start_hour = this.form.controls['start_hour'].value;
		let end_hour = this.form.controls['end_hour'].value;

		if (start_hour && start_date && end_hour && end_date){
			let hours = this.timeSlotsHelperService.differenceBetweenDates(start_date, start_hour, end_date, end_hour);
			this.form.controls['trip_duration'].setValue(hours);
		}

	}
}
