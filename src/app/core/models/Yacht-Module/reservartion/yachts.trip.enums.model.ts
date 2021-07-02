import {ModelBase} from '../../Base/base.model';
import {TimeSlotsModel} from '../../Marketing-Module/time.slots.model';
import {CountryModel} from '../../Marketing-Module/country.model';

export class YachtsTripEnumsModel extends ModelBase {

	public trip_status:{
		key:string,
		value:string
	}[];

	public payment_methods:{
		key:string,
		value:string
	}[];

	public time_slots:TimeSlotsModel[];
	public countries:CountryModel[];

	constructor(id: number){
		super(id);
	}

	public list() {
		return {
			'id': this.id,
		};
	}

}
