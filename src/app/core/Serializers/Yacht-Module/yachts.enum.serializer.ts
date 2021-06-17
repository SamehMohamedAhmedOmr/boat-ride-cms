import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {YachtsEnumsModel} from '../../models/Yacht-Module/yachts.enums.model';

export class YachtsEnumSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): YachtsEnumsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: YachtsEnumsModel): any {
		return null;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): YachtsEnumsModel {
		let model =  new YachtsEnumsModel(item.id);

		model.engine_types = item.engine_types;
		model.fuel_types = item.fuel_types;
		model.hull_types = item.hull_types;
		model.yacht_status = item.yacht_status;
		model.yacht_types = item.yacht_types;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
