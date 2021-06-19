import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {OffersSerializer} from '../../Serializers/Marketing-Module/offers.serializer';
import {OffersModel} from '../../models/Marketing-Module/offers.model';

@Injectable({
	providedIn: 'root'
})

export class OffersService extends BaseService<OffersModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/offers',
			new OffersSerializer());
	}


}
