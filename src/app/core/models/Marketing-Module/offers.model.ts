import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';
import {SeoModel} from '../SEO-Module/seo.model';

export class OffersModel extends ModelBase {

	public name:MultiLanguageModel;
	public description:MultiLanguageModel;
	public valid_date:string;
	public is_active:boolean;
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
			'valid_date' : this.valid_date,
			'is_active' : this.is_active,
			'image' : this.image,
		};
	}

	public createObjects(){
		this.name = new MultiLanguageModel();
		this.description = new MultiLanguageModel();
		this.seo = new SeoModel(null);
	}
}
