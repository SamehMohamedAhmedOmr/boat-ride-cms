import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-key-feature-form',
	templateUrl: './key-feature-form.component.html',
	styleUrls: ['./key-feature-form.component.scss']
})
export class KeyFeatureFormComponent implements OnInit {

	@Input() form: FormGroup;

	constructor() {
	}

	ngOnInit() {
	}

}
