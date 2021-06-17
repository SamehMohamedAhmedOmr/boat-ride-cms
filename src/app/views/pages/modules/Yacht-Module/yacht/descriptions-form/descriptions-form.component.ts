import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-descriptions-form',
	templateUrl: './descriptions-form.component.html',
	styleUrls: ['./descriptions-form.component.scss']
})
export class DescriptionsFormComponent implements OnInit {

	@Input() form: FormGroup;
	constructor() {
	}

	ngOnInit() {
	}

}
