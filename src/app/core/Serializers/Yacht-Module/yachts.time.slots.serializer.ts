import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {YachtsTimeSlotsModel} from '../../models/Yacht-Module/yachts.time.slots.model';

export class YachtsTimeSlotsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): YachtsTimeSlotsModel {
		return this.adapt(json.data);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.data, json.pagination);
	}

	toJson(model: YachtsTimeSlotsModel): any {
		console.log(model);
		return {
			'yacht_id' : model.yacht_id,
			'date' : model.date
		};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): YachtsTimeSlotsModel {
		let model =  new YachtsTimeSlotsModel(item.id);

		model.time = item.time;
		model.label = item.label;
		model.status = item.status;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
