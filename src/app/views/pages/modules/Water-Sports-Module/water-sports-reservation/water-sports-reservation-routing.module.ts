import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WaterSportsReservationComponent} from './water-sports-reservation.component';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {RoutesName} from '../../../../../core/Global/routes.name';
import {PermissionsGuard} from '../../../../../core/guards/permissions.guard';
import {PermissionWaterSportConfig} from '../../../../../core/Global/permissions/permission.water.sport.config';

let permission = new PermissionWaterSportConfig();

const routes: Routes = [
	{
		path: '',
		component: WaterSportsReservationComponent,
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
					permissions: [permission.MANAGE_WATER_SPORT_RESERVATION],
				},
			},
			{
				path: ':id',
				component: EditComponent,
				canActivate: [PermissionsGuard],
				data: {
					permissions: [permission.MANAGE_WATER_SPORT_RESERVATION],
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
export class WaterSportsReservationRoutingModule {
}
