import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';
import {PermissionYachtsConfig} from '../../Global/permissions/permission.yachts.config';


@Injectable({
	providedIn: 'root'
})
export class YachtMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;
	permissionYachtsConfig: PermissionYachtsConfig;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
		this.permissionYachtsConfig = new PermissionYachtsConfig();
	}

	private header = {section: 'YACHT', translate: 'MENUS.YACHT_SETTINGS.TITLE'};

	private section = {
		title: 'MENUS.YACHT_SETTINGS.TITLE',
		root: true,
		translate: 'MENUS.YACHT_SETTINGS.TITLE',
		icon: SectionIconsName.setting(),
		submenu: []
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


	public menu: any = {
		items: []
	};


	public checkRoutePermissions() {

		this.attachMenuItem(this.permissionYachtsConfig.YACHTS_PERMISSIONS, this.YACHTS);
		this.attachMenuItem(this.permissionYachtsConfig.YACHTS_RESERVATION_PERMISSIONS, this.YACHTS_RESERVATION);

		this.attachMenu();
	}

	attachMenuItem(permissions, url) {
		let check = this.systemPermissionsHelperService.checkPermissions(permissions);
		if (check) {
			this.attach(url);
		}
	}

	private attach(url) {
		this.section.submenu.push(url);
	}

	private attachMenu() {
		if (this.section.submenu.length) {
			this.menu.items.push(this.header);
			this.menu.items.push(this.section);
		}
	}

	public get configs(): any {
		this.checkRoutePermissions();
		return this.menu.items;
	}

}
