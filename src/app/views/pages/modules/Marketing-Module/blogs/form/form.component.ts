import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() imgURL: string;
	@Input() meta_tags_ar: [] =[];
	@Input() meta_tags_en: [] =[];

	constructor() {
	}

	ngOnInit() {
	}

}
