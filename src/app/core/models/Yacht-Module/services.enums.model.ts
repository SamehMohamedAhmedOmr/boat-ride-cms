import {ModelBase} from '../Base/base.model';

export class ServicesEnumsModel extends ModelBase {

	public price_models:{
		key:string,
		value:string
	}[];


	constructor(id: number){
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'price_models' : this.price_models,
		};
	}

}
