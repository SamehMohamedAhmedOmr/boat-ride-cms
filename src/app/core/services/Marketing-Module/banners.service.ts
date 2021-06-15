import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {BannersSerializer} from '../../Serializers/Marketing-Module/banners.serializer';
import {BannersModel} from '../../models/Marketing-Module/banners.model';


@Injectable({
	providedIn: 'root'
})

export class BannersService extends BaseService<BannersModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/banners',
			new BannersSerializer());
	}

}
