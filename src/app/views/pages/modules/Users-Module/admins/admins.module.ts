import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminsRoutingModule} from './admins-routing.module';
import {AdminsComponent} from './admins.component';
import {SharedModule} from '../../../../shared/shared.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule} from '@angular/material';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {FormComponent} from './form/form.component';
import {IndexComponent} from './index/index.component';

@NgModule({
	declarations: [
		AdminsComponent, AddComponent, EditComponent, FormComponent, IndexComponent
	],
	imports: [
		CommonModule,
		AdminsRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
	]
})
export class AdminsModule {
}
