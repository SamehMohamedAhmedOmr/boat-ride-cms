import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsEnumsModel} from '../../../../../../core/models/Yacht-Module/yachts.enums.model';

@Component({
	selector: 'kt-technical-form',
	templateUrl: './technical-form.component.html',
	styleUrls: ['./technical-form.component.scss']
})
export class TechnicalFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() enumsModel: YachtsEnumsModel;
	constructor() {
	}

	ngOnInit() {
	}

}
