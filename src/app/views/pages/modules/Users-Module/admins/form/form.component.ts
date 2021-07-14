import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PermissionsModel} from '../../../../../../core/models/ACL-Module/permissions.model';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() permissions:PermissionsModel[] = [];

	constructor() {
	}

	ngOnInit() {
	}

}
