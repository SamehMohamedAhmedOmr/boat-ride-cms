import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';
import {SpecialitiesModel} from './specialities.model';

export class ServicesModel extends ModelBase {

	public name:string;
	public description:string;
	public speciality_id: number;
	public languages: MultiLanguageModel;
	public description_languages: MultiLanguageModel;
	public is_active: boolean;
	public speciality: SpecialitiesModel;
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
			'speciality' : this.speciality?.name,
			'speciality_id' : this.speciality_id,
			'is_active': this.is_active,
		};
	}

	public createObjects(){
		this.languages = new MultiLanguageModel();
		this.description_languages = new MultiLanguageModel();
	}
}
