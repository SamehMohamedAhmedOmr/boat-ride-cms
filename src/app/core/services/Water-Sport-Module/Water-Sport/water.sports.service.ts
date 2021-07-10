import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseService} from '../../Base/base.service';
import {environment} from '../../../../../environments/environment';
import {WaterSportsModel} from '../../../models/Water-Sport-Module/water.sports.model';
import {WaterSportsSerializer} from '../../../Serializers/Water-Sport-Module/water.sports.serializer';
import {WaterSportsEnumsModel} from '../../../models/Water-Sport-Module/water.sports.enums.model';
import {WaterSportsEnumSerializer} from '../../../Serializers/Water-Sport-Module/water.sports.enum.serializer';


@Injectable({
	providedIn: 'root'
})

export class WaterSportsService extends BaseService<WaterSportsModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/water_sports',
			new WaterSportsSerializer());
	}

	public listEnums(): Observable<WaterSportsEnumsModel> {
		let serializer = new WaterSportsEnumSerializer();
		return this.http.get(`${this.url}${this.endpoint}/list-enums`)
			.pipe(map((data: any) => serializer.fromJson(data) as WaterSportsEnumsModel));
	}

	public prepareObject(model: WaterSportsModel, controls) {
		/* Basic Information*/
		model.name.en = controls['name_en'].value;
		model.name.ar = controls['name_ar'].value;

		model.water_sport_description.en = controls['water_sport_description_en'].value;
		model.water_sport_description.ar = controls['water_sport_descriptions_ar'].value;

		model.routes.en = controls['routes_en'].value;
		model.routes.ar = controls['routes_ar'].value;

		model.what_to_expect_description.en = controls['what_expect_description_en'].value;
		model.what_to_expect_description.ar = controls['what_expect_description_ar'].value;

		model.location.en = controls['location_en'].value;
		model.location.ar = controls['location_ar'].value;


		model.seo.title.en = controls['seo_title_en'].value;
		model.seo.title.ar = controls['seo_title_ar'].value;
		model.seo.description.en = controls['seo_description_en'].value;
		model.seo.description.ar = controls['seo_description_ar'].value;
		model.seo.keywords.en = controls['seo_meta_tags_en'].value;
		model.seo.keywords.ar = controls['seo_meta_tags_ar'].value;

		model.code = controls['code'].value;
		model.color = controls['color'].value;
		model.corporate_company = controls['corporate_company'].value;
		model.corporate_price = controls['corporate_price'].value;
		model.selling_per_hour = controls['selling_per_hour'].value;
		model.special_price = controls['special_price'].value;
		model.minimum_booking = controls['minimum_hours_booking'].value;
		model.apply_vat = controls['apply_vat'].value;
		model.status = controls['status'].value;

		model.images = controls['images'].value;


		return model;
	}

}
