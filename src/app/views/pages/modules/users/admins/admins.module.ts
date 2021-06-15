import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminsRoutingModule} from './admins-routing.module';
import {AdminsComponent} from './admins.component';
import {SharedModule} from '../../../../shared/shared.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
	declarations: [AdminsComponent],
	imports: [
		CommonModule,
		AdminsRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
	]
})
export class AdminsModule {
}
