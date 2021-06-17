import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WaterSportsComponent} from './water-sports.component';
import {SharedModule} from '../../../../shared/shared.module';
import {WaterSportsRoutingModule} from './water-sports-routing.module';


@NgModule({
	declarations: [WaterSportsComponent],
	imports: [
		CommonModule,
		SharedModule,
		WaterSportsRoutingModule,
	]
})
export class WaterSportsModule {
}
