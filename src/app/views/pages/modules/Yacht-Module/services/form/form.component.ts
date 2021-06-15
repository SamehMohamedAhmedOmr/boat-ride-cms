import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SpecialitiesModel} from '../../../../../../core/models/Settings/specialities.model';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() specialities:SpecialitiesModel[];

	constructor() {
	}

	ngOnInit() {
	}

}
