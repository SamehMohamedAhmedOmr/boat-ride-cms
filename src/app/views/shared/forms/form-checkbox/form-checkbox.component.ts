import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-form-checkbox',
	templateUrl: './form-checkbox.component.html',
	styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() label: string;
	@Input() form_control_name:string = null;
	@Input() validation_type: string = null;

	constructor() {
	}

	ngOnInit() {
	}

}
