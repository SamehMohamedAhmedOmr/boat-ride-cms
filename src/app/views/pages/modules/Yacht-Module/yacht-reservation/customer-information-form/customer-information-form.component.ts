import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/reservartion/yachts.trip.enums.model';
import {CountryISO} from 'ngx-intl-tel-input';

@Component({
	selector: 'kt-customer-information-form',
	templateUrl: './customer-information-form.component.html',
	styleUrls: ['./customer-information-form.component.scss']
})
export class CustomerInformationFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsTripEnumsModel;
	@Input() countries: CountryModel[];
	@Input() country_code: string = null;
	default_country_code:CountryISO = CountryISO.UnitedArabEmirates;

	constructor() {
	}

	ngOnInit() {
	}



}
