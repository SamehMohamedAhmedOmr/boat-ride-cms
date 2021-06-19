import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OffersComponent} from './offers.component';
import {OffersRoutingModule} from './offers-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {FormComponent} from './form/form.component';
import {IndexComponent} from './index/index.component';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule} from '@angular/material';


@NgModule({
	declarations: [OffersComponent, AddComponent, EditComponent, FormComponent, IndexComponent],
	imports: [
		CommonModule,
		OffersRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
	]
})
export class OffersModule {
}
