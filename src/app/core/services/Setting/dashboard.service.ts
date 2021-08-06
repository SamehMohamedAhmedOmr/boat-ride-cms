import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {DashboardModel} from '../../models/Settings/dashboard.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DashboardSerializer} from '../../Serializers/Setting/dashboard.serializer';
import {SettingsModel} from '../../models/Settings/settings.model';
import {SettingsSerializer} from '../../Serializers/Setting/settings.serializer';


@Injectable({
	providedIn: 'root'
})

export class DashboardService {
	private http: HttpClient;
	private url: string;
	private endpoint: string;
	private serializer: DashboardSerializer;

	constructor(Http: HttpClient) {
		this.http = Http;
		this.endpoint = 'admins/dashboard-report';
		this.url = environment.url();
		this.serializer = new DashboardSerializer();
	};

	public get(): Observable<DashboardModel> {
		return this.http
			.get(`${this.url}${this.endpoint}`)
			.pipe(map((data: any) => this.serializer.fromJson(data) as DashboardModel));
	}


	public createSettings(item: SettingsModel): Observable<SettingsModel> {
		let endpoint = 'admins/settings';
		let serializer = new SettingsSerializer();
		return this.http
			.post<SettingsModel>(`${this.url}${endpoint}`, serializer.toJson(item))
			.pipe(map(data => serializer.fromJson(data) as SettingsModel));
	}

}
