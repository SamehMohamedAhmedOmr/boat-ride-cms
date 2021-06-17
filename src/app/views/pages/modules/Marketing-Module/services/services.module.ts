import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServicesRoutingModule} from './services-routing.module';
import {ServicesComponent} from './services.component';
import {SharedModule} from '../../../../shared/shared.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {FormComponent} from './form/form.component';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule} from '@angular/material';

@NgModule({
	declarations: [
		ServicesComponent, IndexComponent, AddComponent, EditComponent, FormComponent,
	],
	imports: [
		CommonModule,
		ServicesRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
	]
})
export class ServicesModule {
}
