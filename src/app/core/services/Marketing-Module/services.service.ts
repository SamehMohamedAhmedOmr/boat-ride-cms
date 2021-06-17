import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ServicesModel} from '../../models/Marketing-Module/services.model';
import {ServicesSerializer} from '../../Serializers/Marketing-Module/services.serializer';
import {ServicesEnumsModel} from '../../models/Marketing-Module/services.enums.model';
import {ServicesEnumSerializer} from '../../Serializers/Marketing-Module/services.enum.serializer';

@Injectable({
	providedIn: 'root'
})

export class ServicesService extends BaseService<ServicesModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/services',
			new ServicesSerializer());
	}

	public listEnums(): Observable<ServicesEnumsModel> {
		let serializer = new ServicesEnumSerializer();
		return this.http.get(`${this.url}${this.endpoint}/list-enums`)
			.pipe(map((data: any) => serializer.fromJson(data) as ServicesEnumsModel));
	}

}
