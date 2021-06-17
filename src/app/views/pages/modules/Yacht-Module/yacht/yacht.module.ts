import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtComponent} from './yacht.component';
import {SharedModule} from '../../../../shared/shared.module';
import {YachtsRoutingModule} from './yachts-routing.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule} from '@angular/material';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {FormComponent} from './form/form.component';

@NgModule({
	declarations: [YachtComponent, IndexComponent, AddComponent, EditComponent, FormComponent,],
	imports: [
		CommonModule,
		SharedModule,
		YachtsRoutingModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
	]
})
export class YachtModule {
}
