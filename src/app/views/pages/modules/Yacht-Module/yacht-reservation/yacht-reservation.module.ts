import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YachtReservationComponent} from './yacht-reservation.component';
import {SharedModule} from '../../../../shared/shared.module';
import {YachtsReservationRoutingModule} from './yachts-reservation-routing.module';
import {PagesModule} from '../../../pages.module';
import {TranslateModule} from '@ngx-translate/core';
import {GalleryModule} from '@ngx-gallery/core';
import {MatDividerModule, MatStepperModule} from '@angular/material';

import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {IndexComponent} from './index/index.component';
import {FormComponent} from './form/form.component';
import {CustomerInformationFormComponent} from './customer-information-form/customer-information-form.component';
import {TripInformationFormComponent} from './trip-information-form/trip-information-form.component';
import {TimeSlotsTableComponent} from './time-slots-table/time-slots-table.component';
import {TripFieldsFormComponent} from './trip-fields-form/trip-fields-form.component';
import {FiltersComponent} from './filters/filters.component';


@NgModule({
	declarations: [
		YachtReservationComponent, AddComponent, EditComponent, IndexComponent, FormComponent,
		CustomerInformationFormComponent, TripInformationFormComponent,
		TimeSlotsTableComponent, TripFieldsFormComponent, FiltersComponent
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
