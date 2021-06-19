import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

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

	constructor(private cdr: ChangeDetectorRef,) {
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

}
