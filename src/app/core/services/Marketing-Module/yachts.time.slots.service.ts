import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TimeSlotsSerializer} from '../../Serializers/Marketing-Module/time.slots.serializer';
import {YachtsTimeSlotsModel} from '../../models/Yacht-Module/yachts.time.slots.model';

@Injectable({
	providedIn: 'root'
})

export class YachtsTimeSlotsService {
	private http:HttpClient;
	private url:string;
	private endpoint:string;
	private serializer:TimeSlotsSerializer;

	constructor(Http: HttpClient) {
		this.http = Http;
		this.url = environment.url();
		this.endpoint = 'admins/timeslots/yacht-trips';
		this.serializer = new TimeSlotsSerializer();
	}

	public list(item: YachtsTimeSlotsModel): Observable<YachtsTimeSlotsModel[]> {
		return this.http.post(`${this.url}${this.endpoint}`,  this.serializer.toJson(item))
			.pipe(map((data: any) => this.serializer.fromJsonList(data) as YachtsTimeSlotsModel[]));
	}
}
