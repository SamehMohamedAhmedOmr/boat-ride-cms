import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-form-seo-description',
	templateUrl: './form-seo-description.component.html',
	styleUrls: ['./form-seo-description.component.scss']
})
export class FormSeoDescriptionComponent implements OnInit {

	@Input() form: FormGroup;

	constructor() {
	}

	ngOnInit() {
	}

}
