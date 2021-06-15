import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';

export class TemplateModel extends ModelBase {

	public name:string;
	public description:string;
	public languages: MultiLanguageModel;
	public description_languages: MultiLanguageModel;
	public is_active: boolean;
	public images:[];

	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'description' : this.description,
			'is_active': this.is_active,
		};
	}

	public createObjects(){
		this.languages = new MultiLanguageModel();
		this.description_languages = new MultiLanguageModel();
	}
}
