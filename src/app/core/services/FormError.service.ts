import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class FormErrorService {
	constructor() {}

	public markAsTouched(controls){
		const invalid = [];
		Object.keys(controls).forEach(controlName => {
				controls[controlName].markAsTouched();
				if (controls[controlName].invalid){
					invalid.push(controlName);
				}

				// loop to show languages errors
				if(controlName == 'languages') {
					// @ts-ignore
					let lang_objects = controls[controlName].controls;
					Object.keys(lang_objects).forEach(object_index => {
						let lang_controls = lang_objects[object_index].controls;
						Object.keys(lang_controls).forEach(controlName => {
							lang_controls[controlName].markAsTouched();
						});
					});
				}
			}
		);
		return invalid;
	}

	public isControlHasError(form, controlName, validationType){
		const control = form.controls[controlName];
		if (!control) {
			return false;
		}
		return control.hasError(validationType) && (control.dirty || control.touched);
	}

	public isLanguageHasError(form, index , controlName: string, validationType: string): boolean {
		let control = form.controls['languages'];
		// @ts-ignore
		control = control.controls[index].controls[controlName];
		if (!control) {
			return false;
		}
		return control.hasError(validationType) && (control.dirty || control.touched);
	}
}
