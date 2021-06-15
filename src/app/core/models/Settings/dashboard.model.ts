import {ModelBase} from '../Base/base.model';

export class DashboardModel extends ModelBase {

	public PackagesCount:number;
	public ServicesCount: number;
	public SpecialitesCount:number;
	public AppointmentsCount: number;
	public OperationsCount: number;
	public DoctorCount: number;
	public PatientsCount:number;

	constructor(id: number){
		super(id);
	}

	public list() {
		return {
			
		};
	}

}
