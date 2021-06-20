import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ServicesModel} from '../../../../../../core/models/Marketing-Module/services.model';
import {WaterSportsEnumsModel} from '../../../../../../core/models/Water-Sport-Module/water.sports.enums.model';

@Component({
	selector: 'kt-basic-information-form',
	templateUrl: './basic-information-form.component.html',
	styleUrls: ['./basic-information-form.component.scss']
})
export class BasicInformationFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: WaterSportsEnumsModel;

	constructor() {
	}

	ngOnInit() {
	}

}
