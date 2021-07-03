import {ModelBase} from '../../Base/base.model';
import {CountryModel} from '../../Marketing-Module/country.model';
import {YachtsModel} from '../yachts.model';
import {TimeSlotsHelperService} from '../../../services/Helpers/time.slots.helper.service';

export class YachtsTripModel extends ModelBase {

	public start_hour:string;
	public start_date:string;

	public end_hour:string;
	public end_date:string;

	public status:number;
	public payment_method:number;

	public name:string;
	public title:string;
	public phone:string;
	public country_code:string;
	public email:string;
	public address:string;

	public country_id:number;
	public yacht_id:number;
	public number_of_people:number;
	public rate_per_hour:number;
	public other_charges:number;
	public discount:number
	public minimum_Advance_Payment:number;
	public total_price:number;

	public client_notes:string;
	public admin_notes:string;

	public coupon_code:string;
	public booking_number:string;
	public trip_duration:string;

	public status_name:string;

	public country:CountryModel;
	public yacht:YachtsModel;

	constructor(id: number){
		super(id);
		this.createObjects();
	}

	public list() {
		let start_date_time = TimeSlotsHelperService.transformListDate(this.start_date + ' ' + this.start_hour);
		let end_date_time = TimeSlotsHelperService.transformListDate(this.end_date + ' ' + this.end_hour);

		return {
			'id': this.id,

			'yacht' : this.yacht?.name,

			'customer' : this.name + ' | ' + this.email + ' | ' + this.phone,
			'booking_number' : this.booking_number,

			'trip_date_time' : start_date_time + ' | ' + end_date_time,

			'status' : this.status_name,
		};
	}

	public createObjects(){

	}
}
