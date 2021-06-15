import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';


@Injectable({
	providedIn: 'root'
})
export class DoctorsSettingsMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
	}

	private header = {section: 'DOCTORS_SETTINGS', translate: 'MENUS.DOCTORS_SETTINGS.TITLE'};

	private section = {
		title: 'MENUS.DOCTORS_SETTINGS.TITLE',
		root: true,
		translate: 'MENUS.DOCTORS_SETTINGS.TITLE',
		icon: SectionIconsName.doctorSetting(),
		submenu: [
		]
	};

	public PACKAGES = {
		icon: SectionIconsName.packages(),
		title: 'MENUS.DOCTORS_SETTINGS.MENU.PACKAGES',
		translate: 'MENUS.DOCTORS_SETTINGS.MENU.PACKAGES',
		page: RoutesName.packages()
	};

	public SERVICES = {
		icon: SectionIconsName.services(),
		title: 'MENUS.DOCTORS_SETTINGS.MENU.SERVICES',
		translate: 'MENUS.DOCTORS_SETTINGS.MENU.SERVICES',
		page: RoutesName.services()
	};

	public SPECIALITIES = {
		icon: SectionIconsName.specialities(),
		title:'MENUS.DOCTORS_SETTINGS.MENU.SPECIALITIES',
		translate: 'MENUS.DOCTORS_SETTINGS.MENU.SPECIALITIES',
		page: RoutesName.specialities()
	};

	public APPOINTMENTS = {
		icon: SectionIconsName.appointments(),
		title:'MENUS.DOCTORS_SETTINGS.MENU.APPOINTMENTS',
		translate: 'MENUS.DOCTORS_SETTINGS.MENU.APPOINTMENTS',
		page: RoutesName.appointments()
	};

	public OPERATIONS = {
		icon: SectionIconsName.operations(),
		title:'MENUS.DOCTORS_SETTINGS.MENU.OPERATIONS',
		translate: 'MENUS.DOCTORS_SETTINGS.MENU.OPERATIONS',
		page: RoutesName.operations()
	};

	public menu: any = {
		items: [
		]
	};


	public checkRoutePermissions(){

		this.attachMenuItem([],this.PACKAGES);
		this.attachMenuItem([],this.SPECIALITIES);
		this.attachMenuItem([],this.SERVICES);
		this.attachMenuItem([],this.APPOINTMENTS);
		this.attachMenuItem([],this.OPERATIONS);


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
