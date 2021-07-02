import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseService} from '../../Base/base.service';
import {environment} from '../../../../../environments/environment';
import {WaterSportTripModel} from '../../../models/Water-Sport-Module/reservation/water.sport.trip.model';
import {WaterSportTripSerializer} from '../../../Serializers/Water-Sport-Module/reservation/water.sport.trip.serializer';
import {WaterSportTripEnumsModel} from '../../../models/Water-Sport-Module/reservation/water.sport.trip.enums.model';
import {WaterSportTripEnumSerializer} from '../../../Serializers/Water-Sport-Module/reservation/water.sport.trip.enum.serializer';


@Injectable({
	providedIn: 'root'
})

export class WaterSportTripService extends BaseService<WaterSportTripModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/water_sport_trips',
			new WaterSportTripSerializer());
	}

	public listEnums(): Observable<WaterSportTripEnumsModel> {
		let serializer = new WaterSportTripEnumSerializer();
		return this.http.get(`${this.url}${this.endpoint}/list-enums`)
			.pipe(map((data: any) => serializer.fromJson(data) as WaterSportTripEnumsModel));
	}

	public prepareObject(model: WaterSportTripModel, controls) {
		model.start_hour = controls['start_hour'].value;
		model.start_date = controls['start_date'].value;

		model.end_hour = controls['end_hour'].value;
		model.end_date = controls['end_date'].value;

		model.status = controls['status'].value;
		model.payment_method = controls['payment_method'].value;

		model.name = controls['name'].value;
		model.title = controls['title'].value;
		model.phone = controls['phone'].value.e164Number;
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

		model.coupon_code = controls['coupon_code'].value;
		model.trip_duration = controls['trip_duration'].value;

		return model;
	}

}
