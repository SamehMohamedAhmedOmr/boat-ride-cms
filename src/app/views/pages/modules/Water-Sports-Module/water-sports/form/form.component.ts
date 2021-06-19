import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WaterSportsEnumsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.enums.model';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: WaterSportsEnumsModel;
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
