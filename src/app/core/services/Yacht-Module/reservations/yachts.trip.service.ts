import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseService} from '../../Base/base.service';
import {environment} from '../../../../../environments/environment';
import {YachtsTripModel} from '../../../models/Yacht-Module/yachts.trip.model';
import {YachtsTripEnumsModel} from '../../../models/Yacht-Module/yachts.trip.enums.model';
import {YachtsTripSerializer} from '../../../Serializers/Yacht-Module/yachts.trip.serializer';
import {YachtsTripEnumSerializer} from '../../../Serializers/Yacht-Module/yachts.trip.enum.serializer';


@Injectable({
	providedIn: 'root'
})

export class YachtsTripService extends BaseService<YachtsTripModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/trips',
			new YachtsTripSerializer());
	}

	public listEnums(): Observable<YachtsTripEnumsModel> {
		let serializer = new YachtsTripEnumSerializer();
		return this.http.get(`${this.url}${this.endpoint}/list-enums`)
			.pipe(map((data: any) => serializer.fromJson(data) as YachtsTripEnumsModel));
	}

	public prepareObject(model: YachtsTripModel, controls) {
		model.start_hour = controls['start_hour'].value;
		model.start_date = controls['start_date'].value;

		model.end_hour = controls['end_hour'].value;
		model.end_date = controls['end_date'].value;

		model.status = controls['status'].value;
		model.payment_method = controls['payment_method'].value;

		model.name = controls['name'].value;
		model.title = controls['title'].value;
		model.phone = controls['phone'].value;
		model.email = controls['email'].value;
		model.address = controls['address'].value;


		model.country_id = controls['country_id'].value;
		model.yacht_id = controls['yacht_id'].value;
		model.number_of_people = controls['number_of_people'].value;
		model.rate_per_hour = controls['rate_per_hour'].value;
		model.other_charges = controls['other_charges'].value;
		model.discount = controls['discount'].value;
		model.minimum_Advance_Payment = controls['minimum_Advance_Payment'].value;

		model.client_notes = controls['client_notes'].value;
		model.admin_notes = controls['admin_notes'].value;

		return model;
	}

}
