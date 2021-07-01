import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.trip.enums.model';
import {YachtsTimeSlotsModel} from '../../../../../../core/models/Yacht-Module/yachts.time.slots.model';
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
	}

	checkDate(slot) {
		if (slot.status == null){
			return  false;
		}
		let status =  this.timeSlotsHelperService.checkDate(slot, this.now);
		return (status != 'available');
	}
}
