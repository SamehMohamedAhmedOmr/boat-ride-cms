import {Component, Input, OnInit} from '@angular/core';
import {DashboardModel} from '../../../../core/models/Settings/dashboard.model';

@Component({
	selector: 'kt-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	@Input() isLoadingResults:boolean = false;
	@Input() dashboardModel: DashboardModel;
	constructor() {
	}

	ngOnInit() {
	}

}
