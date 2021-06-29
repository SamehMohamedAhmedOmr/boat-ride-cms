import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TimeSlotsSerializer} from '../../Serializers/Marketing-Module/time.slots.serializer';
import {TimeSlotsModel} from '../../models/Marketing-Module/time.slots.model';

@Injectable({
	providedIn: 'root'
})

export class TimeSlotsService {
	private http:HttpClient;
	private url:string;
	private endpoint:string;
	private serializer:TimeSlotsSerializer;

	constructor(Http: HttpClient) {
		this.http = Http;
		this.url = environment.url();
		this.endpoint = 'admins/timeslots';
		this.serializer = new TimeSlotsSerializer();
	}

	public list(): Observable<TimeSlotsModel[]> {
		const params = {};
		return this.http.get(`${this.url}${this.endpoint}`, {
			params: params
		}).pipe(map((data: any) => this.serializer.fromJsonList(data) as TimeSlotsModel[]));
	}
}
