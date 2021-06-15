import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';


@Injectable({
	providedIn: 'root'
})
export class SettingsMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
	}

	private header = {section: 'TITLE', translate: 'MENUS.SETTINGS.TITLE'};

	private section = {
		title: 'MENUS.SETTINGS.TITLE',
		root: true,
		translate: 'MENUS.SETTINGS.TITLE',
		icon: SectionIconsName.setting(),
		submenu: [
		]
	};

	public ADMINS = {
		icon: SectionIconsName.admins(),
		title: 'MENUS.USERS.MENU.ADMINS',
		translate: 'MENUS.USERS.MENU.ADMINS',
		page: RoutesName.admins()
	};

	public DISTRICTS = {
		icon: SectionIconsName.districts(),
		title:'MENUS.SETTINGS.MENU.DISTRICTS',
		translate: 'MENUS.SETTINGS.MENU.DISTRICTS',
		page: RoutesName.districts()
	};

	public ROLES = {
		icon: SectionIconsName.roles(),
		title: 'MENUS.SETTINGS.MENU.ROLES',
		translate: 'MENUS.SETTINGS.MENU.ROLES',
		page: RoutesName.roles()
	};



	public menu: any = {
		items: [
		]
	};


	public checkRoutePermissions(){

		this.attachMenuItem([],this.ADMINS);

		this.attachMenuItem([],this.ROLES);

		this.attachMenuItem([],this.DISTRICTS);


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
