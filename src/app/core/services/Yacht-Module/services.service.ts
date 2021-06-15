import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {ServicesModel} from '../../models/Yacht-Module/services.model';
import {ServicesSerializer} from '../../Serializers/Yacht-Module/services.serializer';


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


}
