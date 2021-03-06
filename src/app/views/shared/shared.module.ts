import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {
	MatDividerModule,
	MatDialogModule,
	MatInputModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatSelectModule,
	MatTooltipModule, MatButtonModule, MatDatepickerModule, MatCheckboxModule, MatIconModule, MatLineModule, MatListModule, MatChipsModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiLoaderComponent} from './api-loader/api-loader.component';
import {TranslateModule} from '@ngx-translate/core';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {GalleryComponent} from './gallery/gallery.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AuthNoticeComponent} from './auth-notice/auth-notice.component';
import {SuccessModalComponent} from './success-model/success-modal.component';
import {NextPreviousListComponent} from './next-previous-list/next-previous-list.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {PopupGalleryComponent} from './popup-gallery/popup-gallery.component';
import {GlobalNoticeComponent} from './global-notice/global-notice.component';
import {FormErrorComponent} from './form-error/form-error.component';
import {ListOptionsComponent} from './list-options/list-options.component';
import {NoRecordFoundComponent} from './no-record-found/no-record-found.component';
import {SoonComponent} from './soon/soon.component';
import {FormTextareaComponent} from './forms/form-textarea/form-textarea.component';
import {FormSelectComponent} from './forms/form-select/form-select.component';
import {FormInputComponent} from './forms/form-input/form-input.component';
import {FormRadioGroupComponent} from './forms/form-radio-group/form-radio-group.component';
import {FormShowComponent} from './forms/form-show/form-show.component';
import {FormUploadImageComponent} from './forms/form-upload-image/form-upload-image.component';
import {FormStatusComponent} from './forms/form-status/form-status.component';
import {MatMenuModule} from '@angular/material/menu';
import {FormDatePickerComponent} from './forms/form-date-picker/form-date-picker.component';
import {FormRichtextComponent} from './forms/form-richtext/form-richtext.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {FormCheckboxComponent} from './forms/form-checkbox/form-checkbox.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormSeoDescriptionComponent} from './forms/form-seo-description/form-seo-description.component';
import {FormIntlTelComponent} from './forms/form-intl-tel/form-intl-tel.component';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import {FormTagInputComponent} from './forms/form-tag-input/form-tag-input.component';
import {ErrorsModelComponent} from './errors-model/errors-model.component';


@NgModule({
	declarations: [
		AuthNoticeComponent,
		GlobalNoticeComponent,
		FilterComponent,
		ApiLoaderComponent,
		DeleteModalComponent,
		GalleryComponent,
		SuccessModalComponent,
		NextPreviousListComponent,
		PopupGalleryComponent,
		FormErrorComponent,
		ListOptionsComponent,
		NoRecordFoundComponent,
		SoonComponent,
		FormTextareaComponent,
		FormSelectComponent,
		FormInputComponent,
		FormRadioGroupComponent,
		FormShowComponent,
		FormUploadImageComponent,
		FormStatusComponent,
		FormDatePickerComponent,
		FormRichtextComponent,
		FormCheckboxComponent,
		FormSeoDescriptionComponent,
		FormIntlTelComponent,
		FormTagInputComponent,
		ErrorsModelComponent,
	],
	imports: [
		CommonModule,
		MatSelectModule,
		RouterModule,
		FormsModule,
		MatDividerModule,
		MatRadioModule,
		MatInputModule,
		MatProgressSpinnerModule,
		TranslateModule,
		MatDialogModule,
		ReactiveFormsModule,
		DragDropModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatTooltipModule,
		MatButtonModule,
		MatDatepickerModule,
		NgxMatSelectSearchModule,
		MatCheckboxModule,
		MatIconModule,
		MatLineModule,
		MatListModule,
		MatMenuModule,
		CKEditorModule,
		NgbModule,
		NgxIntlTelInputModule,
		MatChipsModule,
	],
	entryComponents: [
		DeleteModalComponent,
		SuccessModalComponent,
		PopupGalleryComponent,
		ErrorsModelComponent,
	],
	exports: [
		FilterComponent,
		ApiLoaderComponent,
		DeleteModalComponent,
		SuccessModalComponent,
		GalleryComponent,
		AuthNoticeComponent,
		GlobalNoticeComponent,
		NextPreviousListComponent,
		FormErrorComponent,
		ListOptionsComponent,
		NoRecordFoundComponent,
		SoonComponent,
		FormTextareaComponent,
		FormInputComponent,
		FormRadioGroupComponent,
		FormSelectComponent,
		FormShowComponent,
		FormUploadImageComponent,
		MatMenuModule,
		FormDatePickerComponent,
		FormRichtextComponent,
		FormCheckboxComponent,
		FormSeoDescriptionComponent,
		FormIntlTelComponent,
	]
})
export class SharedModule {
}
