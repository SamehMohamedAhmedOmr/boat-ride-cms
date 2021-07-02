import {BaseSerializer} from '../../Base/Base.serializer';
import {Serializer} from '../../Base/Serializer';
import {WaterSportTripEnumsModel} from '../../../models/Water-Sport-Module/reservation/water.sport.trip.enums.model';

export class WaterSportTripEnumSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): WaterSportTripEnumsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: WaterSportTripEnumsModel): any {
		return null;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): WaterSportTripEnumsModel {
		let model =  new WaterSportTripEnumsModel(item.id);

		model.trip_status = item.trip_status;
		model.payment_methods = item.payment_methods;

		model.time_slots = item.time_slots;
		model.countries = item.countries;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
