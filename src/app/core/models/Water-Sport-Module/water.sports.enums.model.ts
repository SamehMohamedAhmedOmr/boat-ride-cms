import {ModelBase} from '../Base/base.model';

export class WaterSportsEnumsModel extends ModelBase {

	public water_sport_status:{
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
