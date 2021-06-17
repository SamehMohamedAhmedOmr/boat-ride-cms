import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffersComponent} from './offers.component';


const routes: Routes = [
	{
		path: '',
		component: OffersComponent,
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
export class OffersRoutingModule {
}
