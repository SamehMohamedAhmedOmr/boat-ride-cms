import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {WaterSportsEnumsModel} from '../../models/Water-Sport-Module/water.sports.enums.model';

export class WaterSportsEnumSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): WaterSportsEnumsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: WaterSportsEnumsModel): any {
		return null;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): WaterSportsEnumsModel {
		let model =  new WaterSportsEnumsModel(item.id);

		model.water_sport_status = item.water_sport_status;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
