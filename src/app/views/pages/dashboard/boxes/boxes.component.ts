import {Component, Input, OnInit} from '@angular/core';
import {DashboardModel} from '../../../../core/models/Settings/dashboard.model';

@Component({
	selector: 'kt-boxes',
	templateUrl: './boxes.component.html',
	styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

	@Input() dashboardModel: DashboardModel;

	constructor() {
	}

	ngOnInit() {
	}

}
