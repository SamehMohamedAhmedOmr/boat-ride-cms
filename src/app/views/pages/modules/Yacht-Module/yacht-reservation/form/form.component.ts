import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.trip.enums.model';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {YachtsModel} from '../../../../../../core/models/Yacht-Module/yachts.model';

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

	constructor() {
	}

	ngOnInit() {
	}

	stepChanged(event, stepper){
		stepper.selected.interacted = false;
	}
}
