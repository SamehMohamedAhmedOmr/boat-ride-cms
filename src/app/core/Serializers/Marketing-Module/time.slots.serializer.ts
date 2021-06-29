import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CountryModel} from '../../models/Marketing-Module/country.model';
import {TimeSlotsModel} from '../../models/Marketing-Module/time.slots.model';

export class TimeSlotsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): TimeSlotsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: TimeSlotsModel): any {
		return null;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): TimeSlotsModel {
		let model =  new TimeSlotsModel(item.id);

		model.time = item.time;
		model.label = item.lable;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
