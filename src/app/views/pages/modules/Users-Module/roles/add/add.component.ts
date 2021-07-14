import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {InitializeComponentInterface} from '../../../../../shared/Base-Interface/Initialize.Component.Interface';
import {RolesService} from '../../../../../../core/services/ACL-Module/roles.service';
import {FormErrorService} from '../../../../../../core/services/FormError.service';
import {PermissionsService} from '../../../../../../core/services/ACL-Module/permissions.service';
import {AuthNoticeService} from '../../../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../../../core/services/helper.service';
import {RolesModel} from '../../../../../../core/models/ACL-Module/roles.model';
import {TranslateService} from '@ngx-translate/core';
import {PermissionsModel} from '../../../../../../core/models/ACL-Module/permissions.model';


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
	imgURL: any = null;

	is_result: any = false;


	permissions: PermissionsModel[];
	SelectedPermissions: [] = [];

	constructor(private fb: FormBuilder,
				private service: RolesService,
				private formErrorService: FormErrorService,
				private authNoticeService: AuthNoticeService,
				private route: ActivatedRoute,
				public translateService: TranslateService,
				private router: Router,
				public  permissionsService: PermissionsService,
				private cdr: ChangeDetectorRef,
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

	initializePageName() {
		this.page_name = this.translateService.instant('Components.ROLES.name');
		this.content_name = this.translateService.instant('Components.ROLES.single');
	}

	initialiseComponent() {
		this.isLoadingResults = false;
		this.getPermissions();
	}

	/**
	 * Initiate the form
	 *
	 */
	private initForm() {
		this.form = this.fb.group({
			name: ['', Validators.required],
		});
	}


	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to validators name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		return this.formErrorService.isControlHasError(this.form, controlName, validationType);
	}

	isLanguageHasError(index, controlName: string, validationType: string): boolean {
		return this.formErrorService.isLanguageHasError(this.form, index, controlName, validationType);
	}


	clearForm() {
		this.form.reset();
		this.initForm();
	}

	private getPermissions() {

		this.permissionsService.list().subscribe(
			(resp) => {
				this.permissions = resp;
				this.is_result = true;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
				this.initForm();

			}, error => {
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			});
	}


	submitForm() {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			return this.formErrorService.markAsTouched(controls);
		}

		let permissionIds: [] = [];

		this.SelectedPermissions.forEach(((value, index) => {
			// @ts-ignore
			permissionIds.push(value.id);
		}));

		let rolesModel = new RolesModel(
			null,
			controls['name'].value,
			permissionIds,
			null
		);

		// call service to store Banner
		this.isLoadingResults = true;
		this.service.create(rolesModel).subscribe(resp => {
			this.clearForm();
			this.isLoadingResults = false;
			this.authNoticeService.setNotice('Role Added Successfully', 'success');
			this.router.navigate(['../'], {relativeTo: this.route}).then();
		}, handler => {
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

		if (this.isValidationError) {
			this.authNoticeService.setNotice(null);
		}
	}


	protected pushPermissions(item) {
		// @ts-ignore
		let find = this.SelectedPermissions.find(element => element.id == item.id);
		if (!find) {
			// @ts-ignore
			this.SelectedPermissions.push(item);
		} else {
			// @ts-ignore
			this.SelectedPermissions = this.SelectedPermissions.filter(element => element.id != item.id);
		}
	}

	protected checkSelected(item) {
		// @ts-ignore
		return this.SelectedPermissions.find(element => element.id == item.id);

	}

	protected checkSelectAll() {
		return this.SelectedPermissions.length == this.permissions.length;
	}

	protected selectAll() {
		let length = this.SelectedPermissions.length;
		if (length == this.permissions.length) {
			this.SelectedPermissions = [];
		} else {
		//	this.SelectedPermissions = this.permissions;
		}
	}

}
