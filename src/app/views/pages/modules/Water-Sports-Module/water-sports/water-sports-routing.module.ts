import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WaterSportsComponent} from './water-sports.component';


const routes: Routes = [
	{
		path: '',
		component: WaterSportsComponent,
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
export class WaterSportsRoutingModule {
}
