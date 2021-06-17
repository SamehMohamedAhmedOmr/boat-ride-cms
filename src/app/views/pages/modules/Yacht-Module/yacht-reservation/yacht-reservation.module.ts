import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtReservationComponent} from './yacht-reservation.component';
import {SharedModule} from '../../../../shared/shared.module';
import {YachtsReservationRoutingModule} from './yachts-reservation-routing.module';


@NgModule({
	declarations: [YachtReservationComponent],
	imports: [
		CommonModule,
		SharedModule,
		YachtsReservationRoutingModule,
	]
})
export class YachtReservationModule {
}
