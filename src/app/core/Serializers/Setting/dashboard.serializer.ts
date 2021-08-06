import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {DashboardModel} from '../../models/Settings/dashboard.model';


export class DashboardSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): DashboardModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: DashboardModel): any {
		return {};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): DashboardModel {
		let model = new DashboardModel(null);

		model.yacht_count = item.yacht_count;
		model.water_sport_count = item.water_sport_count;

		model.yacht_reserved_trips_count = item.yacht_reserved_trips_count;
		model.yacht_confirmed_trips_count = item.yacht_confirmed_trips_count;


		model.water_sport_reserved_trips = item.water_sport_reserved_trips;
		model.water_sport_confirmed_trips = item.water_sport_confirmed_trips;
		model.settings = item.settings;

		return model;
	}

	status(status): any {

		return {
			'is_active': status,
		};
	}

}
