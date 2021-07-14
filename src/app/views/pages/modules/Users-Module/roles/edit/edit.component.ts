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
  selector: 'kt-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, DoCheck, OnDestroy, InitializeComponentInterface {

	page_name: string;
	content_name: string;

	navigationSubscription;
	isValidationError:boolean = false;

	isLoadingResults: boolean = true;
	id = null;
	form: FormGroup;

	is_result: any = false;


	permissions: PermissionsModel [];
	SelectedPermissions:[] = [];

	constructor(private fb: FormBuilder ,
				private service : RolesService,
				private formErrorService: FormErrorService,
				private route: ActivatedRoute,
				private router:Router,
				public translateService: TranslateService,
				private cdr: ChangeDetectorRef,
				public  permissionsService: PermissionsService,
				private authNoticeService: AuthNoticeService,
				private helper: HelperService) {
		this.navigationSubscription = this.helper.routingSubscribe(this);
	}

	ngOnInit() {
		this.initialiseComponent();
		this.initializePageName();
	}

	initialiseComponent() {
		this.isLoadingResults = true;
		this.getPermissions();
	}

	ngDoCheck(): void {
		this.initializePageName();
	}

	initializePageName() {
		this.page_name = this.translateService.instant('Components.ROLES.name');
		this.content_name = this.translateService.instant('Components.ROLES.single');
	}


	/**
	 * get Collection Data
	 *
	 */
	private get() {
		this.isLoadingResults = true;
		this.route.params.subscribe((resp) => {
			this.id = resp['id'];
			// call api to get banner
			this.service.get(this.id).subscribe(
				(data) => {
					this.initializeForm(data);

					this.SelectedPermissions = data.permissions;
				} , error => {
					this.authNoticeService.setNotice('Role Not Found or not exists anymore', 'danger');
					this.isLoadingResults = false;
					this.isValidationError = true;
					this.cdr.markForCheck();
				}
			)
		});
	}

	private getPermissions() {

		this.permissionsService.list().subscribe(
			(resp) => {
				this.permissions = resp;
				this.is_result = true;
				this.isLoadingResults = false;
				this.cdr.markForCheck();
				this.get();

			}, error => {
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			});
	}


	private initializeForm (data) {
		this.form = this.fb.group({
			name:			[data.name, Validators.required]  ,
			permissions:       [''],
			searchPermissions: [''],

		});
		this.isLoadingResults = false;
		this.cdr.markForCheck();
	}

	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to validators name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		return this.formErrorService.isControlHasError(this.form,controlName,validationType);

	}

	isLanguageHasError(index , controlName: string, validationType: string): boolean {
		return this.formErrorService.isLanguageHasError(this.form, index, controlName, validationType)
	}


	updateForm () {
		const controls = this.form.controls;
		/** showing Errors  */
		if (this.form.invalid) {
			return this.formErrorService.markAsTouched(controls);
		}



		let permissionIds:[] = [];

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
		this.service.update(this.id , rolesModel).subscribe(resp => {
			this.isLoadingResults = false;
			this.authNoticeService.setNotice('Role Updated Successfully', 'success');
			this.cdr.markForCheck();
			this.router.navigate(['../'], { relativeTo: this.route }).then();

		} , handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
			this.isLoadingResults = false;
			this.isValidationError = true;
			this.cdr.markForCheck();
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



	protected pushPermissions(item) {
		// @ts-ignore
		let find = this.SelectedPermissions.find(element => element.id == item.id);
		if (!find){
			// @ts-ignore
			this.SelectedPermissions.push(item);
		}
		else{
			// @ts-ignore
			this.SelectedPermissions = this.SelectedPermissions.filter(element => element.id != item.id);
		}
	}

	protected checkSelected(item) {
		// @ts-ignore
		return this.SelectedPermissions.find(element => element.id == item.id);

	}

	protected checkSelectAll(){
		return this.SelectedPermissions.length == this.permissions.length;
	}

	protected selectAll(){
		let length = this.SelectedPermissions.length;
		if (length == this.permissions.length){
			this.SelectedPermissions = [];
		}
		else{
		//	this.SelectedPermissions = this.permissions;
		}
	}

}
