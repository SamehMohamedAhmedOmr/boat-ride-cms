import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WaterSportTripService} from '../../../../../../core/services/Water-Sport-Module/reservations/water.sport.trip.service';
import {WaterSportTripEnumsModel} from '../../../../../../core/models/Water-Sport-Module/reservation/water.sport.trip.enums.model';

@Component({
	selector: 'kt-filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
	trip_id: number = null;
	email: string = null;
	phone: string = null;
	from_date: string = null;
	to_date: string = null;
	status: string = '0';

	@Output() filterEvent = new EventEmitter<object>();

	enumsModels: WaterSportTripEnumsModel;

	constructor(private waterSportTripService: WaterSportTripService,
				private cdr: ChangeDetectorRef,) {
	}

	ngOnInit() {
		this.getEnums();
	}

	getEnums() {
		this.waterSportTripService.listEnums().subscribe(
			(resp) => {
				this.enumsModels = resp;
				this.cdr.markForCheck();
			}, error => {
			});
	}

	search() {
		let filters = {};

		if (this.email){
			filters['email'] = this.email;
		}

		if (this.status && this.status != '0'){
			filters['status'] = this.status;
		}

		if (this.from_date){
			filters['from_date'] = this.from_date;
		}

		if (this.to_date){
			filters['to_date'] = this.to_date;
		}

		if (this.phone){
			filters['phone'] = this.phone;
		}

		if (this.trip_id){
			filters['search_key'] = this.trip_id;
		}

		this.filterEvent.emit(filters);
	}

	reset() {
		this.trip_id = null;
		this.email = null;
		this.phone = null;
		this.from_date = null;
		this.to_date = null;
		this.status = '0';
		this.search();
	}
}
