import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WaterSportsComponent} from './water-sports.component';
import {SharedModule} from '../../../../shared/shared.module';
import {WaterSportsRoutingModule} from './water-sports-routing.module';
import {AddComponent} from './add/add.component';
import {BasicInformationFormComponent} from './basic-information-form/basic-information-form.component';
import {DescriptionsFormComponent} from './descriptions-form/descriptions-form.component';
import {EditComponent} from './edit/edit.component';
import {FormComponent} from './form/form.component';
import {ImagesFormComponent} from './images-form/images-form.component';
import {IndexComponent} from './index/index.component';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule, MatStepperModule} from '@angular/material';


@NgModule({
	declarations: [
		WaterSportsComponent,
		AddComponent,
		BasicInformationFormComponent,
		DescriptionsFormComponent,
		EditComponent,
		FormComponent,
		ImagesFormComponent,
		IndexComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		WaterSportsRoutingModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
		MatStepperModule,
	]
})
export class WaterSportsModule {
}
