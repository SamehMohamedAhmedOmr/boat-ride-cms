(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-modules-Marketing-Module-banners-banners-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"'COMMON.Add_Button' | translate : {name : content_name}\"\n\t\t\t\t   [icon]=\"'flaticon-add'\"></kt-portlet-header>\n<!--Loader-->\n<div class=\"example-container m-auto\" *ngIf=\"isLoadingResults\">\n\t<div class=\"example-loading-shade mt-5 mb-5\">\n\t\t<mat-spinner diameter=\"50\" *ngIf=\"isLoadingResults\"></mat-spinner>\n\t</div>\n</div>\n\n<!-- Form-->\n<div class=\"example-container\">\n\t<kt-auth-notice></kt-auth-notice>\n\t<div [hidden]=\"isLoadingResults\" class=\"my-4\">\n\n\t\t<div *ngIf=\"is_result\">\n\t\t\t<kt-form [form]=\"form\"></kt-form>\n\n\t\t\t<mat-divider class=\"my-5\"></mat-divider>\n\n\t\t\t<kt-images (image_event)=\"handleSelectedImage($event)\"></kt-images>\n\n\t\t\t<div class=\"col-12 text-center px-3\">\n\t\t\t\t<button mat-raised-button type=\"submit\" class=\"btn btn-success mx-3\" (click)=\"submitForm()\">\n\t\t\t\t\t{{ 'COMMON.Add_Button' | translate : {name : content_name} }}\n\t\t\t\t</button>\n\t\t\t\t<button mat-raised-button class=\"btn btn-outline-info mx-3\" (click)=\"clearForm()\">\n\t\t\t\t\t{{ 'COMMON.clear_form' | translate }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/banners.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/banners.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n\t<kt-portlet class=\"col-12 p-3\">\n\t\t<router-outlet></router-outlet>\n\t</kt-portlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"'COMMON.Edit_Button' | translate : {name : content_name}\"\n\t\t\t\t   [icon]=\"'far fa-edit'\"></kt-portlet-header>\n<!--Loader-->\n<div class=\"example-container m-auto\" *ngIf=\"isLoadingResults\">\n\t<div class=\"example-loading-shade mt-5 mb-5\">\n\t\t<mat-spinner diameter=\"50\" *ngIf=\"isLoadingResults\"></mat-spinner>\n\t</div>\n</div>\n\n<!-- Form-->\n<div class=\"example-container\">\n\t<div class=\"my-4\">\n\t\t<kt-auth-notice></kt-auth-notice>\n\t</div>\n\t<div *ngIf=\"!isLoadingResults\">\n\n\t\t<div *ngIf=\"is_result\">\n\t\t\t<kt-form [form]=\"form\"></kt-form>\n\n\t\t\t<mat-divider class=\"my-5\"></mat-divider>\n\n\t\t\t<kt-images (image_event)=\"handleSelectedImage($event)\"\n\t\t\t\t\t   [selected_images]=\"current_images\"></kt-images>\n\n\t\t\t<div class=\"col-12 text-center px-3\">\n\t\t\t\t<button mat-raised-button type=\"submit\" class=\"btn btn-success mx-3\" (click)=\"updateForm()\">\n\t\t\t\t\t{{ 'COMMON.Edit_Button' | translate : {name : content_name} }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-div\">\n\n\t<form class=\"p-3\" [formGroup]=\"form\" autocomplete=\"off\">\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-input\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'COMMON.name_ar' | translate\"\n\t\t\t\t\t[form_control_name]=\"'name_ar'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-input>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-input\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'COMMON.name_en' | translate\"\n\t\t\t\t\t[form_control_name]=\"'name_en'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-input>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class=\"row\" aria-label=\"link and type\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-textarea\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'Components.BANNERS.columns.link' | translate\"\n\t\t\t\t\t[form_control_name]=\"'link'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-textarea>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\n\n\t\t</div>\n\n\t\t<kt-form-radio-group\n\t\t\t[form]=\"form\"\n\t\t\t[label]=\"'COMMON.activation' | translate\"\n\t\t\t[form_control_name]=\"'is_active'\"\n\t\t\t[first_choice]=\"'COMMON.active' | translate\"\n\t\t\t[second_choice]=\"'COMMON.in_active' | translate\"\n\t\t\t[validation_type]=\"'required'\">\n\t\t</kt-form-radio-group>\n\n\t</form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-4\">\n\t<div class=\"row d-flex justify-content-center my-4\" *ngIf=\"!show_gallery\">\n\n\t\t<button type=\"button\" class=\"btn btn-outline-success mx-3\" (click)=\"showGallery()\">\n\t\t\t{{ 'Components.Gallery.open_gallery' | translate }}\n\t\t</button>\n\n\t</div>\n\n\t<div class=\"mt-3\" *ngIf=\"images.length\">\n\t\t<h3 class=\"text-center mb-3\">\n\t\t\t{{ 'Components.Gallery.images' | translate }}\n\t\t</h3>\n\t\t<gallery [items]=\"images\" thumbPosition=\"left\"></gallery>\n\t</div>\n\n\n\t<div class=\"my-3 d-flex justify-content-center\" *ngIf=\"!images.length\">\n\t\t{{ 'Components.Gallery.no_attached_images' | translate }}\n\t</div>\n\n\n\n\t<mat-divider class=\"my-5\" *ngIf=\"show_gallery\"></mat-divider>\n\n\n\t<kt-gallery\n\t\t[show_gallery]=\"show_gallery\"\n\t\t[gallery_type]=\"'BANNERS'\"\n\t\t[selectedImages]=\"selected_images\"\n\t\t[multiple_images]=\"false\"\n\t\t[galleryInterface]=\"this\"\n\t></kt-gallery>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"page_name\"\n\t\t\t\t   [icon]=\"pageIcon()\"></kt-portlet-header>\n\n<kt-filter [ButtonAddName]=\"'COMMON.Add_Button' | translate: {name : content_name}\"\n\t\t   [ButtonAddUrl]=\"add_route\"\n\t\t   [HasAdd]=\"true\"\n\t\t   [isLoadingResults]=\"isLoadingResults\"\n\t\t   [currentComponent] = \"this\"\n\t\t   [HasItemPerPage]=\"true\"\n\t\t   [HasActive]=\"true\"\n\t\t   [HasSearchFilter]=\"true\"\n\t\t   [HasExport]=\"false\"\n\t\t   [headerParams]=\"headerParams\"\n\t\t   [currentService]=\"service\"\n></kt-filter>\n\n<kt-api-loader [isLoadingResults]=\"isLoadingResults\"></kt-api-loader>\n\n\n<!--DataTable-->\n<div class=\"example-container\" [hidden]=\"isLoadingResults\">\n\t<kt-auth-notice></kt-auth-notice>\n\t<div class=\"example-table-container\">\n\n\t\t<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 w-100\" matSort>\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'COMMON.id' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n\t\t\t</ng-container>\n\n\t\t\t<!-- name Column -->\n\t\t\t<ng-container matColumnDef=\"name\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'COMMON.name' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\"> {{ displayContent(element.name) }} </td>\n\t\t\t</ng-container>\n\n\t\t\t<!-- image Column -->\n\t\t\t<ng-container matColumnDef=\"image_id\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'COMMON.images' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\">\n\t\t\t\t\t<img class=\"img-thumbnail\" src=\"{{element?.image?.image}}\" />\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\n\n\t\t\t<!-- Active Column -->\n\t\t\t<ng-container matColumnDef=\"is_active\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'COMMON.activation' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\">\n\t\t\t\t\t<i class=\"flaticon2-check-mark\" *ngIf=\"element.is_active == 1\"></i>\n\t\t\t\t\t<i class=\"flaticon2-cancel-music\" *ngIf=\"element.is_active == 0\"></i>\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<!-- options Column -->\n\t\t\t<ng-container matColumnDef=\"options\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'Components.options' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\" width=\"20%\">\n\t\t\t\t\t<kt-list-options\n\t\t\t\t\t\t[currentService]=\"service\"\n\t\t\t\t\t\t[element]=\"element\"\n\t\t\t\t\t\t[currentComponent]=\"this\"\n\t\t\t\t\t\t[headerParams]=\"headerParams\"\n\t\t\t\t\t\t[content_name]=\"content_name\"\n\t\t\t\t\t></kt-list-options>\n\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"record-{{row.id}}\"\n\t\t\t\t[ngStyle]=\"{'background-color':row.is_active == 1 ? '#fff' : '#ff00000a' }\"></tr>\n\t\t</table>\n\n\t\t<kt-no-record-found [resultsLength]=\"resultsLength\"></kt-no-record-found>\n\n\t\t<!--Table-->\n\t\t<mat-paginator\n\t\t\t[length]=\"resultsLength\"\n\t\t\t[pageIndex]=\"pageIndex\"\n\t\t\t[pageSize]=\"headerParams.per_page\"\n\t\t\t(page)=\"pagination($event)\"\n\t\t></mat-paginator>\n\t</div>\n\n</div>\n\n");

/***/ }),

/***/ "./src/app/core/Serializers/Marketing-Module/banners.serializer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/Serializers/Marketing-Module/banners.serializer.ts ***!
  \*************************************************************************/
/*! exports provided: BannersSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersSerializer", function() { return BannersSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Marketing_Module_banners_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Marketing-Module/banners.model */ "./src/app/core/models/Marketing-Module/banners.model.ts");



var BannersSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BannersSerializer, _super);
    function BannersSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannersSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    BannersSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    BannersSerializer.prototype.toJson = function (model) {
        var object = {
            'id': model.id,
            'title': model.names,
            'type_id': model.type_id,
            'link': model.link,
            'is_active': model.is_active,
        };
        if (model.image) {
            object['image_id'] = model.image;
        }
        return object;
    };
    BannersSerializer.prototype.toFormData = function (object) {
        return null;
    };
    BannersSerializer.prototype.adapt = function (item) {
        var model = new _models_Marketing_Module_banners_model__WEBPACK_IMPORTED_MODULE_2__["BannersModel"](item.id);
        model.name = item.title;
        model.languages = item.title.en ? item.title : null;
        model.names = item.title.en ? item.title : null;
        model.image = item.image;
        model.link = item.link;
        model.type_id = item.type;
        model.is_active = item.is_active;
        return model;
    };
    BannersSerializer.prototype.status = function (status) {
        return {
            'is_active': status,
        };
    };
    return BannersSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/models/Marketing-Module/banners.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/models/Marketing-Module/banners.model.ts ***!
  \***************************************************************/
/*! exports provided: BannersModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersModel", function() { return BannersModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");
/* harmony import */ var _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/multi.language.model */ "./src/app/core/models/Base/multi.language.model.ts");



var BannersModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BannersModel, _super);
    function BannersModel(id) {
        var _this = _super.call(this, id) || this;
        _this.createObjects();
        return _this;
    }
    BannersModel.prototype.list = function () {
        return {
            'id': this.id,
            'name': this.name,
            'image': this.image,
            'type_id': this.type_id,
            'link': this.link,
            'is_active': this.is_active,
        };
    };
    BannersModel.prototype.createObjects = function () {
        this.names = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
    };
    return BannersModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/services/Marketing-Module/banners.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/Marketing-Module/banners.service.ts ***!
  \*******************************************************************/
/*! exports provided: BannersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersService", function() { return BannersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Base/base.service */ "./src/app/core/services/Base/base.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Serializers_Marketing_Module_banners_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Serializers/Marketing-Module/banners.serializer */ "./src/app/core/Serializers/Marketing-Module/banners.serializer.ts");






var BannersService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BannersService, _super);
    function BannersService(Http) {
        return _super.call(this, Http, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url(), 'admins/banners', new _Serializers_Marketing_Module_banners_serializer__WEBPACK_IMPORTED_MODULE_5__["BannersSerializer"]()) || this;
    }
    BannersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BannersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BannersService);
    return BannersService;
}(_Base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[hidden] {\n  display: none !important; }\n\nmat-label {\n  margin-bottom: 10px; }\n\nstrong {\n  font-size: 12px;\n  font-weight: 500; }\n\ninput, textarea {\n  border-bottom: 1px solid #0000002e; }\n\n.lang_section {\n  border: 1px solid #ddd;\n  padding: 15px;\n  margin-bottom: 2em; }\n\ninput:-moz-read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\ninput:read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL211c3RhZmFfbWFtZG91aC9hbmd1bGFyX3dvcmtzcGFjZS9ib2F0LXJpZGUtY21zL3NyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NDLHdCQUF3QixFQUFBOztBQUV6QjtFQUNDLG1CQUFtQixFQUFBOztBQUVwQjtFQUNDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFakI7RUFDQyxrQ0FBa0MsRUFBQTs7QUFHbkM7RUFDQyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVuQjtFQUNDLHNDQUFzQztFQUN0Qyx1QkFBdUIsRUFBQTs7QUFGeEI7RUFDQyxzQ0FBc0M7RUFDdEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tb2R1bGVzL01hcmtldGluZy1Nb2R1bGUvYmFubmVycy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxubWF0LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG5zdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyZTsgfVxuXG4ubGFuZ19zZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtOyB9XG5cbmlucHV0OnJlYWQtb25seSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQzYiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgfVxuIiwiW2hpZGRlbl0ge1xuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5tYXQtbGFiZWwge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc3Ryb25nIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuaW5wdXQgLCB0ZXh0YXJlYSAge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDJlO1xufVxuXG4ubGFuZ19zZWN0aW9uIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0cGFkZGluZzogMTVweDtcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xufVxuaW5wdXQ6cmVhZC1vbmx5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDNiICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/services/FormError.service */ "./src/app/core/services/FormError.service.ts");
/* harmony import */ var _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/services/auth-notice.service */ "./src/app/core/services/auth-notice.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/Marketing-Module/banners.service */ "./src/app/core/services/Marketing-Module/banners.service.ts");
/* harmony import */ var _core_models_Marketing_Module_banners_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/models/Marketing-Module/banners.model */ "./src/app/core/models/Marketing-Module/banners.model.ts");










var AddComponent = /** @class */ (function () {
    function AddComponent(fb, service, formErrorService, route, router, cdr, translateService, authNoticeService, helper) {
        this.fb = fb;
        this.service = service;
        this.formErrorService = formErrorService;
        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.translateService = translateService;
        this.authNoticeService = authNoticeService;
        this.helper = helper;
        this.isValidationError = false;
        this.isLoadingResults = true;
        this.selected_image = [];
        this.navigationSubscription = this.helper.routingSubscribe(this);
    }
    AddComponent.prototype.ngOnInit = function () {
        this.initialiseComponent();
        this.initializePageName();
    };
    AddComponent.prototype.ngDoCheck = function () {
        this.initializePageName();
    };
    AddComponent.prototype.initializePageName = function () {
        this.page_name = this.translateService.instant('Components.BANNERS.name');
        this.content_name = this.translateService.instant('Components.BANNERS.single');
    };
    AddComponent.prototype.initialiseComponent = function () {
        this.isLoadingResults = false;
        this.initForm();
    };
    /**
     * Initiate the form
     *
     */
    AddComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            name_ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_active: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddComponent.prototype.clearForm = function () {
        this.form.reset();
    };
    AddComponent.prototype.submitForm = function () {
        var _this = this;
        var controls = this.form.controls;
        /** showing Errors  */
        if (this.form.invalid) {
            return this.formErrorService.markAsTouched(controls);
        }
        var model = new _core_models_Marketing_Module_banners_model__WEBPACK_IMPORTED_MODULE_9__["BannersModel"](null);
        model.is_active = controls['is_active'].value;
        model.names.ar = controls['name_ar'].value;
        model.names.en = controls['name_en'].value;
        model.type_id = controls['type_id'].value;
        model.link = controls['link'].value;
        if (this.selected_image.length) {
            // @ts-ignore
            model.image = this.selected_image[0];
        }
        if (!model.image) {
            this.authNoticeService.setNotice('Please select image', 'danger');
            return;
        }
        // call service to store Banner
        this.isLoadingResults = true;
        this.service.create(model).subscribe(function (resp) {
            _this.form.reset();
            _this.isLoadingResults = false;
            _this.authNoticeService.setNotice(_this.translateService.instant('COMMON.Added_successfully', { name: _this.content_name }), 'success');
            _this.router.navigate(['../'], { relativeTo: _this.route }).then();
        }, function (handler) {
            _this.authNoticeService.setNotice(_this.helper.showingErrors(handler.error), 'danger');
            _this.isLoadingResults = false;
            _this.isValidationError = true;
        });
    };
    /**
     * On destroy
     */
    AddComponent.prototype.ngOnDestroy = function () {
        this.isLoadingResults = false;
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
        if (this.isValidationError) {
            this.authNoticeService.setNotice(null);
        }
    };
    AddComponent.prototype.handleSelectedImage = function ($event) {
        this.selected_image = $event;
    };
    AddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_8__["BannersService"] },
        { type: _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] }
    ]; };
    AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add.component.scss */ "./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_8__["BannersService"],
            _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/banners-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/banners-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BannersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersRoutingModule", function() { return BannersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banners.component */ "./src/app/views/pages/modules/Marketing-Module/banners/banners.component.ts");
/* harmony import */ var _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/Global/routes.name */ "./src/app/core/Global/routes.name.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.ts");








var routes = [
    {
        path: '',
        component: _banners_component__WEBPACK_IMPORTED_MODULE_3__["BannersComponent"],
        children: [
            {
                path: '',
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
            },
            {
                path: _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_4__["RoutesName"].add(),
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"]
            },
            {
                path: ':id',
                component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]
            },
            { path: '**', redirectTo: '', pathMatch: '' },
        ]
    }
];
var BannersRoutingModule = /** @class */ (function () {
    function BannersRoutingModule() {
    }
    BannersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BannersRoutingModule);
    return BannersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/banners.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/banners.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvTWFya2V0aW5nLU1vZHVsZS9iYW5uZXJzL2Jhbm5lcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/banners.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/banners.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannersComponent = /** @class */ (function () {
    function BannersComponent() {
    }
    BannersComponent.prototype.ngOnInit = function () {
    };
    BannersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-banners',
            template: __importDefault(__webpack_require__(/*! raw-loader!./banners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/banners.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./banners.component.scss */ "./src/app/views/pages/modules/Marketing-Module/banners/banners.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BannersComponent);
    return BannersComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/banners.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/banners.module.ts ***!
  \********************************************************************************/
/*! exports provided: BannersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersModule", function() { return BannersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _banners_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banners-routing.module */ "./src/app/views/pages/modules/Marketing-Module/banners/banners-routing.module.ts");
/* harmony import */ var _banners_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banners.component */ "./src/app/views/pages/modules/Marketing-Module/banners/banners.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/views/shared/shared.module.ts");
/* harmony import */ var _pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pages.module */ "./src/app/views/pages/pages.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/pages/modules/Marketing-Module/banners/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/form.component */ "./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/images.component */ "./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.ts");















var BannersModule = /** @class */ (function () {
    function BannersModule() {
    }
    BannersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_banners_component__WEBPACK_IMPORTED_MODULE_4__["BannersComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"], _images_images_component__WEBPACK_IMPORTED_MODULE_14__["ImagesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _banners_routing_module__WEBPACK_IMPORTED_MODULE_3__["BannersRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"]
            ]
        })
    ], BannersModule);
    return BannersModule;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[hidden] {\n  display: none !important; }\n\nmat-label {\n  margin-bottom: 10px; }\n\nstrong {\n  font-size: 12px;\n  font-weight: 500; }\n\ninput, textarea {\n  border-bottom: 1px solid #0000002e; }\n\n.lang_section {\n  border: 1px solid #ddd;\n  padding: 15px;\n  margin-bottom: 2em; }\n\ninput:-moz-read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\ninput:read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbXVzdGFmYV9tYW1kb3VoL2FuZ3VsYXJfd29ya3NwYWNlL2JvYXQtcmlkZS1jbXMvc3JjL2FwcC92aWV3cy9wYWdlcy9tb2R1bGVzL01hcmtldGluZy1Nb2R1bGUvYmFubmVycy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNDQyx3QkFBd0IsRUFBQTs7QUFFekI7RUFDQyxtQkFBbUIsRUFBQTs7QUFFcEI7RUFDQyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0Msa0NBQWtDLEVBQUE7O0FBR25DO0VBQ0Msc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxzQ0FBc0M7RUFDdEMsdUJBQXVCLEVBQUE7O0FBRnhCO0VBQ0Msc0NBQXNDO0VBQ3RDLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxubWF0LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG5zdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyZTsgfVxuXG4ubGFuZ19zZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtOyB9XG5cbmlucHV0OnJlYWQtb25seSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQzYiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgfVxuIiwiW2hpZGRlbl0ge1xuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5tYXQtbGFiZWwge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc3Ryb25nIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuaW5wdXQgLCB0ZXh0YXJlYSAge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDJlO1xufVxuXG4ubGFuZ19zZWN0aW9uIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0cGFkZGluZzogMTVweDtcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xufVxuaW5wdXQ6cmVhZC1vbmx5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDNiICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/services/FormError.service */ "./src/app/core/services/FormError.service.ts");
/* harmony import */ var _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/services/auth-notice.service */ "./src/app/core/services/auth-notice.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/Marketing-Module/banners.service */ "./src/app/core/services/Marketing-Module/banners.service.ts");
/* harmony import */ var _core_models_Marketing_Module_banners_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/models/Marketing-Module/banners.model */ "./src/app/core/models/Marketing-Module/banners.model.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(formBuilder, service, formErrorService, route, router, cdr, authNoticeService, translateService, helper) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.formErrorService = formErrorService;
        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.authNoticeService = authNoticeService;
        this.translateService = translateService;
        this.helper = helper;
        this.isValidationError = false;
        this.isLoadingResults = true;
        this.id = null;
        this.selected_images = [];
        this.current_images = [];
        this.navigationSubscription = this.helper.routingSubscribe(this);
    }
    EditComponent.prototype.ngOnInit = function () {
        this.initialiseComponent();
        this.initializePageName();
    };
    EditComponent.prototype.ngDoCheck = function () {
        this.initializePageName();
    };
    EditComponent.prototype.initializePageName = function () {
        this.page_name = this.translateService.instant('Components.BANNERS.name');
        this.content_name = this.translateService.instant('Components.BANNERS.single');
    };
    EditComponent.prototype.initialiseComponent = function () {
        this.isLoadingResults = false;
        this.is_result = false;
        this.get();
    };
    EditComponent.prototype.get = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.route.params.subscribe(function (resp) {
            _this.id = resp['id'];
            var current_image = [];
            // call api to get shipping rule
            _this.service.get(_this.id).subscribe(function (data) {
                _this.is_result = true;
                _this.model = data;
                // @ts-ignore
                current_image.push(_this.model.image);
                _this.current_images = current_image;
                _this.initializeForm();
            }, function (error) {
                _this.authNoticeService.setNotice(_this.translateService.instant('COMMON.Item_not_found', { name: _this.content_name }), 'danger');
                _this.isLoadingResults = false;
                _this.isValidationError = true;
                _this.cdr.markForCheck();
            });
        });
    };
    /**
     * Initiate the form
     *
     */
    EditComponent.prototype.initializeForm = function () {
        var _a, _b;
        this.form = this.formBuilder.group({
            name_ar: [(_a = this.model.names) === null || _a === void 0 ? void 0 : _a.ar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name_en: [(_b = this.model.names) === null || _b === void 0 ? void 0 : _b.en, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type_id: [this.model.type_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            link: [this.model.link + '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_active: [this.model.is_active + '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.isLoadingResults = false;
        this.cdr.markForCheck();
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to validators name
     */
    EditComponent.prototype.isControlHasError = function (controlName, validationType) {
        return this.formErrorService.isControlHasError(this.form, controlName, validationType);
    };
    EditComponent.prototype.updateForm = function () {
        var _this = this;
        var controls = this.form.controls;
        /** showing Errors  */
        if (this.form.invalid) {
            return this.formErrorService.markAsTouched(controls);
        }
        var model = new _core_models_Marketing_Module_banners_model__WEBPACK_IMPORTED_MODULE_9__["BannersModel"](null);
        model.is_active = controls['is_active'].value;
        model.names.ar = controls['name_ar'].value;
        model.names.en = controls['name_en'].value;
        model.type_id = controls['type_id'].value;
        model.link = controls['link'].value;
        model.image = null;
        if (this.selected_images.length) {
            // @ts-ignore
            model.image = this.selected_images[0];
        }
        // call service to store shipping rule
        this.isLoadingResults = true;
        this.service.update(this.model.id, model).subscribe(function (resp) {
            _this.isLoadingResults = false;
            _this.authNoticeService.setNotice(_this.translateService.instant('COMMON.Edited_successfully', { name: _this.content_name }), 'success');
            _this.cdr.markForCheck();
            _this.router.navigate(['../'], { relativeTo: _this.route }).then();
        }, function (handler) {
            _this.authNoticeService.setNotice(_this.helper.showingErrors(handler.error), 'danger');
            _this.isLoadingResults = false;
            _this.isValidationError = true;
            _this.cdr.markForCheck();
        });
    };
    /**
     * On destroy
     */
    EditComponent.prototype.ngOnDestroy = function () {
        this.isLoadingResults = false;
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
        if (this.isValidationError) {
            this.authNoticeService.setNotice(null);
        }
    };
    EditComponent.prototype.handleSelectedImage = function ($event) {
        this.selected_images = $event;
    };
    EditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_8__["BannersService"] },
        { type: _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] }
    ]; };
    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit.component.scss */ "./src/app/views/pages/modules/Marketing-Module/banners/edit/edit.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_8__["BannersService"],
            _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[hidden] {\n  display: none !important; }\n\nmat-label {\n  margin-bottom: 10px; }\n\nstrong {\n  font-size: 12px;\n  font-weight: 500; }\n\n.lang_section {\n  border: 1px solid #ddd;\n  padding: 15px;\n  margin-bottom: 2em; }\n\ninput:-moz-read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\ninput:read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbXVzdGFmYV9tYW1kb3VoL2FuZ3VsYXJfd29ya3NwYWNlL2JvYXQtcmlkZS1jbXMvc3JjL2FwcC92aWV3cy9wYWdlcy9tb2R1bGVzL01hcmtldGluZy1Nb2R1bGUvYmFubmVycy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNDQyx3QkFBd0IsRUFBQTs7QUFFekI7RUFDQyxtQkFBbUIsRUFBQTs7QUFFcEI7RUFDQyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0Msc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxzQ0FBc0M7RUFDdEMsdUJBQXVCLEVBQUE7O0FBRnhCO0VBQ0Msc0NBQXNDO0VBQ3RDLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxubWF0LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG5zdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLmxhbmdfc2VjdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJlbTsgfVxuXG5pbnB1dDpyZWFkLW9ubHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkM2IgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IH1cbiIsIltoaWRkZW5dIHtcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxubWF0LWxhYmVsIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbnN0cm9uZyB7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxhbmdfc2VjdGlvbiB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbmlucHV0OnJlYWQtb25seSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQzYiAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], FormComponent.prototype, "form", void 0);
    FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./form.component.scss */ "./src/app/views/pages/modules/Marketing-Module/banners/form/form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvTWFya2V0aW5nLU1vZHVsZS9iYW5uZXJzL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
        this.show_gallery = false;
        this.images = [];
        this.selected_images = [];
        this.isLoadingResults = true;
        this.image_event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.generateSlider(this.selected_images);
    };
    ImagesComponent.prototype.generateSlider = function (images) {
        var slider = [];
        images.forEach(function (image) {
            var imageItem = new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]({ src: image.image, thumb: image.thumbnail });
            slider.push(imageItem);
        });
        this.images = slider;
    };
    ImagesComponent.prototype.attach = function (items, images) {
        if (images === void 0) { images = null; }
        this.generateSlider(images);
        this.image_event.emit(items);
        this.show_gallery = false;
    };
    ImagesComponent.prototype.showGallery = function () {
        this.show_gallery = true;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], ImagesComponent.prototype, "selected_images", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ImagesComponent.prototype, "image_event", void 0);
    ImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-images',
            template: __importDefault(__webpack_require__(/*! raw-loader!./images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./images.component.scss */ "./src/app/views/pages/modules/Marketing-Module/banners/images/images.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, th, td, tr, .mat-sort-header-container {\n  text-align: center; }\n\ntd {\n  padding: 20px !important; }\n\n@media (max-width: 670px) {\n  .example-table-container {\n    width: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211c3RhZmFfbWFtZG91aC9hbmd1bGFyX3dvcmtzcGFjZS9ib2F0LXJpZGUtY21zL3NyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyx3QkFBd0IsRUFBQTs7QUFJekI7RUFFQztJQUNDLHNCQUFzQixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jhbm5lcnMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSAsIHRoICwgdGQgLHRyICwubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGR7XG5cdHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxuQG1lZGlhIChtYXgtd2lkdGg6IDY3MHB4KSB7XG5cblx0LmV4YW1wbGUtdGFibGUtY29udGFpbmVye1xuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdH1cblxufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.ts ***!
  \***************************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_Global_global_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/Global/global.config */ "./src/app/core/Global/global.config.ts");
/* harmony import */ var _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/services/auth-notice.service */ "./src/app/core/services/auth-notice.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/Global/routes.name */ "./src/app/core/Global/routes.name.ts");
/* harmony import */ var _core_Global_section_icons_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/Global/section.icons.name */ "./src/app/core/Global/section.icons.name.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../core/services/Marketing-Module/banners.service */ "./src/app/core/services/Marketing-Module/banners.service.ts");













var IndexComponent = /** @class */ (function () {
    function IndexComponent(cdr, service, authNoticeService, translateService, router, helper) {
        this.cdr = cdr;
        this.service = service;
        this.authNoticeService = authNoticeService;
        this.translateService = translateService;
        this.router = router;
        this.helper = helper;
        this.displayedColumns = ['id', 'name', 'image_id', 'is_active', 'options'];
        this.isLoadingResults = true;
        // pagination variables
        this.resultsLength = 0;
        this.pageIndex = 0;
        //filter variables
        this.headerParams = {
            active: 1,
            per_page: _core_Global_global_config__WEBPACK_IMPORTED_MODULE_6__["GlobalConfig"].pagination_per_page,
            search_key: null,
            sort_key: null,
            sort_order: null,
            next_page_index: 0,
        };
        this.navigationSubscription = this.helper.routingSubscribe(this);
    }
    // onInit get Data from api
    IndexComponent.prototype.ngOnInit = function () {
        this.initialiseComponent();
        this.add_route = _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_9__["RoutesName"].add();
        this.initializePageName();
    };
    IndexComponent.prototype.ngDoCheck = function () {
        this.initializePageName();
    };
    IndexComponent.prototype.initializePageName = function () {
        this.page_name = this.translateService.instant('Components.BANNERS.name');
        this.content_name = this.translateService.instant('Components.BANNERS.single');
    };
    IndexComponent.prototype.initialiseComponent = function () {
        this.get(this.headerParams);
    };
    // call api to get Banner Data from the server
    IndexComponent.prototype.get = function (headerParams) {
        var _this = this;
        this.headerParams = headerParams;
        this.isLoadingResults = true;
        var data = this.service.list(headerParams).subscribe(function (resp) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](resp);
            _this.dataSource.sort = _this.sort;
            _this.isLoadingResults = false;
            _this.resultsLength = (resp['pagination'] ? resp['pagination'].total : 0);
            _this.cdr.markForCheck();
        }, function (error) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]([]);
            _this.dataSource.sort = _this.sort;
            _this.isLoadingResults = false;
            _this.cdr.markForCheck();
        });
    };
    // pagination data tables
    IndexComponent.prototype.pagination = function (event) {
        this.pageIndex = event.pageIndex;
        this.headerParams.next_page_index = this.pageIndex;
        this.get(this.headerParams);
    };
    /**
     * On destroy
     */
    IndexComponent.prototype.ngOnDestroy = function () {
        this.authNoticeService.setNotice(null);
        this.isLoadingResults = false;
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    IndexComponent.prototype.pageIcon = function () {
        return _core_Global_section_icons_name__WEBPACK_IMPORTED_MODULE_10__["SectionIconsName"].banners();
    };
    IndexComponent.prototype.displayContent = function (text) {
        return (text.length > 70) ? text.substring(0, 70) + ' ......' : text;
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_12__["BannersService"] },
        { type: _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_7__["AuthNoticeService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], IndexComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], IndexComponent.prototype, "sort", void 0);
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-index',
            template: __importDefault(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./index.component.scss */ "./src/app/views/pages/modules/Marketing-Module/banners/index/index.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_services_Marketing_Module_banners_service__WEBPACK_IMPORTED_MODULE_12__["BannersService"],
            _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_7__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-modules-Marketing-Module-banners-banners-module.js.map