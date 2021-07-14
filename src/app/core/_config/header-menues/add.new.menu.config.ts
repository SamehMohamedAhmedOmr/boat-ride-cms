import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';
import {PermissionMarketingConfig} from '../../Global/permissions/permission.marketing.config';
import {PermissionWaterSportConfig} from '../../Global/permissions/permission.water.sport.config';
import {PermissionYachtsConfig} from '../../Global/permissions/permission.yachts.config';


@Injectable({
	providedIn: 'root'
})
export class AddNewMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;
	permissionYachtsConfig: PermissionYachtsConfig;
	permissionWaterSportConfig: PermissionWaterSportConfig;
	permissionMarketingConfig: PermissionMarketingConfig;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
		this.permissionMarketingConfig = new PermissionMarketingConfig();
		this.permissionWaterSportConfig = new PermissionWaterSportConfig();
		this.permissionYachtsConfig = new PermissionYachtsConfig();
	}

	private section = {
		title: 'Add New', // <= Title of the page
		root: true,
		translate: 'MENU.ADD_NEW',
		icon: 'flaticon-plus',
		submenu: [
		]
	};

	public SERVICES = {
		icon: SectionIconsName.services(),
		title: 'MENUS.MARKETING.MENU.SERVICES',
		translate: 'MENUS.MARKETING.MENU.SERVICES',
		page: RoutesName.services() + '/' + RoutesName.add()
	};

	public YACHTS = {
		icon: SectionIconsName.yachts(),
		title: 'MENUS.YACHT_SETTINGS.MENU.YACHTS',
		translate: 'MENUS.YACHT_SETTINGS.MENU.YACHTS',
		page: RoutesName.yachts() + '/' + RoutesName.add()
	};

	public YACHTS_RESERVATION = {
		icon: SectionIconsName.yachtsReservation(),
		title: 'MENUS.YACHT_SETTINGS.MENU.YACHTS_RESERVATION',
		translate: 'MENUS.YACHT_SETTINGS.MENU.YACHTS_RESERVATION',
		page: RoutesName.yachtsReservation() + '/' + RoutesName.add()
	};

	public WATER_SPORTS = {
		icon: SectionIconsName.waterSports(),
		title: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS',
		translate: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS',
		page: RoutesName.waterSports() + '/' + RoutesName.add()
	};

	public WATER_SPORTS_RESERVATION = {
		icon: SectionIconsName.waterSportsReservation(),
		title: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS_RESERVATION',
		translate: 'MENUS.WATER_SPORT_SETTINGS.MENU.WATER_SPORTS_RESERVATION',
		page: RoutesName.waterSportsReservation() + '/' + RoutesName.add()
	};

	public menu: any = {
		items: [
		]
	};

	public checkRoutePermissions(){

		this.attachMenuItem([this.permissionMarketingConfig.MANAGE_SERVICES], this.SERVICES);

		this.attachMenuItem([this.permissionYachtsConfig.MANAGE_YACHT],this.YACHTS);
		this.attachMenuItem([this.permissionYachtsConfig.MANAGE_YACHT_RESERVATION],this.YACHTS_RESERVATION);

		this.attachMenuItem([this.permissionWaterSportConfig.MANAGE_WATER_SPORT],this.WATER_SPORTS);
		this.attachMenuItem([this.permissionWaterSportConfig.MANAGE_WATER_SPORT_RESERVATION],this.WATER_SPORTS_RESERVATION);

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
			this.menu.items.push(this.section);
		}
	}

	public get configs(): any {
		this.checkRoutePermissions();
		return this.menu.items;
	}

}
