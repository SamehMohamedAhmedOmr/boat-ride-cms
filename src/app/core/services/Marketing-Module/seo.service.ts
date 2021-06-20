import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {SeoModel} from '../../models/SEO-Module/seo.model';
import {SeoSerializer} from '../../Serializers/SEO-Module/seo.serializer';

@Injectable({
	providedIn: 'root'
})

export class SeoService extends BaseService<SeoModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/seo',
			new SeoSerializer());
	}


}
