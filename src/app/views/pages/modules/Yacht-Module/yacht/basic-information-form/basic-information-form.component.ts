import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';

@Component({
	selector: 'kt-basic-information-form',
	templateUrl: './basic-information-form.component.html',
	styleUrls: ['./basic-information-form.component.scss']
})
export class BasicInformationFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsEnumsModel;

	constructor() {
	}

	ngOnInit() {
	}

}
