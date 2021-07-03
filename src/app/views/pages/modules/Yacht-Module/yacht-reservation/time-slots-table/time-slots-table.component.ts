import {Component, Input, OnInit} from '@angular/core';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';
import {TimeSlotsHelperService} from '../../../../../../core/services/Helpers/time.slots.helper.service';

@Component({
	selector: 'kt-time-slots-table',
	templateUrl: './time-slots-table.component.html',
	styleUrls: ['./time-slots-table.component.scss']
})
export class TimeSlotsTableComponent implements OnInit {

	@Input() first_day_time_slots: TimeSlotsModel[];
	@Input() second_day_time_slots: TimeSlotsModel[];
	@Input() start_date: string;
	@Input() next_start_date: string;
	now: Date = new Date();

	constructor(private timeSlotsHelperService: TimeSlotsHelperService) {
	}

	ngOnInit() {
	}

	checkDate(slot, date) {
		return  this.timeSlotsHelperService.checkDate(slot, this.now, date);
	}
}
