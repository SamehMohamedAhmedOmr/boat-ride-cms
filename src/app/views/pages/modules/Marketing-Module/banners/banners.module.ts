import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannersRoutingModule} from './banners-routing.module';
import {BannersComponent} from './banners.component';
import {SharedModule} from '../../../../shared/shared.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {FormComponent} from './form/form.component';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule} from '@angular/material';
import {ImagesComponent} from './images/images.component';


@NgModule({
	declarations: [BannersComponent, IndexComponent, AddComponent, EditComponent, FormComponent, ImagesComponent],
	imports: [
		CommonModule,
		BannersRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule
	]
})
export class BannersModule {
}
