import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtReservationComponent} from './yacht-reservation.component';
import {SharedModule} from '../../../../shared/shared.module';
import {YachtsReservationRoutingModule} from './yachts-reservation-routing.module';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {IndexComponent} from './index/index.component';
import {FormComponent} from './form/form.component';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule, MatStepperModule} from '@angular/material';
import {CustomerInformationFormComponent} from './customer-information-form/customer-information-form.component';
import { TripInformationFormComponent } from './trip-information-form/trip-information-form.component';
import { TimeSlotsTableComponent } from './time-slots-table/time-slots-table.component';


@NgModule({
	declarations: [
		YachtReservationComponent, AddComponent, EditComponent,
		IndexComponent, FormComponent, CustomerInformationFormComponent, TripInformationFormComponent, TimeSlotsTableComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		YachtsReservationRoutingModule,
		PagesModule,
		TranslateModule,
		GalleryModule,
		MatDividerModule,
		MatStepperModule,
	]
})
export class YachtReservationModule {
}
