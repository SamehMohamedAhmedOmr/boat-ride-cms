import {Component, Input, OnInit} from '@angular/core';
import {DashboardModel} from '../../../../core/models/Settings/dashboard.model';
import {DashboardService} from '../../../../core/services/Setting/dashboard.service';
import {SettingsModel} from '../../../../core/models/Settings/settings.model';

@Component({
	selector: 'kt-toggle-live',
	templateUrl: './toggle-live.component.html',
	styleUrls: ['./toggle-live.component.scss']
})
export class ToggleLiveComponent implements OnInit {

	@Input() dashboardModel: DashboardModel;
	settingModel: SettingsModel;

	constructor(private service: DashboardService) {
	}

	ngOnInit() {
		this.settingModel = new SettingsModel(null);
		this.settingModel.enable_coming_soon = this.dashboardModel?.settings?.enable_coming_soon;
	}

	toggleLive() {
		this.service.createSettings(this.settingModel).subscribe(
			(resp) => {
				this.dashboardModel.settings.enable_coming_soon = this.settingModel.enable_coming_soon;
			}, error => {

			});
	}
}
