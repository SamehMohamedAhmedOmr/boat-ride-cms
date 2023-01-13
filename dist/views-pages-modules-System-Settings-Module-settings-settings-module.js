(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-modules-System-Settings-Module-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"content_name\"\n\t\t\t\t   [icon]=\"'flaticon-add'\"></kt-portlet-header>\n<!--Loader-->\n<div class=\"example-container m-auto\" *ngIf=\"isLoadingResults\">\n\t<div class=\"example-loading-shade mt-5 mb-5\">\n\t\t<mat-spinner diameter=\"50\" *ngIf=\"isLoadingResults\"></mat-spinner>\n\t</div>\n</div>\n\n<!-- Form-->\n<div class=\"example-container\">\n\t<kt-auth-notice></kt-auth-notice>\n\t<div [hidden]=\"isLoadingResults\" class=\"my-4\">\n\n\t\t<div *ngIf=\"is_result\">\n\t\t\t<div class=\"form-div\">\n\n                <form class=\"p-3\" [formGroup]=\"form\" autocomplete=\"off\">\n            \n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <kt-form-input\n                                [form]=\"form\"\n                                [label]=\"'COMMON.whatsapp_number' | translate\"\n                                [form_control_name]=\"'whatsapp_number'\"\n                                [validation_type]=\"'required'\">\n                            </kt-form-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                           \n                        </div>\n                    </div>            \n            \n                </form>\n            \n            </div>\n\n\t\t\t<div class=\"col-12 text-center px-3\">\n\t\t\t\t<button mat-raised-button type=\"submit\" class=\"btn btn-success mx-3\" (click)=\"submitForm()\">\n\t\t\t\t\t{{ 'COMMON.Add_Button' | translate : {name : content_name} }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<kt-portlet class=\"col-12 p-3\">\n\t\t<router-outlet></router-outlet>\n\t</kt-portlet>\n</div>\n");

/***/ }),

/***/ "./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvU3lzdGVtLVNldHRpbmdzLU1vZHVsZS9zZXR0aW5ncy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/services/FormError.service */ "./src/app/core/services/FormError.service.ts");
/* harmony import */ var _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/services/auth-notice.service */ "./src/app/core/services/auth-notice.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/Helpers/error.msg.helper.service */ "./src/app/core/services/Helpers/error.msg.helper.service.ts");
/* harmony import */ var _core_services_ACL_Module_permissions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/services/ACL-Module/permissions.service */ "./src/app/core/services/ACL-Module/permissions.service.ts");
/* harmony import */ var _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/services/Setting/dashboard.service */ "./src/app/core/services/Setting/dashboard.service.ts");
/* harmony import */ var _core_models_Settings_settings_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../core/models/Settings/settings.model */ "./src/app/core/models/Settings/settings.model.ts");












var IndexComponent = /** @class */ (function () {
    function IndexComponent(fb, permissionsService, formErrorService, errorMsgHelperService, cdr, route, router, translateService, authNoticeService, services, helper) {
        this.fb = fb;
        this.permissionsService = permissionsService;
        this.formErrorService = formErrorService;
        this.errorMsgHelperService = errorMsgHelperService;
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.translateService = translateService;
        this.authNoticeService = authNoticeService;
        this.services = services;
        this.helper = helper;
        this.isValidationError = false;
        this.isLoadingResults = true;
        this.navigationSubscription = this.helper.routingSubscribe(this);
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.initialiseComponent();
        this.initializePageName();
    };
    IndexComponent.prototype.ngDoCheck = function () {
        this.initializePageName();
    };
    IndexComponent.prototype.initializePageName = function () {
        this.page_name = this.translateService.instant('Components.Settings.name');
        this.content_name = this.translateService.instant('Components.Settings.single');
    };
    IndexComponent.prototype.initialiseComponent = function () {
        this.isLoadingResults = false;
        this.is_result = false;
        this.get();
        this.cdr.markForCheck();
    };
    /**
         * Initiate the form
         *
         */
    IndexComponent.prototype.initForm = function () {
        var _a, _b;
        this.form = this.fb.group({
            whatsapp_number: [(_b = (_a = this.dashboardModel) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.whatsapp_number, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    // call api to get Banner Data from the server
    IndexComponent.prototype.get = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.services.get().subscribe(function (resp) {
            _this.is_result = true;
            _this.isLoadingResults = false;
            _this.dashboardModel = resp;
            _this.cdr.markForCheck();
            _this.initForm();
        }, function (error) {
            _this.isLoadingResults = false;
            _this.cdr.markForCheck();
        });
    };
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
    IndexComponent.prototype.submitForm = function () {
        var _this = this;
        var controls = this.form.controls;
        /** showing Errors  */
        if (this.form.invalid) {
            var invalid_controls = this.formErrorService.markAsTouched(controls);
            // @ts-ignore
            this.errorMsgHelperService.handleErrors(invalid_controls);
            return;
        }
        var model = new _core_models_Settings_settings_model__WEBPACK_IMPORTED_MODULE_11__["SettingsModel"](null);
        model.whatsapp_number = controls['whatsapp_number'].value;
        // call service to store Banner
        this.isLoadingResults = true;
        this.services.createSettings(model).subscribe(function (resp) {
            _this.form.reset();
            _this.isLoadingResults = false;
            _this.authNoticeService.setNotice(_this.translateService.instant('COMMON.Added_successfully', { name: _this.content_name }), 'success');
            _this.router.navigate(['settings'], { relativeTo: _this.route }).then();
        }, function (handler) {
            _this.authNoticeService.setNotice(_this.helper.showingErrors(handler.error), 'danger');
            _this.isLoadingResults = false;
            _this.isValidationError = true;
        });
    };
    /**
         * On destroy
         */
    IndexComponent.prototype.ngOnDestroy = function () {
        this.isLoadingResults = false;
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
        if (this.isValidationError) {
            this.authNoticeService.setNotice(null);
        }
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_ACL_Module_permissions_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"] },
        { type: _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"] },
        { type: _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_8__["ErrorMsgHelperService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"] },
        { type: _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] }
    ]; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-index',
            template: __importDefault(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./index.component.scss */ "./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_ACL_Module_permissions_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"],
            _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"],
            _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_8__["ErrorMsgHelperService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"],
            _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/System-Settings-Module/settings/settings-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/modules/System-Settings-Module/settings/settings-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.ts");





var routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
        children: [
            {
                path: '',
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
            },
            { path: '**', redirectTo: '', pathMatch: '' },
        ]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvU3lzdGVtLVNldHRpbmdzLU1vZHVsZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-settings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./settings.component.scss */ "./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/System-Settings-Module/settings/settings.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/modules/System-Settings-Module/settings/settings.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/pages/modules/System-Settings-Module/settings/index/index.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/views/shared/shared.module.ts");
/* harmony import */ var _pages_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages.module */ "./src/app/views/pages/pages.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/views/pages/modules/System-Settings-Module/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.component */ "./src/app/views/pages/modules/System-Settings-Module/settings/settings.component.ts");











var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], _settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_9__["SettingsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-modules-System-Settings-Module-settings-settings-module.js.map