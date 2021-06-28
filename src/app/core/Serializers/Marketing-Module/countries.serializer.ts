import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CountryModel} from '../../models/Marketing-Module/country.model';

export class CountriesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): CountryModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: CountryModel): any {
		return null;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): CountryModel {
		let model =  new CountryModel(item.id);

		model.country_code = item.country_code;
		model.name = item.name;
		model.image = item.image;

		return model;
	}

	status(status): any {

		return {

		};
	}

}
