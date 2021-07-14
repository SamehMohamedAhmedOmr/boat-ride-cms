import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';
import {PermissionUsersConfig} from '../../Global/permissions/permission.users.config';


@Injectable({
	providedIn: 'root'
})
export class UsersMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;
	permissionUsersConfig: PermissionUsersConfig;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
		this.permissionUsersConfig = new PermissionUsersConfig();
	}

	private header = {section: 'Users', translate: 'MENUS.USERS.TITLE'};

	private section = {
		title: 'MENUS.USERS.TITLE',
		root: true,
		translate: 'MENUS.USERS.TITLE',
		icon: SectionIconsName.users(),
		submenu: []
	};


	public ADMINS = {
		icon: SectionIconsName.admins(),
		title: 'MENUS.USERS.MENU.ADMINS',
		translate: 'MENUS.USERS.MENU.ADMINS',
		page: RoutesName.admins()
	};


	public ROLES = {
		icon: SectionIconsName.roles(),
		title: 'MENUS.USERS.MENU.ROLES',
		translate: 'MENUS.USERS.MENU.ROLES',
		page: RoutesName.roles()
	};


	public menu: any = {
		items: []
	};


	public checkRoutePermissions() {

		this.attachMenuItem(this.permissionUsersConfig.ADMINS_PERMISSIONS, this.ADMINS);

		// this.attachMenuItem([],this.ROLES);

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
