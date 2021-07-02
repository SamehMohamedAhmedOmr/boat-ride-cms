import {BaseSerializer} from '../../Base/Base.serializer';
import {Serializer} from '../../Base/Serializer';
import {WaterSportTimeSlotsModel} from '../../../models/Water-Sport-Module/reservation/water.sport.time.slots.model';

export class WaterSportTimeSlotsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): WaterSportTimeSlotsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: WaterSportTimeSlotsModel): any {
		return {
			'yacht_id' : model.yacht_id,
			'date' : model.date
		};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): WaterSportTimeSlotsModel {
		let model =  new WaterSportTimeSlotsModel(item.id);

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
