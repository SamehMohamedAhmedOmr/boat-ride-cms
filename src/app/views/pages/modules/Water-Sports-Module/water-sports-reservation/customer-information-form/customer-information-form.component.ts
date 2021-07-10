import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {CountryISO} from 'ngx-intl-tel-input';
import {WaterSportTripEnumsModel} from '../../../../../../core/models/Water-Sport-Module/reservation/water.sport.trip.enums.model';

@Component({
	selector: 'kt-customer-information-form',
	templateUrl: './customer-information-form.component.html',
	styleUrls: ['./customer-information-form.component.scss']
})
export class CustomerInformationFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: WaterSportTripEnumsModel;
	@Input() countries: CountryModel[];
	@Input() country_code: string = null;
	default_country_code:CountryISO = CountryISO.UnitedArabEmirates;

	constructor() {
	}

	ngOnInit() {
	}



}
