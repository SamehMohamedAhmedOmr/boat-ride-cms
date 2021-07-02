import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/reservartion/yachts.trip.enums.model';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';
import {TimeSlotsModel} from '../../../../../../core/models/Marketing-Module/time.slots.model';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsTripEnumsModel;
	@Input() countries: CountryModel[];
	@Input() imgURL: string;
	@Input() yachts: YachtsModel[];
	@Input() start_timeSlots: TimeSlotsModel[];
	@Input() end_timeSlots: TimeSlotsModel[];
	@Input() from_edit: boolean = false;

	constructor() {
	}

	ngOnInit() {
	}

	stepChanged(event, stepper){
		stepper.selected.interacted = false;
	}
}
