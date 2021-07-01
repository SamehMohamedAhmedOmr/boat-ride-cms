import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';


@Injectable({
	providedIn: 'root'
})
export class TimeSlotsHelperService {

	constructor(private datePipe: DatePipe) {
	}

	checkDate(slot, now) {
		let times = slot.time.split(':');
		let date: Date = new Date();
		date.setHours(Number(times[0]), Number(times[1]), Number(times[2]));

		return (date <= now) ? 'past' : (slot.status == 'AVAILABLE') ? 'available' : 'booked' ;
	}

	transformDate(date) {
		return this.datePipe.transform(date, 'yyyy-MM-dd');
	}
}
