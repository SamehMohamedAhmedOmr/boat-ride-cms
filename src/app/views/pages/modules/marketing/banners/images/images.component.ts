import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GalleryInterface} from '../../../../../shared/Base-Interface/gallery.Interface';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
	selector: 'kt-images',
	templateUrl: './images.component.html',
	styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit, GalleryInterface {


	show_gallery: boolean = false;

	images: GalleryItem[] = [];

	@Input() selected_images: [] = [];

	isLoadingResults: any = true;

	@Output() image_event = new EventEmitter<[]>();

	constructor() {
	}

	ngOnInit() {
		this.generateSlider(this.selected_images);
	}

	private generateSlider(images) {
		let slider = [];
		images.forEach((image) => {
			let imageItem = new ImageItem({src: image.image, thumb: image.thumbnail});
			slider.push(imageItem);
		});

		this.images = slider;
	}

	attach(items, images = null) {
		this.generateSlider(images);

		this.image_event.emit(items);

		this.show_gallery = false;
	}

	showGallery() {
		this.show_gallery = true;
	}
}
