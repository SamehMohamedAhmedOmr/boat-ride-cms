import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsEnumsModel;
	@Input() services: ServicesModel[];
	@Input() imgURL: string;
	@Input() image_urls: [] = [];

	constructor() {
	}

	ngOnInit() {
	}

	stepChanged(event, stepper){
		stepper.selected.interacted = false;
	}
}
