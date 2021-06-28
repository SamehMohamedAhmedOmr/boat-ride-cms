import {ModelBase} from '../Base/base.model';

export class YachtsTripEnumsModel extends ModelBase {

	public trip_status:{
		key:string,
		value:string
	}[];

	public payment_methods:{
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
