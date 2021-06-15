import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';


@Injectable({
	providedIn: 'root'
})
export class WaterSportMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
	}

	private header = {section: 'YACHT', translate: 'MENUS.WATER_SPORT_SETTINGS.TITLE'};

	private section = {
		title: 'MENUS.WATER_SPORT_SETTINGS.TITLE',
		root: true,
		translate: 'MENUS.WATER_SPORT_SETTINGS.TITLE',
		icon: SectionIconsName.setting(),
		submenu: [
		]
	};


	public WATER_SPORT = {
		icon: SectionIconsName.services(),
		title: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORT',
		translate: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORT',
		page: RoutesName.services()
	};


	public menu: any = {
		items: [
		]
	};


	public checkRoutePermissions(){

		this.attachMenuItem([],this.WATER_SPORT);


		this.attachMenu();

	}

	attachMenuItem(permissions, url){
		let check = this.systemPermissionsHelperService.checkPermissions(permissions);
		if (check){
			this.attach(url)
		}
	}

	private attach(url){
		this.section.submenu.push(url)
	}

	private attachMenu(){
		if (this.section.submenu.length){
			this.menu.items.push(this.header);
			this.menu.items.push(this.section);
		}
	}

	public get configs(): any {
		this.checkRoutePermissions();
		return this.menu.items;
	}

}
