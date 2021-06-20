import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';
import {SeoModel} from '../SEO-Module/seo.model';

export class WaterSportsModel extends ModelBase {

	/* Basic Information*/
	public name:MultiLanguageModel;
	public what_to_expect_description:MultiLanguageModel;
	public water_sport_description:MultiLanguageModel;
	public routes:MultiLanguageModel;
	public location:MultiLanguageModel;
	public seo:SeoModel;

	public status:number;
	public status_name:string;

	public code:string;
	public color:string;

	public corporate_company:string;
	public corporate_price:number;

	public selling_per_hour:number;
	public special_price:number;
	public minimum_booking:number;

	public apply_vat:boolean;
	public images:string[];


	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			// @ts-ignore
			'image' : this?.images?.length ? this.images[0].image : '',
			'selling_per_hour' : this.selling_per_hour,
			'status' : this.status_name,
		};
	}

	public createObjects(){
		this.name = new MultiLanguageModel();
		this.water_sport_description = new MultiLanguageModel();
		this.routes = new MultiLanguageModel();
		this.what_to_expect_description = new MultiLanguageModel();
		this.location = new MultiLanguageModel();

		this.seo = new SeoModel(null);
	}
}
