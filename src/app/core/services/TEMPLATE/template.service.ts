import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {TemplateModel} from '../../models/TEMPLATE/template.model';
import {TemplateSerializer} from '../../Serializers/TEMPLATE/template.serializer';


@Injectable({
	providedIn: 'root'
})

export class TemplateService extends BaseService<TemplateModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/services',
			new TemplateSerializer());
	}


}
