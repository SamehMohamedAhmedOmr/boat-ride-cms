import {ModelBase} from '../Base/base.model';
import {MultiLanguageModel} from '../Base/multi.language.model';

export class BannersModel extends ModelBase {

	public name:string;
	public names : MultiLanguageModel
	public languages: MultiLanguageModel;
	public image: any;
	public type_id: number;
	public is_active: boolean;
	public link:string;

	constructor(id: number){
		super(id);
		this.createObjects();
	}


	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'image' : this.image,
			'type_id' : this.type_id,
			'link' : this.link,
			'is_active': this.is_active,
		};
	}
	public createObjects(){
		this.names = new MultiLanguageModel();
	}

}


