import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DeleteModalComponent} from '../../delete-modal/delete-modal.component';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material';

@Component({
	selector: 'kt-form-upload-image',
	templateUrl: './form-upload-image.component.html',
	styleUrls: ['./form-upload-image.component.scss']
})
export class FormUploadImageComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() label: string;
	@Input() form_control_name: string = null;
	@Input() validation_type: string = null;
	@Input() to_base64:boolean = false;
	@Input() imgURL:any = null;
	@Input() multiple:boolean = false;
	@Input() image_urls: [] = [];

	@Output() delete_emitter = new EventEmitter<number>();

	constructor(private cdr: ChangeDetectorRef,
				public translateService : TranslateService,
				public dialog: MatDialog) {
	}

	ngOnInit() {
	}

	onFileSelect(event) {
		if (event.target.files.length > 0) {

			if (!this.multiple){ // single Image
				this.handleSingleImage(event)
			}
			else{
				this.handleMultiImages(event);
			}
		}
	}

	handleMultiImages(event){

		let files: [] = [];

		Array.from(event.target.files).forEach((file) => {
			if (!this.to_base64){
				// @ts-ignore
				files.push(file);
			}

			let reader = new FileReader();
			// @ts-ignore
			reader.readAsDataURL(file);
			reader.onload = (_event) => {
				let imgURL = reader.result;
				// @ts-ignore
				this.image_urls.push(imgURL);
				if (this.to_base64){
					// @ts-ignore
					files.push(imgURL);
				}
				this.cdr.markForCheck();
			};
		});

		this.form.controls[this.form_control_name].setValue(files);
	}

	handleSingleImage(event){
		const file = event.target.files[0];
		if (!this.to_base64){
			this.form.controls[this.form_control_name].setValue(file);
		}

		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (_event) => {
			this.imgURL = reader.result;
			if (this.to_base64){
				this.form.controls[this.form_control_name].setValue(this.imgURL);
			}
			this.cdr.markForCheck();
		};
	}

	deleteModal(image) {
		const dialogRef = this.dialog.open(DeleteModalComponent, {
			width: '40rem',
			data: {
				title: this.translateService.instant('Components.Gallery.delete_image'),
				body: this.translateService.instant('Components.Gallery.delete_image_body'),
				name: this.translateService.instant('Components.Gallery.single'),
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.delete(image);
			}
		});
	}

	delete(image: any) {
		if (image.id){ // DELETE UPLOADED IMAGE
			// @ts-ignore
			this.image_urls = this.image_urls.filter(value => {
				// @ts-ignore
				if (value.id){
					// @ts-ignore
					return  image.id != value.id;
				}
				return false;
			});
			this.delete_emitter.emit(image.id);
		}
		else { // DELETE FRESH IMAGE
			let uploaded_images = this.form.controls[this.form_control_name].value;

			// @ts-ignore
			this.image_urls = this.image_urls.filter(value => {
				// @ts-ignore
				if (value.id){
					return true;
				}
				return value != image;
			});

			uploaded_images = uploaded_images.filter(value => {
				return value != image;
			});

			this.form.controls[this.form_control_name].setValue(uploaded_images);
		}
	}
}
