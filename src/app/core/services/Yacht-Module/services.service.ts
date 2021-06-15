import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {ServicesModel} from '../../models/Yacht-Module/services.model';
import {ServicesSerializer} from '../../Serializers/Yacht-Module/services.serializer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ServicesEnumsModel} from '../../models/Yacht-Module/services.enums.model';
import {ServicesEnumSerializer} from '../../Serializers/Yacht-Module/services.enum.serializer';


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
