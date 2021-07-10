import {BaseSerializer} from '../../Base/Base.serializer';
import {Serializer} from '../../Base/Serializer';
import {WaterSportTripModel} from '../../../models/Water-Sport-Module/reservation/water.sport.trip.model';

export class WaterSportTripSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): WaterSportTripModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: WaterSportTripModel): any {
		let object = {
			'start_hour' : model.start_hour,
			'start_date' : model.start_date,
			'end_hour' : model.end_hour,
			'end_date' : model.end_date,

			'status' : model.status,
			'payment_method' : model.payment_method,

			'name' : model.name,
			'title' : model.title,
			'phone' : model.phone,
			'country_code' : model.country_code,
			'email' : model.email,
			'address' : model.address,

			'country_id' : model.country_id,
			'water_sport_id' : model.water_sport_id,
			'number_of_people' : model.number_of_people,
			'rate_per_hour' : model.rate_per_hour,
			'other_changes' : model.other_charges,
			'discount' : model.discount,
			'minimum_Advance_Payment' : model.minimum_Advance_Payment,
			'total_price' : model.total_price,

			'client_notes' : model.client_notes,
			'admin_notes' : model.admin_notes,
			'trip_duration' : model.trip_duration,
		};

		if (model.coupon_code){
			object['coupon_code'] = model.coupon_code
		}

		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): WaterSportTripModel {
		let model =  new WaterSportTripModel(item.id);

		model.start_hour = item.start_hour;
		model.start_date = item.start_date;

		model.end_hour = item.end_hour;
		model.end_date = item.end_date;
		model.status = item.status;
		model.payment_method = item.payment_method;

		model.name = item.name;
		model.title = item.title;
		model.phone = item.phone;
		model.email = item.email;
		model.address = item.address;

		model.country_id = item.country_id;
		model.water_sport_id = item.water_sport_id;
		model.number_of_people = item.number_of_people;
		model.rate_per_hour = item.rate_per_hour;
		model.other_charges = item.other_changes;
		model.discount = item.discount;
		model.minimum_Advance_Payment = item.minimum_Advance_Payment;
		model.total_price = item.total_price;

		model.client_notes = item.client_notes;
		model.admin_notes = item.admin_notes;

		model.coupon_code = item.coupon_code;
		model.booking_number = item.booking_number;
		model.trip_duration = item.trip_duration;

		model.status_name = item.status_name;

		model.country = item.country;
		model.water_sport = item.water_sport;
		model.country_code = item.country_code;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
