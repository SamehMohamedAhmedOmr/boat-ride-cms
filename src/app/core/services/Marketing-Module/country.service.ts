import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {CountriesSerializer} from '../../Serializers/Marketing-Module/countries.serializer';
import {CountryModel} from '../../models/Marketing-Module/country.model';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class CountryService {
	private http:HttpClient;
	private url:string;
	private endpoint:string;
	private serializer:CountriesSerializer;

	constructor(Http: HttpClient) {
		this.http = Http;
		this.url = environment.url();
		this.endpoint = 'admins/countries';
		this.serializer = new CountriesSerializer();
	}

	public list(paginationParams: PaginateParams, paginate = 1): Observable<CountryModel[]> {
		const params = {};
		if (paginationParams) {
			if (paginationParams.search_key) {
				params['search_key'] = paginationParams.search_key;
			}
			if (paginationParams.active) {
				params['is_active'] = paginationParams.active;
			}
			if (paginationParams.per_page) {
				params['per_page'] = paginationParams.per_page;
			}
			if (paginationParams.sort_order) {
				params['sort_order'] = paginationParams.sort_order;
			}
			if (paginationParams.next_page_index) {
				params['page'] = paginationParams.next_page_index + 1;
			}
			if (paginate) {
				params['is_pagination'] = 1;
			}
		}
		return this.http.get(`${this.url}${this.endpoint}`, {
			params: params
		}).pipe(map((data: any) => this.serializer.fromJsonList(data) as CountryModel[]));
	}
}
