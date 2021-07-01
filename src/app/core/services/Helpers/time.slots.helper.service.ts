import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';


@Injectable({
	providedIn: 'root'
})
export class TimeSlotsHelperService {

	constructor(private datePipe: DatePipe) {
	}

	checkDate(slot, now, next = 0) {
		if (next){
			return (slot.status == 'AVAILABLE') ? 'available' : 'booked' ;
		}

		let times = slot.time.split(':');
		let date: Date = new Date();
		date.setHours(Number(times[0]), Number(times[1]), Number(times[2]));

		return (date <= now) ? 'past' : (slot.status == 'AVAILABLE') ? 'available' : 'booked' ;
	}

	transformDate(date) {
		return this.datePipe.transform(date, 'yyyy-MM-dd');
	}

	differenceBetweenDates(start_date, start_hour, end_date, end_hour){
		let start_trip_date = new Date(start_date + ' ' + start_hour);
		let end_trip_date = new Date(end_date + ' ' + end_hour);

		// @ts-ignore
		let diffInMilliseconds = Math.abs(start_trip_date - end_trip_date);
		return diffInMilliseconds / 3600000;
	}

}
