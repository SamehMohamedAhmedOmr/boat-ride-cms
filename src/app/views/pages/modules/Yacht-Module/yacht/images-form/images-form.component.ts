import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-images-form',
	templateUrl: './images-form.component.html',
	styleUrls: ['./images-form.component.scss']
})
export class ImagesFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() image_urls: [] = [];

	constructor() {
	}

	ngOnInit() {
	}

}
