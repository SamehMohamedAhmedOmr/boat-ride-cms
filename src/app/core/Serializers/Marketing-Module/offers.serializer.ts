import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {OffersModel} from '../../models/Marketing-Module/offers.model';

export class OffersSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): OffersModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: OffersModel): any {
		let object = {
			'id' : model.id,
			'name' : model.name,
			'description' : model.description,
			'valid_date' : model.valid_date,
			'is_active' : model.is_active,
			'seo' : model.seo,
		};

		if (model.image){
			object['image'] = model.image;
		}

		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): OffersModel {
		let model =  new OffersModel(item.id);

		model.name = item.name;
		model.description = item.description;
		model.valid_date = item.valid_date;
		model.is_active = item.is_active;
		model.seo = item.seo;

		model.image = item.image;
		return model;
	}

	status(status): any {

		return {
			'is_active' : status,
		};
	}

}
