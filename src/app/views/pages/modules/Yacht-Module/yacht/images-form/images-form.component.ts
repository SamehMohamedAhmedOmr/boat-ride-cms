import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {YachtsService} from '../../../../../../core/services/Yacht-Module/yachts/yachts.service';

@Component({
	selector: 'kt-images-form',
	templateUrl: './images-form.component.html',
	styleUrls: ['./images-form.component.scss']
})
export class ImagesFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() image_urls: [] = [];

	constructor(private service:YachtsService) {
	}

	ngOnInit() {
	}

	deleteImage(image_id){
		this.service.deleteImage(image_id).subscribe(
			(data) => {

			}, error => {

			}
		);
	}
}
