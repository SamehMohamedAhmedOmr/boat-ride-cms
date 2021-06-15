import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';


@Injectable({
	providedIn: 'root'
})
export class UsersMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
	}

	private header = {section: 'Users', translate: 'MENUS.USERS.TITLE'};

	private section = {
		title: 'MENUS.USERS.TITLE',
		root: true,
		translate: 'MENUS.USERS.TITLE',
		icon: SectionIconsName.users(),
		submenu: [
		]
	};

	public DOCTORS = {
		icon: SectionIconsName.doctors(),
		title: 'MENUS.USERS.MENU.DOCTORS',
		translate: 'MENUS.USERS.MENU.DOCTORS',
		page: RoutesName.doctors()
	};



	public PATIENTS = {
		icon: SectionIconsName.patients(),
		title:'MENUS.USERS.MENU.PATIENTS',
		translate: 'MENUS.USERS.MENU.PATIENTS',
		page: RoutesName.patients()
	};



	public menu: any = {
		items: [
		]
	};


	public checkRoutePermissions(){

		this.attachMenuItem([],this.DOCTORS);
		this.attachMenuItem([],this.PATIENTS);


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
