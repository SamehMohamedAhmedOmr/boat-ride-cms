import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {IndexInterface} from '../../../../../shared/Base-Interface/Index.Interface';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {PaginateParams} from '../../../../../../core/models/paginateParams.interface';
import {GlobalConfig} from '../../../../../../core/Global/global.config';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {RoutesName} from '../../../../../../core/Global/routes.name';
import {SectionIconsName} from '../../../../../../core/Global/section.icons.name';
import {MatTableDataSource} from '@angular/material';
import {WaterSportTripService} from '../../../../../../core/services/Water-Sport-Module/reservations/water.sport.trip.service';
import {SystemPermissionsHelperService} from '../../../../../../core/services/Helpers/system.permissions.helper.service';
import {PermissionWaterSportConfig} from '../../../../../../core/Global/permissions/permission.water.sport.config';

@Component({
	selector: 'kt-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, DoCheck, OnDestroy, IndexInterface, InitializeComponentInterface {

	page_name: string;
	content_name: string;
	add_route: string;

	navigationSubscription;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

	//Data table variables
	dataSource;
	displayedColumns: string[] = [
		'id',
		'booking_number',
		'water_sport',
		'customer',
		'trip_date_time',
		'total_price',
		'status',
		'options'
	];
	isLoadingResults: boolean = true;
	// pagination variables
	resultsLength = 0;
	pageIndex = 0;
	//filter variables
	headerParams: PaginateParams = {
		active: null,
		per_page: GlobalConfig.pagination_per_page,
		search_key: null,
		sort_key: null,
		sort_order: 'desc',
		next_page_index: 0,
	};

	can_manage:boolean;
	can_delete:boolean;

	constructor(private cdr: ChangeDetectorRef,
				public service: WaterSportTripService,
				private systemPermissionsHelperService:SystemPermissionsHelperService,
				private authNoticeService: AuthNoticeService,
				public translateService: TranslateService,
				private router: Router,
				private helper: HelperService) {
		this.navigationSubscription = this.helper.routingSubscribe(this);
	}

	// onInit get Data from api
	ngOnInit() {
		this.initialiseComponent();
		this.add_route = RoutesName.add();
		this.initializePageName();
	}

	ngDoCheck(): void {
		this.initializePageName();
	}

	initializePageName() {
		let permissions:PermissionWaterSportConfig = new PermissionWaterSportConfig();

		this.page_name = this.translateService.instant('Components.WATER_SPORTS_RESERVATION.name');
		this.content_name = this.translateService.instant('Components.WATER_SPORTS_RESERVATION.single');

		this.can_manage = this.systemPermissionsHelperService.checkPermissions([permissions.MANAGE_WATER_SPORT_RESERVATION]);
		this.can_delete = this.systemPermissionsHelperService.checkPermissions([permissions.DELETE_WATER_SPORT_RESERVATION])
	}

	initialiseComponent() {
		this.get(this.headerParams);
	}

	// call api to get Banner Data from the server
	get(headerParams, extra_filters = {}) {
		this.headerParams = headerParams;
		this.isLoadingResults = true;
		let data = this.service.list(headerParams, 1, extra_filters).subscribe(
			(resp) => {
				this.dataSource = new MatTableDataSource(resp);
				this.dataSource.sort = this.sort;
				this.isLoadingResults = false;
				this.resultsLength = (resp['pagination'] ? resp['pagination'].total : 0);
				this.cdr.markForCheck();
			}, error => {
				this.dataSource = new MatTableDataSource([]);
				this.dataSource.sort = this.sort;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			});
	}

	// pagination data tables
	public pagination(event?: PageEvent) {
		this.pageIndex = event.pageIndex;
		this.headerParams.next_page_index = this.pageIndex;
		this.get(this.headerParams);
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.isLoadingResults = false;

		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}

	pageIcon() {
		return SectionIconsName.services();
	}

	displayContent(text) {
		return (text.length > 70) ? text.substring(0, 70) + ' ......' : text;
	}

	filterEvent($event) {
		this.get(this.headerParams, $event);
	}

	sendVoucher(booking_number){
		this.service.sendVoucher(booking_number).subscribe(res => {
			this.authNoticeService.setNotice(this.translateService.instant('COMMON.voucher_email_success'), 'success');
		}, handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
		});
	}
}
