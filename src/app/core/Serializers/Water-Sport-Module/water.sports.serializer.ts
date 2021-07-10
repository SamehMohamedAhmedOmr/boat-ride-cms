import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {WaterSportsModel} from '../../models/Water-Sport-Module/water.sports.model';

export class WaterSportsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): WaterSportsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: WaterSportsModel): any {
		let object = {
			/* Basic Information*/
			'id': model.id,
			'name': model.name,
			'code': model.code,
			'color': model.color,

			'routes': model.routes,
			'water_sport_description': model.water_sport_description,
			'what_to_expect_description': model.what_to_expect_description,
			'location': model.location,
			'seo': model.seo,

			'corporate_company': model.corporate_company,
			'corporate_price': model.corporate_price,
			'selling_per_hour': model.selling_per_hour,
			'special_price': model.special_price,
			'minimum_booking': model.minimum_booking,
			'apply_vat': model.apply_vat,
			'status': model.status,
		};


		if (model.images){
			object['images'] = model.images;
		}


		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): WaterSportsModel {
		let model =  new WaterSportsModel(item.id);

		/* Basic Information*/
		model.name = item.name;
		model.water_sport_name = item.name;
		model.code = item.code;
		model.color = item.color;

		model.routes = item.routes;
		model.location = item.location;
		model.water_sport_description = item.water_sport_description;
		model.what_to_expect_description = item.what_to_expect_description;
		model.seo = item.seo;

		model.corporate_company = item.corporate_company;
		model.corporate_price = item.corporate_price;
		model.selling_per_hour = item.selling_per_hour;
		model.special_price = item.special_price;
		model.minimum_booking = item.minimum_booking;
		model.apply_vat = item.apply_vat;
		model.status = item.status;
		model.status_name = item.status_name;

		model.images = item.images;

		return model;
	}

	status(status): any {

		return {
			'is_active' : status,
		};
	}

}
