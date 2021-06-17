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


	public WATER_SPORTS = {
		icon: SectionIconsName.waterSports(),
		title: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS',
		translate: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS',
		page: RoutesName.waterSports()
	};

	public WATER_SPORTS_RESERVATION = {
		icon: SectionIconsName.waterSportsReservation(),
		title: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS_RESERVATION',
		translate: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS_RESERVATION',
		page: RoutesName.waterSportsReservation()
	};

	public menu: any = {
		items: [
		]
	};


	public checkRoutePermissions(){

		this.attachMenuItem([],this.WATER_SPORTS);
		this.attachMenuItem([],this.WATER_SPORTS_RESERVATION);


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
