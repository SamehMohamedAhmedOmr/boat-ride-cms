import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CountryModel} from '../../../models/Marketing-Module/country.model';
import {TimeSlotsModel} from '../../../models/Marketing-Module/time.slots.model';
import {WaterSportTripEnumsModel} from '../../../models/Water-Sport-Module/reservation/water.sport.trip.enums.model';
import {WaterSportsModel} from '../../../models/Water-Sport-Module/water.sports.model';
import {WaterSportsService} from '../Water-Sport/water.sports.service';
import {WaterSportTripService} from './water.sport.trip.service';

@Injectable({
	providedIn: 'root'
})

export class YachtsTripObservableService  {


	private enums_subject = new BehaviorSubject<WaterSportTripEnumsModel>(null);
	public enums_observable = this.enums_subject.asObservable();

	private country_subject = new BehaviorSubject<CountryModel[]>(null);
	public country_observable = this.country_subject.asObservable();

	private water_sport_subject = new BehaviorSubject<WaterSportsModel[]>(null);
	public water_sport_observable = this.water_sport_subject.asObservable();

	private time_slots_subject = new BehaviorSubject<TimeSlotsModel[]>(null);
	public time_slots_observable = this.time_slots_subject.asObservable();

	private loading_subject = new BehaviorSubject<boolean>(true);
	public loading_observable = this.loading_subject.asObservable();


	constructor(private waterSportTripService: WaterSportTripService,
				private waterSportsService: WaterSportsService) {
	}

	getEnums() {
		this.waterSportTripService.listEnums().subscribe(
			(resp) => {
				this.enums_subject.next(resp);
				this.time_slots_subject.next(resp.time_slots);
				this.country_subject.next(resp.countries);
				this.getWaterSports();
			} , error => {
			});
	}

	getWaterSports() {
		this.waterSportsService.list(null).subscribe(
			(resp) => {
				this.water_sport_subject.next(resp);
				this.loading_subject.next(false);
			} , error => {
			});
	}
}
