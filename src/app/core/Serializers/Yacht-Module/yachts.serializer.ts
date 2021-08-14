import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {YachtsModel} from '../../models/Yacht-Module/yachts.model';

export class YachtsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): YachtsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: YachtsModel): any {
		let object = {
			/* Basic Information*/
			'id' : model.id,
			'name' : model.name,
			'type' : model.type,
			'code' : model.code,
			'color' : model.color,

			'passenger_capacity' : model.passenger_capacity,
			'size' : model.size,
			'no_of_captain' : model.no_of_captain,
			'crew_members' : model.crew_members,

			'facilities' : model.facilities,
			'what_is_included' : model.what_is_included,
			'what_expect_description' : model.what_expect_description,
			'seo' : model.seo,

			'corporate_company' : model.corporate_company,
			'corporate_price' : model.corporate_price,
			'selling_per_hour' : model.selling_per_hour,
			'yacht_special_price' : model.yacht_special_price,
			'minimum_hours_booking' : model.minimum_hours_booking,
			'apply_vat' : model.apply_vat,
			'status' : model.status,
			'beds' : model.beds,


			/* Technical Information*/
			'manufacturer' : model.manufacturer,
			'fuel_type' : model.fuel_type,
			'hull_type' : model.hull_type,
			'engine_type' : model.engine_type,
			'horse_Power' : model.horse_Power,
			'max_speed' : model.max_speed,
			'cruising_speed' : model.cruising_speed,
			'length' : model.length,
			'beam' : model.beam,


			/* Key Feature*/
			'water_slider' : model.water_slider,
			'safety_equipment' : model.safety_equipment,
			'soft_drinks_refreshments' : model.soft_drinks_refreshments,
			'swimming_equipment' : model.swimming_equipment,
			'ice_tea_water' : model.ice_tea_water,
			'DVD_player' : model.DVD_player,
			'satellite_system' : model.satellite_system,
			'red_carpet_on_arrival' : model.red_carpet_on_arrival,
			'spacious_saloon' : model.spacious_saloon,
			'BBQ_grill_equipment' : model.BBQ_grill_equipment,
			'fresh_towels' : model.fresh_towels,
			'yacht_slippers' : model.yacht_slippers,
			'bathroom_amenities' : model.bathroom_amenities,
			'under_water_light' : model.under_water_light,
			'LED_screen_tv' : model.LED_screen_tv,
			'sunbathing_on_the_foredeck' : model.sunbathing_on_the_foredeck,
			'fishing_equipment' : model.fishing_equipment,
		};

		if (model.services){
			object['services'] = model.services;
		}


		if (model.images){
			object['images'] = model.images;
		}


		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): YachtsModel {
		let model =  new YachtsModel(item.id);

		/* Basic Information*/
		model.name = item.name;
		model.yacht_name = item.name;
		model.type = item.type;
		model.code = item.code;
		model.color = item.color;

		model.passenger_capacity = item.passenger_capacity;
		model.size = item.size;
		model.no_of_captain = item.no_of_captain;
		model.crew_members = item.crew_members;

		model.facilities = item.facilities;
		model.what_is_included = item.what_is_included;
		model.what_expect_description = item.what_expect_description;
		model.seo = item.seo;

		model.corporate_company = item.corporate_company;
		model.corporate_price = item.corporate_price;
		model.selling_per_hour = item.selling_per_hour;
		model.yacht_special_price = item.yacht_special_price;
		model.minimum_hours_booking = item.minimum_hours_booking;
		model.apply_vat = item.apply_vat;
		model.status = item.status;
		model.status_name = item.status_name;
		model.beds = item.beds;


		/* Technical Information*/
		model.manufacturer = item.manufacturer;
		model.fuel_type = item.fuel_type;
		model.hull_type = item.hull_type;
		model.engine_type = item.engine_type;
		model.horse_Power = item.horse_Power;
		model.max_speed = item.max_speed;
		model.cruising_speed = item.cruising_speed;
		model.length = item.length;
		model.beam = item.beam;

		/* Additional Information*/
		model.services = item.services;
		model.images = item.images;


		/* Key Feature*/
		model.water_slider = item.water_slider;
		model.safety_equipment = item.safety_equipment;
		model.soft_drinks_refreshments = item.soft_drinks_refreshments;
		model.swimming_equipment = item.swimming_equipment;
		model.ice_tea_water = item.ice_tea_water;
		model.DVD_player = item.DVD_player;
		model.satellite_system = item.satellite_system;
		model.red_carpet_on_arrival = item.red_carpet_on_arrival;
		model.spacious_saloon = item.spacious_saloon;
		model.BBQ_grill_equipment = item.BBQ_grill_equipment;
		model.fresh_towels = item.fresh_towels;
		model.yacht_slippers = item.yacht_slippers;
		model.bathroom_amenities = item.bathroom_amenities;
		model.under_water_light = item.under_water_light;
		model.LED_screen_tv = item.LED_screen_tv;
		model.sunbathing_on_the_foredeck = item.sunbathing_on_the_foredeck;
		model.fishing_equipment = item.fishing_equipment;

		return model;
	}

	status(status): any {

		return {
			'is_active' : status,
		};
	}

}
