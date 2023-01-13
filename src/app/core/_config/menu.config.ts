import {ShortAccessMenuConfig} from './header-menues/short.access.menu.config';
import {AddNewMenuConfig} from './header-menues/add.new.menu.config';
import {UsersMenuConfig} from './aside-menues/users.menu.config';
import {MarketingMenuConfig} from './aside-menues/marketing.menu.config';
import {YachtMenuConfig} from './aside-menues/yacht.menu.config';
import {WaterSportMenuConfig} from './aside-menues/water.sport.menu.config';


export class MenuConfig {

	// Aside Menu
	usersMenuConfig:UsersMenuConfig;
	marketingMenuConfig:MarketingMenuConfig;
	yachtMenuConfig:YachtMenuConfig;
	waterSportMenuConfig:WaterSportMenuConfig;

	// Header Menu
	shortAccessMenuConfig: ShortAccessMenuConfig;
	addNewMenuConfig:AddNewMenuConfig;

	constructor() {
		this.usersMenuConfig = new UsersMenuConfig();
		this.marketingMenuConfig = new MarketingMenuConfig();
		this.yachtMenuConfig = new YachtMenuConfig();
		this.waterSportMenuConfig = new WaterSportMenuConfig();

		this.shortAccessMenuConfig = new ShortAccessMenuConfig();
		this.addNewMenuConfig = new AddNewMenuConfig();
	}

	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboards',
					root: true,
					alignment: 'left',
					page: '/cms/dashboard',
					translate: 'MENU.DASHBOARD',
				},

			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/cms/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: 'Settings',
					root: true,
					icon: 'flaticon-cogwheel-2',
					page: '/cms/settings',
					translate: 'MENU.SETTINGS',
					bullet: 'dot',
				},
			]
		},
	};

	public get configs(): any {
		this.attachHeaderMenuItems();
		this.attachAsideMenuItems();
		return this.defaults;
	}

	public attachAsideMenuItems(){

		// Yacht Settings Config
		let yachtMenuConfig = this.yachtMenuConfig.configs;
		this.attachAsideMenu(yachtMenuConfig);

		// Water-Sport Settings Config
		let waterSportMenuConfig = this.waterSportMenuConfig.configs;
		this.attachAsideMenu(waterSportMenuConfig);


		// Marketing Config
		let marketing_items = this.marketingMenuConfig.configs;
		this.attachAsideMenu(marketing_items);

		// Users Config
		let users_items = this.usersMenuConfig.configs;
		this.attachAsideMenu(users_items);
	}

	public attachHeaderMenuItems() {

		// Short Access Config
		let short_access_items = this.shortAccessMenuConfig.configs;
		this.attachHeaderMenu(short_access_items);

		// Short Access Config
		let add_menu_items = this.addNewMenuConfig.configs;
		this.attachHeaderMenu(add_menu_items);

	}

	public attachAsideMenu(items){
		items.forEach((item)=>{
			this.defaults.aside.items.push(
				item
			);
		});
	}

	public attachHeaderMenu(items){
		items.forEach((item)=>{
			this.defaults.header.items.push(
				item
			);
		});
	}


}
