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
import {DashboardService} from '../../../../../../core/services/Setting/dashboard.service';
import {DashboardModel} from '../../../../../../core/models/Settings/dashboard.model';
import {SettingsModel} from '../../../../../../core/models/Settings/settings.model';

@Component({
  selector: 'kt-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, DoCheck, OnDestroy, InitializeComponentInterface {
  page_name: string;
	content_name: string;

	navigationSubscription;
	isValidationError: boolean = false;

	isLoadingResults: any = true;
	form: FormGroup;
	is_result:boolean;
  dashboardModel: DashboardModel;

	permissions:PermissionsModel[];
  constructor(private fb: FormBuilder,
    private permissionsService:PermissionsService,
    private formErrorService: FormErrorService,
    private errorMsgHelperService: ErrorMsgHelperService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    public translateService: TranslateService,
    private authNoticeService: AuthNoticeService,
    private services: DashboardService,
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
  this.page_name = this.translateService.instant('Components.Settings.name');
  this.content_name = this.translateService.instant('Components.Settings.single');
}

initialiseComponent() {
  this.isLoadingResults = false;
	this.is_result = false;
  this.get();
  this.cdr.markForCheck();
}

/**
	 * Initiate the form
	 *
	 */
private initForm() {
  this.form = this.fb.group({
    whatsapp_number: [this.dashboardModel?.settings?.whatsapp_number, Validators.required] ,
    home_section: [this.dashboardModel?.settings?.home_section] ,
  });
}

// call api to get Banner Data from the server
get() {
  this.isLoadingResults = true;
  this.services.get().subscribe(
    (resp) => {
      this.is_result = true;
      this.isLoadingResults = false;
      this.dashboardModel = resp;
      this.cdr.markForCheck();
      this.initForm();
    }, error => {
      this.isLoadingResults = false;
      this.cdr.markForCheck();
    });
}


// getPermissions(){
//   this.permissionsService.list().subscribe(
//     (data) => {
//       this.permissions = data;
//       this.isLoadingResults = false;
//       this.is_result = true;
//       this.cdr.markForCheck();
//     }, error => {
//       this.authNoticeService.setNotice(this.translateService.instant('COMMON.Item_not_found',
//         {name: this.content_name}),
//         'danger');
//       this.isLoadingResults = false;
//       this.isValidationError = true;
//       this.cdr.markForCheck();
//     }
//   );
// }

submitForm () {
  const controls = this.form.controls;
  /** showing Errors  */
  if (this.form.invalid) {
    let invalid_controls = this.formErrorService.markAsTouched(controls);
    // @ts-ignore
    this.errorMsgHelperService.handleErrors(invalid_controls);
    return;
  }

  const model = new SettingsModel(null);

  model.whatsapp_number = controls['whatsapp_number'].value;
  model.home_section = controls['home_section'].value;

  // call service to store Banner
  this.isLoadingResults = true;
  this.services.createSettings(model).subscribe(resp => {
    this.form.reset();
    this.isLoadingResults = false;
    this.authNoticeService.setNotice(this.translateService.instant('COMMON.Added_successfully',
      {name : this.content_name}),
      'success');
    this.router.navigate(['settings'], { relativeTo: this.route }).then();
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
