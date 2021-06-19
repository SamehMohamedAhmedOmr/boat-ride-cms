import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/ar';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/en-au';
import {CkEditorUploadImageModel} from '../../../../core/models/Base/ckEditor.upload.Image.model';
import {TranslateService} from '@ngx-translate/core';


@Component({
	selector: 'kt-form-richtext',
	templateUrl: './form-richtext.component.html',
	styleUrls: ['./form-richtext.component.scss']
})
export class FormRichtextComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() label: string;
	@Input() form_control_name:string = null;
	@Input() validation_type: string = null;

	Editor = DecoupledEditor;
	config = {};

	constructor(public translateService: TranslateService) {
	}

	ngOnInit() {
		this.initializeConfig();
	}

	initializeConfig() {
		this.config = {
			language: (localStorage.getItem('cms_pam_lang') == 'en') ? 'en-au' : 'ar',
			placeholder: this.label
		};
	}



	onReady(editor) {
		editor.plugins.get('FileRepository').createUploadAdapter = function(loader) {
			return new CkEditorUploadImageModel(loader);
		};

		editor.ui.getEditableElement().parentElement.insertBefore(
			editor.ui.view.toolbar.element,
			editor.ui.getEditableElement()
		);
	}
}
