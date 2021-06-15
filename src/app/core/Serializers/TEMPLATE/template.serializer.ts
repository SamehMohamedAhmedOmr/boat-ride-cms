import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {TemplateModel} from '../../models/TEMPLATE/template.model';

export class TemplateSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): TemplateModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: TemplateModel): any {
		let object = {
			'id' : model.id,
			'name' : model.languages,
			'description' : model.description_languages,
			'is_active' : model.is_active,
		};

		if (model.images){
			object['images'] = model.images;
		}

		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): TemplateModel {
		let model =  new TemplateModel(item.id);

		model.name = item.name;
		model.languages = item.name?.en ? item.name : null;

		model.description = item.description;
		model.description_languages = item.description?.en ? item.description : null;

		model.is_active = item.is_active;
		model.images = item.images;
		return model;
	}

	status(status): any {

		return {
			'is_active' : status,
		};
	}

}
