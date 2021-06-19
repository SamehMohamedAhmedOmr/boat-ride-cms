import {ModelBase} from '../Base/base.model';

export class WaterSportsEnumsModel extends ModelBase {

	public engine_types:{
		key:string,
		value:string
	}[];

	public fuel_types:{
		key:string,
		value:string
	}[];

	public hull_types:{
		key:string,
		value:string
	}[];

	public yacht_status:{
		key:string,
		value:string
	}[];

	public yacht_types:{
		key:string,
		value:string
	}[];

	constructor(id: number){
		super(id);
	}

	public list() {
		return {
			'id': this.id,
		};
	}

}
