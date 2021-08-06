// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
// Core Module
import {PartialsModule} from '../../partials/partials.module';
import {DashboardComponent} from './dashboard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {PagesModule} from '../pages.module';
import {IndexComponent} from './index/index.component';
import {BoxesComponent} from './boxes/boxes.component';
import {ToggleLiveComponent} from './toggle-live/toggle-live.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
		]),
		NgxChartsModule,
		TranslateModule,
		SharedModule,
		PagesModule,
	],
	providers: [],
	declarations: [
		DashboardComponent,
		IndexComponent,
		BoxesComponent,
		ToggleLiveComponent,
	]
})
export class DashboardModule {
}
