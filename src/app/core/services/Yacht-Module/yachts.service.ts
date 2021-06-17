import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {YachtsSerializer} from '../../Serializers/Yacht-Module/yachts.serializer';
import {YachtsModel} from '../../models/Yacht-Module/yachts.model';
import {YachtsEnumsModel} from '../../models/Yacht-Module/yachts.enums.model';
import {YachtsEnumSerializer} from '../../Serializers/Yacht-Module/yachts.enum.serializer';


@Injectable({
	providedIn: 'root'
})

export class YachtsService extends BaseService<YachtsModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/yachts',
			new YachtsSerializer());
	}

	public listEnums(): Observable<YachtsEnumsModel> {
		let serializer = new YachtsEnumSerializer();
		return this.http.get(`${this.url}${this.endpoint}/list-enums`)
			.pipe(map((data: any) => serializer.fromJson(data) as YachtsEnumsModel));
	}

}
