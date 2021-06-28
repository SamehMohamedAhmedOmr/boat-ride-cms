import {ModelBase} from '../Base/base.model';

export class CountryModel extends ModelBase {

	public country_code:string;
	public name:string;
	public image:string;

	constructor(id: number){
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'country_code': this.country_code,
			'name': this.name,
			'image': this.image,
		};
	}

}
