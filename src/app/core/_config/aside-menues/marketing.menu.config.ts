import {Injectable} from '@angular/core';
import {SystemPermissionsHelperService} from '../../services/Helpers/system.permissions.helper.service';
import {SectionIconsName} from '../../Global/section.icons.name';
import {RoutesName} from '../../Global/routes.name';


@Injectable({
	providedIn: 'root'
})
export class MarketingMenuConfig {

	systemPermissionsHelperService: SystemPermissionsHelperService;

	constructor() {
		this.systemPermissionsHelperService = new SystemPermissionsHelperService();
	}

	private header = {section: 'MARKETING', translate: 'MENUS.MARKETING.TITLE'};

	private section = {
		title: 'MENUS.MARKETING.TITLE',
		root: true,
		translate: 'MENUS.MARKETING.TITLE',
		icon: SectionIconsName.marketing(),
		submenu: [
		]
	};

	public BANNERS = {
		icon: SectionIconsName.banners(),
		title: 'MENUS.MARKETING.MENU.BANNERS',
		translate: 'MENUS.MARKETING.MENU.BANNERS',
		page: RoutesName.banners()
	};

	public COLLECTIONS = {
		icon: SectionIconsName.collections(),
		title:'MENUS.MARKETING.MENU.COLLECTIONS',
		translate: 'MENUS.MARKETING.MENU.COLLECTIONS',
		page: RoutesName.collections()
	};



	public menu: any = {
		items: [
		]
	};


	public checkRoutePermissions(){

		this.attachMenuItem([],this.BANNERS);
		this.attachMenuItem([],this.COLLECTIONS);


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
