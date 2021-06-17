import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtComponent} from './yacht.component';
import {SharedModule} from '../../../../shared/shared.module';
import {YachtsRoutingModule} from './yachts-routing.module';


@NgModule({
	declarations: [YachtComponent],
	imports: [
		CommonModule,
		SharedModule,
		YachtsRoutingModule,
	]
})
export class YachtModule {
}
