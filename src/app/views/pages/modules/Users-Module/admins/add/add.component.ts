import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {AdminsService} from '../../../../../../core/services/User-Module/admins.service';
import {CmsUsersModel} from '../../../../../../core/models/User-Module/cms.users.model';
import {ErrorMsgHelperService} from '../../../../../../core/services/Helpers/error.msg.helper.service';
import {PermissionsModel} from '../../../../../../core/models/ACL-Module/permissions.model';
import {PermissionsService} from '../../../../../../core/services/ACL-Module/permissions.service';


@Component({
	selector: 'kt-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, DoCheck, OnDestroy, InitializeComponentInterface {

	page_name: string;
	content_name: string;

	navigationSubscription;
	isValidationError: boolean = false;

	isLoadingResults: any = true;
	form: FormGroup;
	is_result:boolean;
	permissions:PermissionsModel[];

	constructor(private fb: FormBuilder,
				private service: AdminsService,
				private permissionsService:PermissionsService,
				private formErrorService: FormErrorService,
				private errorMsgHelperService: ErrorMsgHelperService,
				private cdr: ChangeDetectorRef,
				private route: ActivatedRoute,
				private router: Router,
				public translateService: TranslateService,
				private authNoticeService: AuthNoticeService,
				private helper: HelperService) {
		this.navigationSubscription = this.helper.routingSubscribe(this);
	}



	ngOnInit() {
		this.initialiseComponent();
		this.initializePageName();
	}

	ngDoCheck(): void {
		this.initializePageName();
	}

	initializePageName(){
		this.page_name = this.translateService.instant('Components.CMS_USERS.name');
		this.content_name = this.translateService.instant('Components.CMS_USERS.single');
	}

	initialiseComponent() {
		this.getPermissions();
		this.cdr.markForCheck();
		this.initForm();
	}


	getPermissions(){
		this.permissionsService.list().subscribe(
			(data) => {
				this.permissions = data;
				this.isLoadingResults = false;
				this.is_result = true;
				this.cdr.markForCheck();
			}, error => {
				this.authNoticeService.setNotice(this.translateService.instant('COMMON.Item_not_found',
					{name: this.content_name}),
					'danger');
				this.isLoadingResults = false;
				this.isValidationError = true;
				this.cdr.markForCheck();
			}
		);
	}

	/**
	 * Initiate the form
	 *
	 */
	private initForm() {
		this.form = this.fb.group({
			name: ['', Validators.required] ,
			email: ['', Validators.required] ,
			password: ['', Validators.required] ,
			permissions: ['', Validators.required] ,
			is_active: ['1', Validators.required] ,
		});
	}



	clearForm() {
		this.form.reset();
	}

	submitForm () {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			let invalid_controls = this.formErrorService.markAsTouched(controls);
			// @ts-ignore
			this.errorMsgHelperService.handleErrors(invalid_controls);
			return;
		}

		const model = new CmsUsersModel(null);

		model.name = controls['name'].value;
		model.email = controls['email'].value;
		model.password = controls['password'].value;
		model.is_active = controls['is_active'].value;
		model.permissions = controls['permissions'].value;
		// @ts-ignore
		model.roles = [1];

		// call service to store Banner
		this.isLoadingResults = true;
		this.service.create(model).subscribe(resp => {
			this.form.reset();
			this.isLoadingResults = false;
			this.authNoticeService.setNotice(this.translateService.instant('COMMON.Added_successfully',
				{name : this.content_name}),
				'success');
			this.router.navigate(['../'], { relativeTo: this.route }).then();
		} , handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
			this.isLoadingResults = false;
			this.isValidationError = true;
		});
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.isLoadingResults = false;

		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}

		if (this.isValidationError){
			this.authNoticeService.setNotice(null);
		}

	}

}
