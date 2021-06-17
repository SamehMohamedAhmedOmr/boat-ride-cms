import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WaterSportsReservationComponent} from './water-sports-reservation.component';
import {SharedModule} from '../../../../shared/shared.module';
import {WaterSportsReservationRoutingModule} from './water-sports-reservation-routing.module';


@NgModule({
	declarations: [WaterSportsReservationComponent],
	imports: [
		CommonModule,
		SharedModule,
		WaterSportsReservationRoutingModule,
	]
})
export class WaterSportsReservationModule {
}
