import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ServicesEnumsModel} from '../../models/Yacht-Module/services.enums.model';

export class ServicesEnumSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ServicesEnumsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ServicesEnumsModel): any {
		return null;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): ServicesEnumsModel {
		let model =  new ServicesEnumsModel(item.id);

		model.price_models = item.price_models;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
