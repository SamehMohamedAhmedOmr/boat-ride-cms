import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {YachtsTripService} from './yachts.trip.service';
import {YachtsTripEnumsModel} from '../../../models/Yacht-Module/reservartion/yachts.trip.enums.model';
import {CountryModel} from '../../../models/Marketing-Module/country.model';
import {YachtsModel} from '../../../models/Yacht-Module/yachts.model';
import {YachtsService} from '../yachts/yachts.service';
import {TimeSlotsModel} from '../../../models/Marketing-Module/time.slots.model';

@Injectable({
	providedIn: 'root'
})

export class YachtsTripObservableService  {


	private enums_subject = new BehaviorSubject<YachtsTripEnumsModel>(null);
	public enums_observable = this.enums_subject.asObservable();

	private country_subject = new BehaviorSubject<CountryModel[]>(null);
	public country_observable = this.country_subject.asObservable();

	private yachts_subject = new BehaviorSubject<YachtsModel[]>(null);
	public yachts_observable = this.yachts_subject.asObservable();

	private time_slots_subject = new BehaviorSubject<TimeSlotsModel[]>(null);
	public time_slots_observable = this.time_slots_subject.asObservable();

	private loading_subject = new BehaviorSubject<boolean>(true);
	public loading_observable = this.loading_subject.asObservable();


	constructor(private yachtsTripService: YachtsTripService,
				private yachtsService: YachtsService) {
	}

	getEnums() {
		this.yachtsTripService.listEnums().subscribe(
			(resp) => {
				this.enums_subject.next(resp);
				this.time_slots_subject.next(resp.time_slots);
				this.country_subject.next(resp.countries);
				this.getYachts();
			} , error => {
			});
	}

	getYachts() {
		this.yachtsService.list(null).subscribe(
			(resp) => {
				this.yachts_subject.next(resp);
				this.loading_subject.next(false);
			} , error => {
			});
	}
}
