import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {BlogModel} from '../../models/Marketing-Module/blogs.model';

export class BlogSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): BlogModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: BlogModel): any {
		let object = {
			'id' : model.id,
			'title' : model.name,
			'description' : model.description,
			'is_active' : model.is_active,
			'author' : model.author,
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

	public adapt(item: any): BlogModel {
		let model =  new BlogModel(item.id);

		model.name = item.title;
		model.description = item.description;
		model.is_active = item.is_active;
		model.seo = item.seo;
		model.author = item.author;

		model.image = item.image;
		return model;
	}

	status(status): any {

		return {
			'is_active' : status,
		};
	}

}
