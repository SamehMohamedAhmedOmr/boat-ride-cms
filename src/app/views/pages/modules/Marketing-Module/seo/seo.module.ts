import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeoComponent} from './seo.component';
import {SharedModule} from '../../../../shared/shared.module';
import {SeoRoutingModule} from './seo-routing.module';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {IndexComponent} from './index/index.component';
import {FormComponent} from './form/form.component';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule, MatDividerModule} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@NgModule({
	declarations: [
		SeoComponent, AddComponent, EditComponent, IndexComponent, FormComponent
	],
	imports: [
		CommonModule,
		SeoRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
		MatChipsModule,
	],
	providers: [
		{
			provide: MAT_CHIPS_DEFAULT_OPTIONS,
			useValue: {
				separatorKeyCodes: [ENTER, COMMA]
			}
		}
	]
})
export class SeoModule {
}
