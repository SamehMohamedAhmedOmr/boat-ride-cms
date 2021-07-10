import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'kt-form-tag-input',
  templateUrl: './form-tag-input.component.html',
  styleUrls: ['./form-tag-input.component.scss']
})
export class FormTagInputComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() label: string;
	@Input() form_control_name:string = null;
	@Input() validation_type: string = null;
	@Input() meta_tags: [] =[];

	selectable = true;
	removable = true;
	addOnBlur = true;
	readonly separatorKeysCodes = [ENTER, COMMA] as const;

	constructor() {
	}

	ngOnInit() {
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		const input = event.input;

		// Add our fruit
		if (value) {
			// @ts-ignore
			this.meta_tags.push(value);
		}
		this.form.controls[this.form_control_name].setValue(this.meta_tags);
		// Reset the input value
		if (input) {
			input.value = '';
		}
	}

	remove(value): void {
		// @ts-ignore
		const index = this.meta_tags.indexOf(value);

		if (index >= 0) {
			this.meta_tags.splice(index, 1);
		}
		this.form.controls[this.form_control_name].setValue(this.meta_tags);
	}
}
