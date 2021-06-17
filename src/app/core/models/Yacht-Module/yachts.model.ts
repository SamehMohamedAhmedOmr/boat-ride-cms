import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';
import {SeoModel} from '../SEO-Module/seo.model';

export class YachtsModel extends ModelBase {

	/* Basic Information*/
	public name:MultiLanguageModel;
	public type:number;
	public code:string;
	public color:string;

	public passenger_capacity:number;
	public size:number;
	public no_of_captain:number;
	public crew_members:number;

	public facilities:MultiLanguageModel;
	public what_is_included:MultiLanguageModel;
	public what_expect_description:MultiLanguageModel;
	public seo:SeoModel;

	public corporate_company:string;
	public corporate_price:number;
	public selling_per_hour:number;
	public yacht_special_price:number;
	public minimum_hours_booking:number;
	public apply_vat:boolean;
	public status:number;


	/* Technical Information*/
	public manufacturer:string;
	public fuel_type:number;
	public hull_type:number;
	public engine_type:number;
	public horse_Power:number;
	public max_speed:number;
	public cruising_speed:number;
	public length:number;
	public beam:number;


	/* Additional Information*/
	public services:[];
	public images:string[];


	/* Key Feature*/
	public water_slider:boolean;
	public safety_equipment:boolean;
	public soft_drinks_refreshments:boolean;
	public swimming_equipment:boolean;
	public ice_tea_water:boolean;
	public DVD_player:boolean;
	public satellite_system:boolean;
	public red_carpet_on_arrival:boolean;
	public spacious_saloon:boolean;
	public BBQ_grill_equipment:boolean;
	public fresh_towels:boolean;
	public yacht_slippers:boolean;
	public bathroom_amenities:boolean;
	public under_water_light:boolean;
	public LED_screen_tv:boolean;
	public sunbathing_on_the_foredeck:boolean;
	public fishing_equipment:boolean;


	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
		};
	}

	public createObjects(){
		this.name = new MultiLanguageModel();
		this.facilities = new MultiLanguageModel();
		this.what_is_included = new MultiLanguageModel();
		this.what_expect_description = new MultiLanguageModel();

		this.seo = new SeoModel(null);
	}
}
