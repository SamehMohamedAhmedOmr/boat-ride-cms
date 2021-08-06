import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {SettingsModel} from '../../models/Settings/settings.model';


export class SettingsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): SettingsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: SettingsModel): any {
		return {
			'id': model.id,
			'enable_coming_soon': model.enable_coming_soon,
		};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): SettingsModel {
		let model = new SettingsModel(item.id);
		model.enable_coming_soon = item.enable_coming_soon;
		return model;
	}

	status(status): any {

		return {};
	}

}
