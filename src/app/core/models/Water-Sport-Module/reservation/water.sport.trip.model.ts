import {ModelBase} from '../../Base/base.model';
import {CountryModel} from '../../Marketing-Module/country.model';
import {WaterSportsModel} from '../water.sports.model';

export class WaterSportTripModel extends ModelBase {

	public start_hour:string;
	public start_date:string;

	public end_hour:string;
	public end_date:string;

	public status:number;
	public payment_method:number;

	public name:string;
	public title:string;
	public phone:string;
	public email:string;
	public address:string;

	public country_id:number;
	public yacht_id:number;
	public number_of_people:number;
	public rate_per_hour:number;
	public other_charges:number;
	public discount:number
	public minimum_Advance_Payment:number;

	public client_notes:string;
	public admin_notes:string;

	public coupon_code:string;
	public booking_number:string;
	public trip_duration:string;

	public status_name:string;

	public country:CountryModel;
	public water_sport:WaterSportsModel;

	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'booking_number' : this.booking_number,

			'start_date' : this.start_date,
			'end_date' : this.end_date,
			'trip_duration' : this.trip_duration,
			'status' : this.status_name,
		};
	}

	public createObjects(){

	}
}
