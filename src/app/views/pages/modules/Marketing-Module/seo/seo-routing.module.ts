import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SeoComponent} from './seo.component';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {RoutesName} from '../../../../../core/Global/routes.name';
import {EditComponent} from './edit/edit.component';
import {PermissionsGuard} from '../../../../../core/guards/permissions.guard';
import {PermissionMarketingConfig} from '../../../../../core/Global/permissions/permission.marketing.config';

let permission = new PermissionMarketingConfig();

const routes: Routes = [
	{
		path: '',
		component: SeoComponent,
		children: [
			{
				path: '',
				component: IndexComponent
			},
			{
				path: RoutesName.add(),
				component: AddComponent,
				canActivate: [PermissionsGuard],
				data: {
					permissions: [permission.MANAGE_SEO],
				},
			},
			{
				path: ':id',
				component: EditComponent,
				canActivate: [PermissionsGuard],
				data: {
					permissions: [permission.MANAGE_SEO],
				},
			},
			{path: '**', redirectTo: '', pathMatch: ''},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SeoRoutingModule {
}
