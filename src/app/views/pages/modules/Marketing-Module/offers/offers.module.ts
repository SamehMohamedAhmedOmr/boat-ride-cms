import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OffersComponent} from './offers.component';
import {OffersRoutingModule} from './offers-routing.module';
import {SharedModule} from '../../../../shared/shared.module';


@NgModule({
	declarations: [OffersComponent],
	imports: [
		CommonModule,
		OffersRoutingModule,
		SharedModule
	]
})
export class OffersModule {
}
