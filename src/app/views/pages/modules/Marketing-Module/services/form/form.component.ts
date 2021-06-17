import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ServicesEnumsModel} from '../../../../../../core/models/Yacht-Module/services.enums.model';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() price_model: ServicesEnumsModel;
	@Input() imgURL: string;

	constructor() {
	}

	ngOnInit() {
	}

}
