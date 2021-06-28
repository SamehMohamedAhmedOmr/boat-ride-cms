import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YachtReservationComponent} from './yacht-reservation.component';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {RoutesName} from '../../../../../core/Global/routes.name';


const routes: Routes = [
	{
		path: '',
		component: YachtReservationComponent,
		children: [
			{
				path: '',
				component: IndexComponent
			},
			{
				path: RoutesName.add(),
				component: AddComponent
			},
			{
				path: ':id',
				component: EditComponent
			},
			{path: '**', redirectTo: '', pathMatch: ''},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class YachtsReservationRoutingModule {
}
