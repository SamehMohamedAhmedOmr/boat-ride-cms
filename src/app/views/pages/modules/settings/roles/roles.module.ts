import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RolesRoutingModule} from './roles-routing.module';
import {RolesComponent} from './roles.component';
import {SharedModule} from '../../../../shared/shared.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';

@NgModule({
	declarations: [
		RolesComponent, IndexComponent, AddComponent, EditComponent
	],
	imports: [
		CommonModule,
		RolesRoutingModule,
		SharedModule,
		PagesModule,
		TranslateModule,
	]
})
export class RolesModule {
}
