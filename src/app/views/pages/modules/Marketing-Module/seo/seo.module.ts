import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeoComponent} from './seo.component';
import {SharedModule} from '../../../../shared/shared.module';
import {SeoRoutingModule} from './seo-routing.module';


@NgModule({
	declarations: [SeoComponent],
	imports: [
		CommonModule,
		SharedModule,
		SeoRoutingModule
	]
})
export class SeoModule {
}
