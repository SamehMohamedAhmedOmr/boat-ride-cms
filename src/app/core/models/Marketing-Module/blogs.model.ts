import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';
import {SeoModel} from '../SEO-Module/seo.model';

export class BlogModel extends ModelBase {

	public name:MultiLanguageModel;
	public description:MultiLanguageModel;
	public is_active:boolean;
	public image:string;
	public seo:SeoModel;
	public author:string;
	public label:MultiLanguageModel;


	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'author' : this.author,
			'description' : this.description,
			'is_active' : this.is_active,
			'image' : this.image,
		};
	}

	public createObjects(){
		this.name = new MultiLanguageModel();
		this.label = new MultiLanguageModel();
		this.description = new MultiLanguageModel();
		this.seo = new SeoModel(null);
	}
}
