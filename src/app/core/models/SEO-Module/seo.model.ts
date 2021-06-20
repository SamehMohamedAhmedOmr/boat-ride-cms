import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';

export class SeoModel extends ModelBase {

	public title:MultiLanguageModel;
	public description:MultiLanguageModel;
	public url:string;
	public keywords:{
		ar:[],
		en:[]
	};

	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		return {
			'id': this.id,
			'title' : this.title,
			'url' : this.url,
			'description' : this.description,
		};
	}

	public createObjects(){
		this.title = new MultiLanguageModel();
		this.description = new MultiLanguageModel();
	}
}
