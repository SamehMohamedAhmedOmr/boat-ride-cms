import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseService} from '../../Base/base.service';
import {YachtsModel} from '../../../models/Yacht-Module/yachts.model';
import {environment} from '../../../../../environments/environment';
import {YachtsSerializer} from '../../../Serializers/Yacht-Module/yachts.serializer';
import {YachtsEnumsModel} from '../../../models/Yacht-Module/yachts.enums.model';
import {YachtsEnumSerializer} from '../../../Serializers/Yacht-Module/yachts.enum.serializer';



@Injectable({
	providedIn: 'root'
})

export class YachtsService extends BaseService<YachtsModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/yachts',
			new YachtsSerializer());
	}

	public listEnums(): Observable<YachtsEnumsModel> {
		let serializer = new YachtsEnumSerializer();
		return this.http.get(`${this.url}${this.endpoint}/list-enums`)
			.pipe(map((data: any) => serializer.fromJson(data) as YachtsEnumsModel));
	}

	public deleteImage(id: number) {
		return this.http
			.delete(`${this.url}${this.endpoint}/delete/image/${id}`);
	}

	public prepareObject(model: YachtsModel, controls) {
		/* Basic Information*/
		model.name.en = controls['name_en'].value;
		model.name.ar = controls['name_ar'].value;

		model.facilities.en = controls['facilities_en'].value;
		model.facilities.ar = controls['facilities_ar'].value;

		model.what_is_included.en = controls['what_is_included_en'].value;
		model.what_is_included.ar = controls['what_is_included_ar'].value;

		model.what_expect_description.en = controls['what_expect_description_en'].value;
		model.what_expect_description.ar = controls['what_expect_description_ar'].value;


		model.seo.title.en = controls['seo_title_en'].value;
		model.seo.title.ar = controls['seo_title_ar'].value;
		model.seo.description.en = controls['seo_description_en'].value;
		model.seo.description.ar = controls['seo_description_ar'].value;
		model.seo.keywords.en = controls['seo_meta_tags_en'].value;
		model.seo.keywords.ar = controls['seo_meta_tags_ar'].value;


		model.type = controls['type'].value;
		model.code = controls['code'].value;
		model.color = controls['color'].value;
		model.passenger_capacity = controls['passenger_capacity'].value;
		model.size = controls['size'].value;
		model.no_of_captain = controls['no_of_captain'].value;
		model.crew_members = controls['crew_members'].value;
		model.corporate_company = controls['corporate_company'].value;
		model.corporate_price = controls['corporate_price'].value;
		model.selling_per_hour = controls['selling_per_hour'].value;
		model.yacht_special_price = controls['yacht_special_price'].value;
		model.minimum_hours_booking = controls['minimum_hours_booking'].value;
		model.apply_vat = controls['apply_vat'].value;
		model.status = controls['status'].value;
		model.beds = controls['beds'].value;

		model.services = controls['services'].value;
		model.images = controls['images'].value;

		/* Technical Information*/
		model.manufacturer = controls['manufacturer'].value;
		model.fuel_type = controls['fuel_type'].value;
		model.hull_type = controls['hull_type'].value;
		model.engine_type = controls['engine_type'].value;
		model.horse_Power = controls['horse_Power'].value;
		model.max_speed = controls['max_speed'].value;
		model.cruising_speed = controls['cruising_speed'].value;
		model.length = controls['length'].value;
		model.beam = controls['beam'].value;


		/* Key Feature*/
		model.water_slider = controls['water_slider'].value;
		model.safety_equipment = controls['safety_equipment'].value;
		model.soft_drinks_refreshments = controls['soft_drinks_refreshments'].value;
		model.swimming_equipment = controls['swimming_equipment'].value;
		model.ice_tea_water = controls['ice_tea_water'].value;
		model.DVD_player = controls['DVD_player'].value;
		model.satellite_system = controls['satellite_system'].value;
		model.red_carpet_on_arrival = controls['red_carpet_on_arrival'].value;
		model.spacious_saloon = controls['spacious_saloon'].value;
		model.BBQ_grill_equipment = controls['BBQ_grill_equipment'].value;
		model.fresh_towels = controls['fresh_towels'].value;
		model.yacht_slippers = controls['yacht_slippers'].value;
		model.bathroom_amenities = controls['bathroom_amenities'].value;
		model.under_water_light = controls['under_water_light'].value;
		model.LED_screen_tv = controls['LED_screen_tv'].value;
		model.sunbathing_on_the_foredeck = controls['sunbathing_on_the_foredeck'].value;
		model.fishing_equipment = controls['fishing_equipment'].value;

		return model;
	}

}
