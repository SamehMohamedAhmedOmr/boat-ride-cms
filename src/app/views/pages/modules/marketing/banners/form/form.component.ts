import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BannersTypesModel} from '../../../../../../core/models/Marketing-Module/banners..types.model';


@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() banners_types: BannersTypesModel[] = [];

	constructor() {
	}


	ngOnInit() {

}

}
