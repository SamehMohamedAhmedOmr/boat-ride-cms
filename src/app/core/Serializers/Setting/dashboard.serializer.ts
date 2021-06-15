import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import { DashboardModel } from '../../models/Settings/dashboard.model';


export class DashboardSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): DashboardModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: DashboardModel): any {
		return {

		};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(Count: any): DashboardModel {
		let model = new DashboardModel(null);

		model.PackagesCount = Count.packages_count;
		model.ServicesCount = Count.services_count

		model.SpecialitesCount = Count.specialites_count;
		model.AppointmentsCount = Count.appointments_count;


		model.OperationsCount = Count.operations_count;
		model.DoctorCount = Count.doctors_count;
		model.PatientsCount = Count.patients_count;
		return model;
	}

	status(status): any {

		return {
			'is_active': status,
		};
	}

}
