import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ServicesModel} from '../../models/Marketing-Module/services.model';

export class ServicesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ServicesModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ServicesModel): any {
		let object = {
			'id' : model.id,
			'name' : model.name,
			'description' : model.description,
			'price' : model.price,
			'price_model' : model.price_model,
			'minimum_hours_booking' : model.minimum_hours_booking,
			'max_quantity' : model.max_quantity,

		};

		if (model.image){
			object['image'] = model.image;
		}

		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): ServicesModel {
		let model =  new ServicesModel(item.id);

		model.name = item.name;

		model.description = item.description;

		model.price = item.price;
		model.price_model = item.price_model;
		model.minimum_hours_booking = item.minimum_hours_booking;
		model.max_quantity = item.max_quantity;
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
