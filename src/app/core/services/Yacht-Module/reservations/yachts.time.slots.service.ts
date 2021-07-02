import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';
import {YachtsTimeSlotsModel} from '../../../models/Yacht-Module/reservartion/yachts.time.slots.model';
import {YachtsTimeSlotsSerializer} from '../../../Serializers/Yacht-Module/reservation/yachts.time.slots.serializer';


@Injectable({
	providedIn: 'root'
})

export class YachtsTimeSlotsService {
	private http:HttpClient;
	private url:string;
	private endpoint:string;
	private serializer:YachtsTimeSlotsSerializer;

	constructor(Http: HttpClient) {
		this.http = Http;
		this.url = environment.url();
		this.endpoint = 'admins/timeslots/yacht-trips';
		this.serializer = new YachtsTimeSlotsSerializer();
	}

	public list(item: YachtsTimeSlotsModel): Observable<YachtsTimeSlotsModel[]> {
		return this.http.post(`${this.url}${this.endpoint}`,  this.serializer.toJson(item))
			.pipe(map((data: any) => this.serializer.fromJsonList(data) as YachtsTimeSlotsModel[]));
	}
}
