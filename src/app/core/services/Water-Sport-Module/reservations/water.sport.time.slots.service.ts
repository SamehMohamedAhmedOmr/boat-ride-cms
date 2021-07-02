import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';
import {YachtsTimeSlotsModel} from '../../../models/Yacht-Module/reservartion/yachts.time.slots.model';
import {WaterSportTimeSlotsSerializer} from '../../../Serializers/Water-Sport-Module/reservation/water.sport.time.slots.serializer';
import {WaterSportTimeSlotsModel} from '../../../models/Water-Sport-Module/reservation/water.sport.time.slots.model';


@Injectable({
	providedIn: 'root'
})

export class WaterSportTimeSlotsService {
	private http:HttpClient;
	private url:string;
	private endpoint:string;
	private serializer:WaterSportTimeSlotsSerializer;

	constructor(Http: HttpClient) {
		this.http = Http;
		this.url = environment.url();
		this.endpoint = 'admins/timeslots/water_sport_trips';
		this.serializer = new WaterSportTimeSlotsSerializer();
	}

	public list(item: WaterSportTimeSlotsModel): Observable<YachtsTimeSlotsModel[]> {
		return this.http.post(`${this.url}${this.endpoint}`,  this.serializer.toJson(item))
			.pipe(map((data: any) => this.serializer.fromJsonList(data) as WaterSportTimeSlotsModel[]));
	}
}
