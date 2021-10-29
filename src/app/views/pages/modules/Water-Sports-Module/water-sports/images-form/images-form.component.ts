import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WaterSportsService} from '../../../../../../core/services/Water-Sport-Module/Water-Sport/water.sports.service';

@Component({
	selector: 'kt-images-form',
	templateUrl: './images-form.component.html',
	styleUrls: ['./images-form.component.scss']
})
export class ImagesFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() image_urls: [] = [];
	@Input() imgURL: string;

	constructor(private service:WaterSportsService) {
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
