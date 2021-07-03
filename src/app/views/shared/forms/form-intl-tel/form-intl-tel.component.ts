import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CountryISO, SearchCountryField} from 'ngx-intl-tel-input';

@Component({
	selector: 'kt-form-intl-tel',
	templateUrl: './form-intl-tel.component.html',
	styleUrls: ['./form-intl-tel.component.scss']
})
export class FormIntlTelComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() label: string;
	@Input() form_control_name:string = null;

	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;

	@Input() selectedCountryISO:CountryISO = CountryISO.UnitedArabEmirates;

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

	iPhoneHasError(controlName, validationType): boolean {
		const control = this.form.controls[controlName];
		if (!control) {
			return false;
		}
		return control.hasError(validationType) && (control.touched);
	}
}
