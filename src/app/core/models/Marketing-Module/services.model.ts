import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';
import {SeoModel} from '../SEO-Module/seo.model';

export class ServicesModel extends ModelBase {

	public name:MultiLanguageModel;
	public description:MultiLanguageModel;
	public price:number;
	public price_model:number;
	public minimum_hours_booking:number;
	public max_quantity:number;
	public image:string;
	public seo:SeoModel;

	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'description' : this.description,
			'price' : this.price,
			'price_model' : this.price_model,
			'minimum_hours_booking' : this.minimum_hours_booking,
			'max_quantity' : this.max_quantity,
			'image' : this.image,
		};
	}

	public createObjects(){
		this.name = new MultiLanguageModel();
		this.description = new MultiLanguageModel();
		this.seo = new SeoModel(null);
	}
}
