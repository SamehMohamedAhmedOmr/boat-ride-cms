import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PermissionsSerializer} from '../../Serializers/ACL-Module/permissions.serializer';
import {PermissionsModel} from '../../models/ACL-Module/permissions.model';

@Injectable({
	providedIn: 'root'
})

export class PermissionsService {

	private url = environment.url();
	private endpoint = 'admins/permissions';
	private serializer = new PermissionsSerializer();
	private http:HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

	public list(): Observable<PermissionsModel[]> {
		return this.http.get (`${this.url}${this.endpoint}` )
			.pipe(map((data: any) => this.serializer.fromJsonList(data) as PermissionsModel[]));
	}

	public getMyPermission(): Observable<PermissionsModel[]> {
		let end_point = 'admins/admins/get_permissions';
		return this.http.get (`${this.url}${end_point}` )
			.pipe(map((data: any) => this.serializer.fromJsonList(data) as PermissionsModel[]));
	}

}
