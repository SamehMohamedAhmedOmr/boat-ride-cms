// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import {PermissionsGuard} from './core/guards/permissions.guard';
import {RoutesName} from './core/Global/routes.name';


const routes: Routes = [
	{ path: '', canActivate: [GuestGuard], loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
	{
		path: 'cms',
		component: BaseComponent,
		canActivate: [AuthGuard],
		runGuardsAndResolvers: 'always',
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},

			/*  user-modules */
			// admins
			{
				path: RoutesName.admins(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/users/admins/admins.module')
					.then(m => m.AdminsModule)
			},
			// doctors
			{
				path: RoutesName.doctors(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/users/doctors/doctors.module')
					.then(m => m.DoctorsModule)
			},
			// patient
			{
				path: RoutesName.patients(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/users/patients/patients.module')
					.then(m => m.PatientsModule)
			},


			/*  setting-modules */
			// districts
			{
				path: RoutesName.districts(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/settings/district/district.module')
					.then(m => m.DistrictModule)
			},
			// roles
			{
				path: RoutesName.roles(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/settings/roles/roles.module')
					.then(m => m.RolesModule)
			},


			/*  marketing-modules */
			// banners
			{
				path: RoutesName.banners(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/marketing/banners/banners.module')
					.then(m => m.BannersModule)
			},
			// collection
			{
				path: RoutesName.collections(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/marketing/collections/collections.module')
					.then(m => m.CollectionsModule)
			},


			/*  doctor-setting-modules */
			// packages
			{
				path: RoutesName.packages(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/doctor-settings/packages/packages.module')
					.then(m => m.PackagesModule)
			},
			// services
			{
				path: RoutesName.services(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/doctor-settings/services/services.module')
					.then(m => m.ServicesModule)
			},
			// specialities
			{
				path: RoutesName.specialities(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/doctor-settings/specialities/specialities.module')
					.then(m => m.SpecialitiesModule)
			},

			// appointments
			{
				path: RoutesName.appointments(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/doctor-settings/appointment/appointment.module')
					.then(m => m.AppointmentModule)
			},

			// operations
			{
				path: RoutesName.operations(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/doctor-settings/operations/operations.module')
					.then(m => m.OperationsModule)
			},

		]
	},

	{
		path: 'error/:type', component: ErrorPageComponent,
		data: {
			'type': 'error-v1',
			'code': 403,
			'title': '403... Access forbidden',
			'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
		}
	},
	{ path: '**', redirectTo: 'error/error-v1', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
