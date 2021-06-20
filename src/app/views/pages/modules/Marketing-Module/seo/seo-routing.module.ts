import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SeoComponent} from './seo.component';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {RoutesName} from '../../../../../core/Global/routes.name';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
	{
		path: '',
		component: SeoComponent,
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
export class SeoRoutingModule {
}
