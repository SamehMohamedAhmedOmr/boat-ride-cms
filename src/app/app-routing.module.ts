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
import {PermissionMarketingConfig} from './core/Global/permissions/permission.marketing.config';
import {PermissionUsersConfig} from './core/Global/permissions/permission.users.config';
import {PermissionWaterSportConfig} from './core/Global/permissions/permission.water.sport.config';
import {PermissionYachtsConfig} from './core/Global/permissions/permission.yachts.config';

let permissionMarketingConfig = new PermissionMarketingConfig();
let permissionUsersConfig = new PermissionUsersConfig();
let permissionWaterSportConfig = new PermissionWaterSportConfig();
let permissionYachtsConfig = new PermissionYachtsConfig();

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
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionUsersConfig.ADMINS_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Users-Module/admins/admins.module')
					.then(m => m.AdminsModule)
			},
			// roles
			{
				path: RoutesName.roles(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/Users-Module/roles/roles.module')
					.then(m => m.RolesModule)
			},

			//settings
			{
				path: RoutesName.settings(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/System-Settings-Module/settings/settings.module')
					.then(m => m.SettingsModule)
			},

			/*  marketing-modules */
			// banners
			{
				path: RoutesName.banners(), // <= Page URL ,
				// canActivate: [PermissionsGuard],
				// data: {
				// 	permissions: permissionCatalogueConfig.product_permissions,
				// },
				loadChildren: () => import('./views/pages/modules/Marketing-Module/banners/banners.module')
					.then(m => m.BannersModule)
			},
			// services
			{
				path: RoutesName.services(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionMarketingConfig.SERVICES_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Marketing-Module/services/services.module')
					.then(m => m.ServicesModule)
			},
			// offers
			{
				path: RoutesName.offers(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionMarketingConfig.OFFERS_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Marketing-Module/offers/offers.module')
					.then(m => m.OffersModule)
			},

			// blogs
			{
				path: RoutesName.blogs(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionMarketingConfig.BLOGS_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Marketing-Module/blogs/blogs.module')
					.then(m => m.BlogsModule)
			},
			// seo
			{
				path: RoutesName.seo(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionMarketingConfig.SEO_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Marketing-Module/seo/seo.module')
					.then(m => m.SeoModule)
			},

			/*  yachts-modules */
			// yachts
			{
				path: RoutesName.yachts(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionYachtsConfig.YACHTS_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Yacht-Module/yacht/yacht.module')
					.then(m => m.YachtModule)
			},

			// yachtsReservation
			{
				path: RoutesName.yachtsReservation(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionYachtsConfig.YACHTS_RESERVATION_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Yacht-Module/yacht-reservation/yacht-reservation.module')
					.then(m => m.YachtReservationModule)
			},

			/*  waterSports-modules */
			// waterSports
			{
				path: RoutesName.waterSports(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionWaterSportConfig.WATER_SPORTS_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Water-Sports-Module/water-sports/water-sports.module')
					.then(m => m.WaterSportsModule)
			},
			// waterSportsReservation
			{
				path: RoutesName.waterSportsReservation(), // <= Page URL ,
				canActivate: [PermissionsGuard],
				data: {
					permissions: permissionWaterSportConfig.WATER_SPORTS_RESERVATION_PERMISSIONS,
				},
				loadChildren: () => import('./views/pages/modules/Water-Sports-Module/water-sports-reservation/water-sports-reservation.module')
					.then(m => m.WaterSportsReservationModule)
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
