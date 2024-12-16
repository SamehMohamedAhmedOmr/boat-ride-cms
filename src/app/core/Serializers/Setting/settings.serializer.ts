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
		let obj = {
			'id': model.id,
			'enable_coming_soon': model.enable_coming_soon,
		};

		if(model.whatsapp_number) {
			obj['whatsapp_number'] = model.whatsapp_number;
		}

		if(model.home_section) {
			obj['home_section'] = model.home_section;
		}

		if(model.contact_number) {
			obj['contact_number'] = model.contact_number;
		}

		return obj;
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
