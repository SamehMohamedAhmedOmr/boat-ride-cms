import {Component, Input, OnInit} from '@angular/core';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';
import {YachtsTimeSlotsModel} from '../../../../../../core/models/Yacht-Module/yachts.time.slots.model';

@Component({
	selector: 'kt-time-slots-table',
	templateUrl: './time-slots-table.component.html',
	styleUrls: ['./time-slots-table.component.scss']
})
export class TimeSlotsTableComponent implements OnInit {

	@Input() first_day_time_slots: TimeSlotsModel[];
	@Input() second_day_time_slots: TimeSlotsModel[];
	@Input() start_date: string;
	@Input() end_date: string;
	now: Date = new Date();

	constructor() {
	}

	ngOnInit() {
	}

	checkDate(slot) {
		let times = slot.time.split(':');
		let date: Date = new Date();
		date.setHours(Number(times[0]), Number(times[1]), Number(times[2]));

		return (date <= this.now) ? 'past' : 'available';
	}
}
