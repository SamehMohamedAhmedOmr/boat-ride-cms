import {Injectable} from '@angular/core';
import {YachtsService} from './yachts.service';
import {ServicesService} from '../../Marketing-Module/services.service';
import {YachtsEnumsModel} from '../../../models/Yacht-Module/yachts.enums.model';
import {BehaviorSubject} from 'rxjs';
import {ServicesModel} from '../../../models/Marketing-Module/services.model';


@Injectable({
	providedIn: 'root'
})

export class YachtsObservableService  {


	private enums_subject = new BehaviorSubject<YachtsEnumsModel>(null);
	public enums_observable = this.enums_subject.asObservable();

	private services_subject = new BehaviorSubject<ServicesModel[]>(null);
	public services_observable = this.services_subject.asObservable();

	private loading_subject = new BehaviorSubject<boolean>(true);
	public loading_observable = this.loading_subject.asObservable();


	constructor(private yachtsService: YachtsService,
				private servicesService: ServicesService) {
	}

	getEnums() {
		this.yachtsService.listEnums().subscribe(
			(resp) => {
				this.enums_subject.next(resp);
				this.getServices();
			} , error => {
			});
	}

	private getServices() {
		this.servicesService.list(null).subscribe(
			(resp) => {
				this.services_subject.next(resp);
				this.loading_subject.next(false);
			} , error => {
			});
	}
}
