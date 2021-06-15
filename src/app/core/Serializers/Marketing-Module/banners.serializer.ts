import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {BannersModel} from '../../models/Marketing-Module/banners.model';


export class BannersSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): BannersModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: BannersModel): any {
		let object = {
			'id' : model.id,
			'title' : model.names,
			'type_id' : model.type_id,
			'link' : model.link,
			'is_active' : model.is_active,
		};

		if (model.image){
			object['image_id'] = model.image;
		}

		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): BannersModel {
		let model =  new BannersModel(item.id);
		model.name = item.title;
		model.languages = item.title.en ? item.title : null;
		model.names = item.title.en ? item.title : null;
		model.image = item.image;
		model.link = item.link;
		model.type_id = item.type;
		model.is_active = item.is_active;
		return model;
	}

	status(status): any {

		return {
			'is_active' : status,
		};
	}

}
