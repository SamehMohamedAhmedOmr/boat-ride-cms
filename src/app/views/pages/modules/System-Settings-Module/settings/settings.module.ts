import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {SharedModule} from '../../../../shared/shared.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule} from '@angular/material';
import {SettingsRoutingModule} from './settings-routing.module';
import { SettingsComponent } from './settings.component';



@NgModule({
  declarations: [IndexComponent, SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
  ]
})
export class SettingsModule { }
