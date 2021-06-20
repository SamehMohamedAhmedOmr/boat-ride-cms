import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {SeoModel} from '../../models/SEO-Module/seo.model';

export class SeoSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): SeoModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: SeoModel): any {
		let object = {
			'id' : model.id,
			'title' : model.title,
			'description' : model.description,
			'url' : model.url,
		};

		if (model.keywords){
			object['keywords'] = model.keywords;
		}

		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): SeoModel {
		let model =  new SeoModel(item.id);

		model.title = item.title;
		model.description = item.description;
		model.url = item.url;
		model.keywords = item.keywords;

		return model;
	}

	status(status): any {

		return {
			'is_active' : status,
		};
	}

}
