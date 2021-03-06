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
export class ShortAccessMenuConfig {

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
		title: 'Short Access',
		root: true,
		translate: 'MENU.SHORT_ACCESS',
		icon: 'flaticon2-refresh-button',
		submenu: [
		]
	};

	public SERVICES = {
		icon: SectionIconsName.services(),
		title: 'MENUS.MARKETING.MENU.SERVICES',
		translate: 'MENUS.MARKETING.MENU.SERVICES',
		page: RoutesName.services()
	};

	public YACHTS = {
		icon: SectionIconsName.yachts(),
		title: 'MENUS.YACHT_SETTINGS.MENU.YACHTS',
		translate: 'MENUS.YACHT_SETTINGS.MENU.YACHTS',
		page: RoutesName.yachts()
	};

	public YACHTS_RESERVATION = {
		icon: SectionIconsName.yachtsReservation(),
		title: 'MENUS.YACHT_SETTINGS.MENU.YACHTS_RESERVATION',
		translate: 'MENUS.YACHT_SETTINGS.MENU.YACHTS_RESERVATION',
		page: RoutesName.yachtsReservation()
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

		this.attachMenuItem(this.permissionMarketingConfig.SERVICES_PERMISSIONS, this.SERVICES);

		this.attachMenuItem(this.permissionYachtsConfig.YACHTS_PERMISSIONS,this.YACHTS);
		this.attachMenuItem(this.permissionYachtsConfig.YACHTS_RESERVATION_PERMISSIONS,this.YACHTS_RESERVATION);

		this.attachMenuItem(this.permissionWaterSportConfig.WATER_SPORTS_PERMISSIONS,this.WATER_SPORTS);
		this.attachMenuItem(this.permissionWaterSportConfig.WATER_SPORTS_RESERVATION_PERMISSIONS,this.WATER_SPORTS_RESERVATION);

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
