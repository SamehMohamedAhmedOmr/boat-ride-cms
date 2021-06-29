import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CountryModel} from '../../../../../../core/models/Marketing-Module/country.model';
import {YachtsTripEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.trip.enums.model';
import {CountryISO, SearchCountryField} from 'ngx-intl-tel-input';

@Component({
	selector: 'kt-customer-information-form',
	templateUrl: './customer-information-form.component.html',
	styleUrls: ['./customer-information-form.component.scss']
})
export class CustomerInformationFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsTripEnumsModel;
	@Input() countries: CountryModel[];

	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;

	constructor() {
	}

	ngOnInit() {
	}

	isControlHasError(controlName, validationType): boolean {
		const control = this.form.controls[controlName];
		if (!control) {
			return false;
		}
		return control.hasError(validationType) && (control.touched);
	}


}
