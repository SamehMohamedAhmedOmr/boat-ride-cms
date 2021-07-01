import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-form-input',
	templateUrl: './form-input.component.html',
	styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() label: string;
	@Input() form_control_name:string = null;
	@Input() validation_type: string = null;
	@Input() type: string = 'text';
	@Input() disabled: boolean = false;
	@Input() readonly : boolean = false;

	constructor() {
	}

	ngOnInit() {
	}

}
