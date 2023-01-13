(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/boxes/boxes.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/boxes/boxes.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n\t<div aria-label=\"yacht_count\" class=\"col-md-4\">\n\t\t<div class=\"dbox dbox--color-3\">\n\t\t\t<div class=\"dbox__body\">\n\t\t\t\t\t\t<span class=\"dbox__count\">\n\t\t\t\t\t\t\t{{ dashboardModel?.yacht_count }}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"dbox__title\">\n\t\t\t\t\t\t\t{{ 'STATISTICS.yacht_count' | translate | titlecase }}\n\t\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div aria-label=\"water_sport_count\" class=\"col-md-4\">\n\t\t<div class=\"dbox dbox--color-2\">\n\t\t\t<div class=\"dbox__body\">\n\t\t\t\t\t\t<span class=\"dbox__count\">\n\t\t\t\t\t\t\t{{ dashboardModel?.water_sport_count }}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"dbox__title\">\n\t\t\t\t\t\t\t{{ 'STATISTICS.water_sport_count' | translate | titlecase }}\n\t\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div aria-label=\"yacht_reserved_trips_count\" class=\"col-md-4\">\n\t\t<div class=\"dbox dbox--color-3\">\n\t\t\t<div class=\"dbox__body\">\n\t\t\t\t\t\t<span class=\"dbox__count\">\n\t\t\t\t\t\t\t{{ dashboardModel?.yacht_reserved_trips_count }}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"dbox__title\">\n\t\t\t\t\t\t\t{{ 'STATISTICS.yacht_reserved_trips_count' | translate | titlecase }}\n\t\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n\n<div class=\"row\">\n\n\t<div aria-label=\"yacht_confirmed_trips_count\" class=\"col-md-4\">\n\t\t<div class=\"dbox dbox--color-2\">\n\t\t\t<div class=\"dbox__body\">\n\t\t\t\t\t\t<span class=\"dbox__count\">\n\t\t\t\t\t\t\t{{ dashboardModel?.yacht_confirmed_trips_count }}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"dbox__title\">\n\t\t\t\t\t\t\t{{ 'STATISTICS.yacht_confirmed_trips_count' | translate | titlecase }}\n\t\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div aria-label=\"water_sport_reserved_trips\" class=\"col-md-4\">\n\t\t<div class=\"dbox dbox--color-3\">\n\t\t\t<div class=\"dbox__body\">\n\t\t\t\t\t\t<span class=\"dbox__count\">\n\t\t\t\t\t\t\t{{ dashboardModel?.water_sport_reserved_trips }}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"dbox__title\">\n\t\t\t\t\t\t\t{{ 'STATISTICS.water_sport_reserved_trips' | translate | titlecase }}\n\t\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div aria-label=\"water_sport_confirmed_trips\" class=\"col-md-4\">\n\t\t<div class=\"dbox dbox--color-2\">\n\t\t\t<div class=\"dbox__body\">\n\t\t\t\t\t\t<span class=\"dbox__count\">\n\t\t\t\t\t\t\t{{ dashboardModel?.water_sport_confirmed_trips }}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"dbox__title\">\n\t\t\t\t\t\t\t{{ 'STATISTICS.water_sport_confirmed_trips' | translate | titlecase }}\n\t\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<kt-portlet class=\"col-12 p-3\">\n\n\t\t<kt-index [isLoadingResults]=\"isLoadingResults\" [dashboardModel]=\"dashboardModel\"></kt-index>\n\n\t</kt-portlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/index/index.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/index/index.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"'MENU.DASHBOARD' | translate\">\n\t<section ktPortletTools>\n\t\t<kt-toggle-live [dashboardModel]=\"dashboardModel\"></kt-toggle-live>\n\t</section>\n</kt-portlet-header>\n\n<!--Loader-->\n<div class=\"example-container m-auto\" *ngIf=\"isLoadingResults\">\n\t<div class=\"example-loading-shade mt-5 mb-5\">\n\t\t<mat-spinner diameter=\"50\" *ngIf=\"isLoadingResults\"></mat-spinner>\n\t</div>\n</div>\n\n<div class=\"example-container\">\n\t<div [hidden]=\"isLoadingResults\" class=\"mt-3\">\n\t\t<kt-boxes [dashboardModel]=\"dashboardModel\"></kt-boxes>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/toggle-live/toggle-live.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/toggle-live/toggle-live.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-slide-toggle *ngIf=\"settingModel\"\n\t\t\t\t  (change)=\"toggleLive()\"\n\t\t\t\t  [(ngModel)]=\"settingModel.enable_coming_soon\"\n\t\t\t\t  [checked]=\"dashboardModel?.settings?.enable_coming_soon\">\n\t{{ 'COMMON.live' | translate }}\n</mat-slide-toggle>\n");

/***/ }),

/***/ "./src/app/views/pages/dashboard/boxes/boxes.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/dashboard/boxes/boxes.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);\n  border-radius: 5px; }\n\n.dashboard-box {\n  width: 100%;\n  display: flex;\n  text-decoration: none;\n  justify-content: center;\n  color: #fff !important;\n  font-size: 24px; }\n\n.dashboard-box:hover {\n  text-decoration: none; }\n\n.dbox {\n  position: relative;\n  background: #ff5641;\n  background: linear-gradient(to bottom, #ff5641 0%, #fd3261 100%);\n  border-radius: 4px;\n  text-align: center;\n  margin: 0 0 20px; }\n\n.dbox__body {\n  padding: 50px 20px; }\n\n.dbox__count {\n  display: block;\n  font-size: 30px;\n  color: #FFF;\n  font-weight: 300; }\n\n.dbox__title {\n  font-size: 16px;\n  color: #FFF;\n  color: rgba(255, 255, 255, 0.81); }\n\n.dbox__action {\n  position: absolute;\n  transform: translate(50%);\n  left: 45%;\n  top: -11%; }\n\n.dbox__action__btn {\n  border: none;\n  background: #FFF;\n  border-radius: 19px;\n  padding: 7px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 11px;\n  letter-spacing: .5px;\n  color: #003e85;\n  box-shadow: 0 3px 5px #d4d4d4; }\n\n.dbox--color-2 {\n  background: #EBC56B;\n  background: linear-gradient(to bottom, #EBC56B 1%, #f85648 99%); }\n\n.dbox--color-3 {\n  background: #C6C0DD;\n  background: linear-gradient(to bottom, #C6C0DD 0%, #6c53dc 100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211c3RhZmFfbWFtZG91aC9hbmd1bGFyX3dvcmtzcGFjZS9ib2F0LXJpZGUtY21zL3NyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2JveGVzL2JveGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbU9BQW1PO0VBQ25PLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUdoQjtFQUNDLHFCQUFxQixFQUFBOztBQUl0QjtFQUNDLGtCQUFrQjtFQUNsQixtQkFBNEI7RUFHNUIsZ0VBQTBGO0VBQzFGLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBSWpCO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQ0FBZ0MsRUFBQTs7QUFHakM7RUFDQyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxTQUFTLEVBQUE7O0FBR1Y7RUFDQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCw2QkFBNkIsRUFBQTs7QUFJOUI7RUFDQyxtQkFBbUI7RUFHbkIsK0RBQTRFLEVBQUE7O0FBSzdFO0VBQ0MsbUJBQW1CO0VBR25CLGdFQUE4RSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2JveGVzL2JveGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYm94IHtcblx0Ym94LXNoYWRvdzogMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSwgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSwgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRhc2hib2FyZC1ib3gge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAyNHB4O1xufVxuXG4uZGFzaGJvYXJkLWJveDpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uZGJveCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZDogcmdiKDI1NSwgODYsIDY1KTtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgODYsIDY1LCAxKSAwJSwgcmdiYSgyNTMsIDUwLCA5NywgMSkgMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDg2LCA2NSwgMSkgMCUsIHJnYmEoMjUzLCA1MCwgOTcsIDEpIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgODYsIDY1LCAxKSAwJSwgcmdiYSgyNTMsIDUwLCA5NywgMSkgMTAwJSk7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDAgMCAyMHB4O1xufVxuXG5cbi5kYm94X19ib2R5IHtcblx0cGFkZGluZzogNTBweCAyMHB4O1xufVxuXG4uZGJveF9fY291bnQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRjb2xvcjogI0ZGRjtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmRib3hfX3RpdGxlIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI0ZGRjtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MSk7XG59XG5cbi5kYm94X19hY3Rpb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSk7XG5cdGxlZnQ6IDQ1JTtcblx0dG9wOiAtMTElO1xufVxuXG4uZGJveF9fYWN0aW9uX19idG4ge1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQ6ICNGRkY7XG5cdGJvcmRlci1yYWRpdXM6IDE5cHg7XG5cdHBhZGRpbmc6IDdweCAxNnB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDExcHg7XG5cdGxldHRlci1zcGFjaW5nOiAuNXB4O1xuXHRjb2xvcjogIzAwM2U4NTtcblx0Ym94LXNoYWRvdzogMCAzcHggNXB4ICNkNGQ0ZDQ7XG59XG5cblxuLmRib3gtLWNvbG9yLTIge1xuXHRiYWNrZ3JvdW5kOiAjRUJDNTZCO1xuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNFQkM1NkIgMSUsIHJnYmEoMjQ4LCA4NiwgNzIsIDEpIDk5JSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0VCQzU2QiAxJSwgcmdiYSgyNDgsIDg2LCA3MiwgMSkgOTklKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0VCQzU2QiAxJSwgcmdiYSgyNDgsIDg2LCA3MiwgMSkgOTklKTtcbn1cblxuXG5cbi5kYm94LS1jb2xvci0zIHtcblx0YmFja2dyb3VuZDogI0M2QzBERDtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjQzZDMEREIDAlLCByZ2JhKDEwOCwgODMsIDIyMCwgMSkgMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0M2QzBERCAwJSwgcmdiYSgxMDgsIDgzLCAyMjAsIDEpIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQzZDMEREIDAlLCByZ2JhKDEwOCwgODMsIDIyMCwgMSkgMTAwJSk7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/boxes/boxes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/boxes/boxes.component.ts ***!
  \****************************************************************/
/*! exports provided: BoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesComponent", function() { return BoxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/models/Settings/dashboard.model */ "./src/app/core/models/Settings/dashboard.model.ts");



var BoxesComponent = /** @class */ (function () {
    function BoxesComponent() {
    }
    BoxesComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _core_models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardModel"])
    ], BoxesComponent.prototype, "dashboardModel", void 0);
    BoxesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-boxes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./boxes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/boxes/boxes.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./boxes.component.scss */ "./src/app/views/pages/dashboard/boxes/boxes.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BoxesComponent);
    return BoxesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Global/routes.name */ "./src/app/core/Global/routes.name.ts");
/* harmony import */ var _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/Setting/dashboard.service */ "./src/app/core/services/Setting/dashboard.service.ts");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(translate, router, helper, services, cdr) {
        this.translate = translate;
        this.router = router;
        this.helper = helper;
        this.services = services;
        this.cdr = cdr;
        this.isResults = false;
        this.isLoadingResults = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Number';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Color Value';
        this.timeline = true;
        // colors
        this.colorScheme = {
            domain: [
                '#e74c3c',
                '#27ae60',
                '#f1c40f',
                '#8e44ad'
            ]
        };
        this.orders_counts = [];
        this.orders_prices = [];
        this.navigationSubscription = this.helper.routingSubscribe(this);
    }
    // onInit get Data from api
    DashboardComponent.prototype.ngOnInit = function () {
        this.base_url = '/' + _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_5__["RoutesName"].cms() + '/';
        this.initialiseComponent();
    };
    DashboardComponent.prototype.initialiseComponent = function () {
        this.get();
    };
    // call api to get Banner Data from the server
    DashboardComponent.prototype.get = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.services.get().subscribe(function (resp) {
            _this.isResults = true;
            _this.isLoadingResults = false;
            _this.dashboardModel = resp;
            _this.cdr.markForCheck();
        }, function (error) {
            _this.isLoadingResults = false;
            _this.cdr.markForCheck();
        });
    };
    DashboardComponent.prototype.onSelect = function (event) {
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
        { type: _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
            _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/views/shared/shared.module.ts");
/* harmony import */ var _pages_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages.module */ "./src/app/views/pages/pages.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/pages/dashboard/index/index.component.ts");
/* harmony import */ var _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./boxes/boxes.component */ "./src/app/views/pages/dashboard/boxes/boxes.component.ts");
/* harmony import */ var _toggle_live_toggle_live_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toggle-live/toggle-live.component */ "./src/app/views/pages/dashboard/toggle-live/toggle-live.component.ts");

// Angular



// Core Module









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_4__["PartialsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
                    },
                ]),
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"],
            ],
            providers: [],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_11__["BoxesComponent"],
                _toggle_live_toggle_live_component__WEBPACK_IMPORTED_MODULE_12__["ToggleLiveComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/index/index.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/dashboard/index/index.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/index/index.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/index/index.component.ts ***!
  \****************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/models/Settings/dashboard.model */ "./src/app/core/models/Settings/dashboard.model.ts");



var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.isLoadingResults = false;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], IndexComponent.prototype, "isLoadingResults", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _core_models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardModel"])
    ], IndexComponent.prototype, "dashboardModel", void 0);
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-index',
            template: __importDefault(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/index/index.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./index.component.scss */ "./src/app/views/pages/dashboard/index/index.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/toggle-live/toggle-live.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/toggle-live/toggle-live.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC90b2dnbGUtbGl2ZS90b2dnbGUtbGl2ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/toggle-live/toggle-live.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/toggle-live/toggle-live.component.ts ***!
  \****************************************************************************/
/*! exports provided: ToggleLiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLiveComponent", function() { return ToggleLiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/models/Settings/dashboard.model */ "./src/app/core/models/Settings/dashboard.model.ts");
/* harmony import */ var _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/Setting/dashboard.service */ "./src/app/core/services/Setting/dashboard.service.ts");
/* harmony import */ var _core_models_Settings_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/models/Settings/settings.model */ "./src/app/core/models/Settings/settings.model.ts");





var ToggleLiveComponent = /** @class */ (function () {
    function ToggleLiveComponent(service) {
        this.service = service;
    }
    ToggleLiveComponent.prototype.ngOnInit = function () {
        var _a, _b;
        this.settingModel = new _core_models_Settings_settings_model__WEBPACK_IMPORTED_MODULE_4__["SettingsModel"](null);
        this.settingModel.enable_coming_soon = (_b = (_a = this.dashboardModel) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.enable_coming_soon;
    };
    ToggleLiveComponent.prototype.toggleLive = function () {
        var _this = this;
        this.service.createSettings(this.settingModel).subscribe(function (resp) {
            _this.dashboardModel.settings.enable_coming_soon = _this.settingModel.enable_coming_soon;
        }, function (error) {
        });
    };
    ToggleLiveComponent.ctorParameters = function () { return [
        { type: _core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _core_models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardModel"])
    ], ToggleLiveComponent.prototype, "dashboardModel", void 0);
    ToggleLiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-toggle-live',
            template: __importDefault(__webpack_require__(/*! raw-loader!./toggle-live.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/toggle-live/toggle-live.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./toggle-live.component.scss */ "./src/app/views/pages/dashboard/toggle-live/toggle-live.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_Setting_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], ToggleLiveComponent);
    return ToggleLiveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-dashboard-dashboard-module.js.map