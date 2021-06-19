import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WaterSportsService} from './water.sports.service';
import {WaterSportsEnumsModel} from '../../../models/Water-Sport-Module/water.sports.enums.model';

@Injectable({
	providedIn: 'root'
})

export class WaterSportObservableService  {

	private enums_subject = new BehaviorSubject<WaterSportsEnumsModel>(null);
	public enums_observable = this.enums_subject.asObservable();

	private loading_subject = new BehaviorSubject<boolean>(true);
	public loading_observable = this.loading_subject.asObservable();


	constructor(private waterSportsService: WaterSportsService) {
	}

	getEnums() {
		this.waterSportsService.listEnums().subscribe(
			(resp) => {
				this.enums_subject.next(resp);
				this.loading_subject.next(false);
			} , error => {
			});
	}

}
