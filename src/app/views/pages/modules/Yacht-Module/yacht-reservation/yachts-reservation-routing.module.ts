import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YachtReservationComponent} from './yacht-reservation.component';


const routes: Routes = [
	{
		path: '',
		component: YachtReservationComponent,
		// children: [
		// 	{
		// 		path: '',
		// 		component: IndexComponent
		// 	},
		// 	{
		// 		path: RoutesName.add(),
		// 		component: AddComponent
		// 	},
		// 	{
		// 		path: ':id',
		// 		component: EditComponent
		// 	},
		// 	{path: '**', redirectTo: '', pathMatch: ''},
		// ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class YachtsReservationRoutingModule {
}
