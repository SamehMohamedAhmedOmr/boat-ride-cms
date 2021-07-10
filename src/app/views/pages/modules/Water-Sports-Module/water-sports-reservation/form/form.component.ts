import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';
import {WaterSportsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.model';
import {WaterSportTripEnumsModel} from '../../../../../../core/models/Water-Sport-Module/reservation/water.sport.trip.enums.model';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: WaterSportTripEnumsModel;
	@Input() countries: CountryModel[];
	@Input() imgURL: string;
	@Input() water_sports: WaterSportsModel[];
	@Input() start_timeSlots: TimeSlotsModel[];
	@Input() end_timeSlots: TimeSlotsModel[];
	@Input() from_edit: boolean = false;
	@Input() country_code: string = null;

	constructor() {
	}

	ngOnInit() {
	}

	stepChanged(event, stepper){
		stepper.selected.interacted = false;
	}
}
