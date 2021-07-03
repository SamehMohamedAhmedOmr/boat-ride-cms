import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';


@Injectable({
	providedIn: 'root'
})
export class TimeSlotsHelperService {

	constructor(public datePipe: DatePipe) {
	}

	checkDate(slot, now, current_date) {

		let target_date = new Date(current_date + ' 00:00:00');
		let target_current_date = new Date(now.toDateString());
		if (target_date > target_current_date){
			return (slot.status == 'AVAILABLE') ? 'available' : 'booked' ;
		}
		else if (target_date < target_current_date){
			if (slot.status == 'UNAVAILABLE'){
				return 'booked' ;
			}
			return  'past';
		}

		let times = slot.time.split(':');
		let date: Date = new Date();
		date.setHours(Number(times[0]), Number(times[1]), Number(times[2]));

		if (slot.status == 'UNAVAILABLE'){
			return 'booked' ;
		}

		return (date <= now) ? 'past' : 'available' ;
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

	static transformListDate(date) {
		let datePipe = new DatePipe('en-US');
		return datePipe.transform(date, 'MMM d, y, h:mm a');
	}
}
