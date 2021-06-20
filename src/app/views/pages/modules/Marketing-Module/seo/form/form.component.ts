import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
	selector: 'kt-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	readonly separatorKeysCodes = [ENTER, COMMA] as const;

	@Input() form: FormGroup;
	@Input() imgURL: string;
	@Input() keywords_ar: [] = [];
	@Input() keywords_en: [] = [];

	@Output() keywordsArabicEvent = new EventEmitter<[]>();
	@Output() keywordsEnglishEvent = new EventEmitter<[]>();

	constructor() {
	}

	ngOnInit() {
	}

	add(event: MatChipInputEvent, ar = false): void {
		const value = (event.value || '').trim();
		const input = event.input;

		// Add our fruit
		if (value) {
			if (ar){
				// @ts-ignore
				this.keywords_ar.push(value);
				this.keywordsArabicEvent.emit(this.keywords_ar);
			}
			else{
				// @ts-ignore
				this.keywords_en.push(value);
				this.keywordsEnglishEvent.emit(this.keywords_en);
			}
		}

		// Reset the input value
		if (input) {
			input.value = '';
		}
	}

	remove(model, ar = false): void {
		// @ts-ignore
		const index = (ar) ? this.keywords_ar.indexOf(model) : this.keywords_en.indexOf(model);

		if (index >= 0) {
			if (ar){
				this.keywords_ar.splice(index, 1);
				this.keywordsArabicEvent.emit(this.keywords_ar);
			}
			else{
				this.keywords_en.splice(index, 1);
				this.keywordsEnglishEvent.emit(this.keywords_en);
			}
		}
	}
}
