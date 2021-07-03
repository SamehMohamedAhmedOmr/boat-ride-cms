import {Component, Input, OnInit} from '@angular/core';
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
export class TripFieldsFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() yachts: YachtsModel[];
	@Input() start_timeSlots: YachtsTimeSlotsModel[] = [];
	@Input() end_timeSlots: YachtsTimeSlotsModel[] = [];
	@Input() enumsModel: YachtsTripEnumsModel;
	now: Date = new Date();

	constructor(private timeSlotsHelperService:TimeSlotsHelperService) {
	}

	ngOnInit() {
		this.listenOnTripDuration();
	}


	listenOnPriceChanges(){
		this.form.get('yacht_id').valueChanges.subscribe(x => {
			//this.getTimeSlots();
		});
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
		let status =  this.timeSlotsHelperService.checkDate(slot, this.now);
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
