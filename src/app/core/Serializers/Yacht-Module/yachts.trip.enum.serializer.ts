import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {YachtsTripEnumsModel} from '../../models/Yacht-Module/yachts.trip.enums.model';

export class YachtsTripEnumSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): YachtsTripEnumsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: YachtsTripEnumsModel): any {
		return null;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): YachtsTripEnumsModel {
		let model =  new YachtsTripEnumsModel(item.id);

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
