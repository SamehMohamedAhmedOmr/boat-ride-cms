import {ModelBase} from '../Base/base.model';

export class DashboardModel extends ModelBase {

	public yacht_count:number;
	public water_sport_count: number;
	public yacht_reserved_trips_count:number;
	public yacht_confirmed_trips_count: number;
	public water_sport_reserved_trips: number;
	public water_sport_confirmed_trips: number;

	constructor(id: number){
		super(id);
	}

	public list() {
		return {

		};
	}

}
