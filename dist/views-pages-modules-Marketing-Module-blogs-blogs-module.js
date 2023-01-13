(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-modules-Marketing-Module-blogs-blogs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"'COMMON.Add_Button' | translate : {name : content_name}\"\n\t\t\t\t   [icon]=\"'flaticon-add'\"></kt-portlet-header>\n<!--Loader-->\n<div class=\"example-container m-auto\" *ngIf=\"isLoadingResults\">\n\t<div class=\"example-loading-shade mt-5 mb-5\">\n\t\t<mat-spinner diameter=\"50\" *ngIf=\"isLoadingResults\"></mat-spinner>\n\t</div>\n</div>\n\n<!-- Form-->\n<div class=\"example-container\">\n\t<kt-auth-notice></kt-auth-notice>\n\t<div [hidden]=\"isLoadingResults\" class=\"my-4\">\n\n\t\t<div *ngIf=\"is_result\">\n\t\t\t<kt-form [form]=\"form\"></kt-form>\n\n\t\t\t<div class=\"col-12 text-center px-3\">\n\t\t\t\t<button mat-raised-button type=\"submit\" class=\"btn btn-success mx-3\" (click)=\"submitForm()\">\n\t\t\t\t\t{{ 'COMMON.Add_Button' | translate : {name : content_name} }}\n\t\t\t\t</button>\n\t\t\t\t<button mat-raised-button class=\"btn btn-outline-info mx-3\" (click)=\"clearForm()\">\n\t\t\t\t\t{{ 'COMMON.clear_form' | translate }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<kt-portlet class=\"col-12 p-3\">\n\t\t<router-outlet></router-outlet>\n\t</kt-portlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"'COMMON.Edit_Button' | translate : {name : content_name}\"\n\t\t\t\t   [icon]=\"'far fa-edit'\"></kt-portlet-header>\n<!--Loader-->\n<div class=\"example-container m-auto\" *ngIf=\"isLoadingResults\">\n\t<div class=\"example-loading-shade mt-5 mb-5\">\n\t\t<mat-spinner diameter=\"50\" *ngIf=\"isLoadingResults\"></mat-spinner>\n\t</div>\n</div>\n\n<!-- Form-->\n<div class=\"example-container\">\n\t<div class=\"my-4\">\n\t\t<kt-auth-notice></kt-auth-notice>\n\t</div>\n\t<div *ngIf=\"!isLoadingResults\">\n\n\t\t<div *ngIf=\"is_result\">\n\t\t\t<kt-form [form]=\"form\"\n\t\t\t\t\t [meta_tags_ar]=\"model.seo?.keywords?.ar ? model.seo?.keywords?.ar: []\"\n\t\t\t\t\t [meta_tags_en]=\"model.seo?.keywords?.en ? model.seo?.keywords?.en: []\"\n\t\t\t\t\t [imgURL]=\"current_image\"></kt-form>\n\n\t\t\t<div class=\"col-12 text-center px-3\">\n\t\t\t\t<button mat-raised-button type=\"submit\" class=\"btn btn-success mx-3\" (click)=\"updateForm()\">\n\t\t\t\t\t{{ 'COMMON.Edit_Button' | translate : {name : content_name} }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-div\">\n\n\t<form class=\"p-3\" [formGroup]=\"form\" autocomplete=\"off\">\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-input\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'COMMON.title_ar' | translate\"\n\t\t\t\t\t[form_control_name]=\"'name_ar'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-input>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-input\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'COMMON.title_en' | translate\"\n\t\t\t\t\t[form_control_name]=\"'name_en'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-input>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row overflow-hidden\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-richtext\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'COMMON.description_ar' | translate\"\n\t\t\t\t\t[form_control_name]=\"'description_ar'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-richtext>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-richtext\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'COMMON.description_en' | translate\"\n\t\t\t\t\t[form_control_name]=\"'description_en'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-richtext>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<kt-form-seo-description [form]=\"form\"\n\t\t\t\t\t\t\t\t [meta_tags_ar]=\"meta_tags_ar\"\n\t\t\t\t\t\t\t\t [meta_tags_en]=\"meta_tags_en\">\n\t\t</kt-form-seo-description>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-input\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'Components.BLOGS.columns.author' | translate\"\n\t\t\t\t\t[form_control_name]=\"'author'\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-input>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-radio-group\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[label]=\"'COMMON.activation' | translate\"\n\t\t\t\t\t[form_control_name]=\"'is_active'\"\n\t\t\t\t\t[default]=\"false\"\n\t\t\t\t\t[first_choice]=\"'COMMON.active' | translate\"\n\t\t\t\t\t[second_choice]=\"'COMMON.in_active' | translate\"\n\t\t\t\t\t[validation_type]=\"'required'\">\n\t\t\t\t</kt-form-radio-group>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<kt-form-upload-image\n\t\t\t\t\t[form]=\"form\"\n\t\t\t\t\t[to_base64]=\"true\"\n\t\t\t\t\t[validation_type]=\"'required'\"\n\t\t\t\t\t[imgURL]=\"imgURL\"\n\t\t\t\t\t[label]=\"'Components.image' | translate\"\n\t\t\t\t\t[form_control_name]=\"'image'\">\n\t\t\t\t</kt-form-upload-image>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet-header [title]=\"page_name\"\n\t\t\t\t   [icon]=\"pageIcon()\"></kt-portlet-header>\n\n<kt-filter [ButtonAddName]=\"'COMMON.Add_Button' | translate: {name : content_name}\"\n\t\t   [ButtonAddUrl]=\"add_route\"\n\t\t   [HasAdd]=\"can_manage\"\n\t\t   [isLoadingResults]=\"isLoadingResults\"\n\t\t   [currentComponent] = \"this\"\n\t\t   [HasItemPerPage]=\"true\"\n\t\t   [HasActive]=\"false\"\n\t\t   [HasSearchFilter]=\"true\"\n\t\t   [HasExport]=\"false\"\n\t\t   [headerParams]=\"headerParams\"\n\t\t   [currentService]=\"service\"\n></kt-filter>\n\n<kt-api-loader [isLoadingResults]=\"isLoadingResults\"></kt-api-loader>\n\n\n<!--DataTable-->\n<div class=\"example-container\" [hidden]=\"isLoadingResults\">\n\t<kt-auth-notice></kt-auth-notice>\n\t<div class=\"example-table-container mat-elevation-z8\">\n\n\t\t<table mat-table [dataSource]=\"dataSource\" class=\"w-100\" matSort>\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'COMMON.id' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n\t\t\t</ng-container>\n\n\t\t\t<!-- name Column -->\n\t\t\t<ng-container matColumnDef=\"name\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'COMMON.name' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\"> {{ displayContent(element.name) }} </td>\n\t\t\t</ng-container>\n\n\t\t\t<!-- image Column -->\n\t\t\t<ng-container matColumnDef=\"image\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'Components.image' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\">\n\t\t\t\t\t<img class=\"img-thumbnail\" src=\"{{element.image}}\" style=\"width: 100%\">\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container matColumnDef=\"is_active\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'COMMON.activation' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\">\n\t\t\t\t\t<i class=\"flaticon2-check-mark\" *ngIf=\"element.is_active == 1\"></i>\n\t\t\t\t\t<i class=\"flaticon2-cancel-music\" *ngIf=\"element.is_active == 0\"></i>\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\n\t\t\t<!-- options Column -->\n\t\t\t<ng-container matColumnDef=\"options\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>\n\t\t\t\t\t{{ 'Components.options' | translate }}\n\t\t\t\t</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element\" width=\"20%\">\n\t\t\t\t\t<kt-list-options\n\t\t\t\t\t\t[currentService]=\"service\"\n\t\t\t\t\t\t[element]=\"element\"\n\t\t\t\t\t\t[enabled_change_status]=\"false\"\n\t\t\t\t\t\t[currentComponent]=\"this\"\n\t\t\t\t\t\t[enabled_edit]=\"can_manage\"\n\t\t\t\t\t\t[enabled_delete]=\"can_delete\"\n\t\t\t\t\t\t[headerParams]=\"headerParams\"\n\t\t\t\t\t\t[content_name]=\"content_name\">\n\t\t\t\t\t</kt-list-options>\n\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"record-{{row.id}}\"></tr>\n\t\t</table>\n\n\t\t<kt-no-record-found [resultsLength]=\"resultsLength\"></kt-no-record-found>\n\n\t\t<!--Table-->\n\t\t<mat-paginator\n\t\t\t[length]=\"resultsLength\"\n\t\t\t[pageIndex]=\"pageIndex\"\n\t\t\t[pageSize]=\"headerParams.per_page\"\n\t\t\t(page)=\"pagination($event)\"\n\t\t></mat-paginator>\n\t</div>\n\n</div>\n\n");

/***/ }),

/***/ "./src/app/core/Serializers/Marketing-Module/blog.serializer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/Serializers/Marketing-Module/blog.serializer.ts ***!
  \**********************************************************************/
/*! exports provided: BlogSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSerializer", function() { return BlogSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Marketing_Module_blogs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Marketing-Module/blogs.model */ "./src/app/core/models/Marketing-Module/blogs.model.ts");



var BlogSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BlogSerializer, _super);
    function BlogSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlogSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    BlogSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    BlogSerializer.prototype.toJson = function (model) {
        var object = {
            'id': model.id,
            'title': model.name,
            'description': model.description,
            'is_active': model.is_active,
            'author': model.author,
            'seo': model.seo,
        };
        if (model.image) {
            object['image'] = model.image;
        }
        return object;
    };
    BlogSerializer.prototype.toFormData = function (object) {
        return null;
    };
    BlogSerializer.prototype.adapt = function (item) {
        var model = new _models_Marketing_Module_blogs_model__WEBPACK_IMPORTED_MODULE_2__["BlogModel"](item.id);
        model.name = item.title;
        model.description = item.description;
        model.is_active = item.is_active;
        model.seo = item.seo;
        model.author = item.author;
        model.image = item.image;
        return model;
    };
    BlogSerializer.prototype.status = function (status) {
        return {
            'is_active': status,
        };
    };
    return BlogSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/models/Marketing-Module/blogs.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/models/Marketing-Module/blogs.model.ts ***!
  \*************************************************************/
/*! exports provided: BlogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModel", function() { return BlogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");
/* harmony import */ var _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/multi.language.model */ "./src/app/core/models/Base/multi.language.model.ts");
/* harmony import */ var _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SEO-Module/seo.model */ "./src/app/core/models/SEO-Module/seo.model.ts");




var BlogModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BlogModel, _super);
    function BlogModel(id) {
        var _this = _super.call(this, id) || this;
        _this.createObjects();
        return _this;
    }
    BlogModel.prototype.list = function () {
        return {
            'id': this.id,
            'name': this.name,
            'author': this.author,
            'description': this.description,
            'is_active': this.is_active,
            'image': this.image,
        };
    };
    BlogModel.prototype.createObjects = function () {
        this.name = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.description = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.seo = new _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__["SeoModel"](null);
    };
    return BlogModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/models/SEO-Module/seo.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/SEO-Module/seo.model.ts ***!
  \*****************************************************/
/*! exports provided: SeoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoModel", function() { return SeoModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");
/* harmony import */ var _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/multi.language.model */ "./src/app/core/models/Base/multi.language.model.ts");



var SeoModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SeoModel, _super);
    function SeoModel(id) {
        var _this = _super.call(this, id) || this;
        _this.createObjects();
        return _this;
    }
    SeoModel.prototype.list = function () {
        return {
            'id': this.id,
            'title': this.title,
            'url': this.url,
            'description': this.description,
        };
    };
    SeoModel.prototype.createObjects = function () {
        this.title = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.description = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.keywords = {
            ar: [],
            en: []
        };
    };
    return SeoModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/services/Marketing-Module/blog.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/services/Marketing-Module/blog.service.ts ***!
  \****************************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Base/base.service */ "./src/app/core/services/Base/base.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Serializers_Marketing_Module_blog_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Serializers/Marketing-Module/blog.serializer */ "./src/app/core/Serializers/Marketing-Module/blog.serializer.ts");






var BlogService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BlogService, _super);
    function BlogService(Http) {
        return _super.call(this, Http, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url(), 'admins/blogs', new _Serializers_Marketing_Module_blog_serializer__WEBPACK_IMPORTED_MODULE_5__["BlogSerializer"]()) || this;
    }
    BlogService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BlogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogService);
    return BlogService;
}(_Base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[hidden] {\n  display: none !important; }\n\nmat-label {\n  margin-bottom: 10px; }\n\nstrong {\n  font-size: 12px;\n  font-weight: 500; }\n\ninput, textarea {\n  border-bottom: 1px solid #0000002e; }\n\n.lang_section {\n  border: 1px solid #ddd;\n  padding: 15px;\n  margin-bottom: 2em; }\n\ninput:-moz-read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\ninput:read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jsb2dzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tdXN0YWZhX21hbWRvdWgvYW5ndWxhcl93b3Jrc3BhY2UvYm9hdC1yaWRlLWNtcy9zcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvTWFya2V0aW5nLU1vZHVsZS9ibG9ncy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0Msd0JBQXdCLEVBQUE7O0FBRXpCO0VBQ0MsbUJBQW1CLEVBQUE7O0FBRXBCO0VBQ0MsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLGtDQUFrQyxFQUFBOztBQUduQztFQUNDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0Msc0NBQXNDO0VBQ3RDLHVCQUF1QixFQUFBOztBQUZ4QjtFQUNDLHNDQUFzQztFQUN0Qyx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvTWFya2V0aW5nLU1vZHVsZS9ibG9ncy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxubWF0LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG5zdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyZTsgfVxuXG4ubGFuZ19zZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtOyB9XG5cbmlucHV0OnJlYWQtb25seSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQzYiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgfVxuIiwiW2hpZGRlbl0ge1xuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5tYXQtbGFiZWwge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc3Ryb25nIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuaW5wdXQgLCB0ZXh0YXJlYSAge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDJlO1xufVxuXG4ubGFuZ19zZWN0aW9uIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0cGFkZGluZzogMTVweDtcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xufVxuaW5wdXQ6cmVhZC1vbmx5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDNiICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.ts ***!
  \*********************************************************************************/
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
/* harmony import */ var _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/Marketing-Module/blog.service */ "./src/app/core/services/Marketing-Module/blog.service.ts");
/* harmony import */ var _core_models_Marketing_Module_blogs_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/models/Marketing-Module/blogs.model */ "./src/app/core/models/Marketing-Module/blogs.model.ts");
/* harmony import */ var _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/services/Helpers/error.msg.helper.service */ "./src/app/core/services/Helpers/error.msg.helper.service.ts");











var AddComponent = /** @class */ (function () {
    function AddComponent(fb, service, formErrorService, errorMsgHelperService, cdr, route, router, translateService, authNoticeService, helper) {
        this.fb = fb;
        this.service = service;
        this.formErrorService = formErrorService;
        this.errorMsgHelperService = errorMsgHelperService;
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.translateService = translateService;
        this.authNoticeService = authNoticeService;
        this.helper = helper;
        this.isValidationError = false;
        this.isLoadingResults = true;
        this.selected_images = [];
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
        this.page_name = this.translateService.instant('Components.BLOGS.name');
        this.content_name = this.translateService.instant('Components.BLOGS.single');
    };
    AddComponent.prototype.initialiseComponent = function () {
        this.isLoadingResults = false;
        this.is_result = true;
        this.cdr.markForCheck();
        this.initForm();
    };
    /**
     * Initiate the form
     *
     */
    AddComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            name_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name_ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description_ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_title_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_title_ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_description_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_description_ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_meta_tags_en: [''],
            seo_meta_tags_ar: [''],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_active: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
            var invalid_controls = this.formErrorService.markAsTouched(controls);
            // @ts-ignore
            this.errorMsgHelperService.handleErrors(invalid_controls);
            return;
        }
        var model = new _core_models_Marketing_Module_blogs_model__WEBPACK_IMPORTED_MODULE_9__["BlogModel"](null);
        model.name.en = controls['name_en'].value;
        model.name.ar = controls['name_ar'].value;
        model.description.en = controls['description_en'].value;
        model.description.ar = controls['description_ar'].value;
        model.is_active = controls['is_active'].value;
        model.author = controls['author'].value;
        model.seo.title.en = controls['seo_title_en'].value;
        model.seo.title.ar = controls['seo_title_ar'].value;
        model.seo.description.en = controls['seo_description_en'].value;
        model.seo.description.ar = controls['seo_description_ar'].value;
        model.seo.keywords.en = controls['seo_meta_tags_en'].value;
        model.seo.keywords.ar = controls['seo_meta_tags_ar'].value;
        model.image = controls['image'].value;
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
        this.selected_images = $event;
    };
    AddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_8__["BlogService"] },
        { type: _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"] },
        { type: _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_10__["ErrorMsgHelperService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] }
    ]; };
    AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add.component.scss */ "./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_8__["BlogService"],
            _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"],
            _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_10__["ErrorMsgHelperService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/blogs-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: BlogsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsRoutingModule", function() { return BlogsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.ts");
/* harmony import */ var _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/Global/routes.name */ "./src/app/core/Global/routes.name.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.ts");
/* harmony import */ var _blogs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogs.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.ts");
/* harmony import */ var _core_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/guards/permissions.guard */ "./src/app/core/guards/permissions.guard.ts");
/* harmony import */ var _core_Global_permissions_permission_marketing_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/Global/permissions/permission.marketing.config */ "./src/app/core/Global/permissions/permission.marketing.config.ts");










var permission = new _core_Global_permissions_permission_marketing_config__WEBPACK_IMPORTED_MODULE_9__["PermissionMarketingConfig"]();
var routes = [
    {
        path: '',
        component: _blogs_component__WEBPACK_IMPORTED_MODULE_7__["BlogsComponent"],
        children: [
            {
                path: '',
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
            },
            {
                path: _core_Global_routes_name__WEBPACK_IMPORTED_MODULE_5__["RoutesName"].add(),
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
                canActivate: [_core_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_8__["PermissionsGuard"]],
                data: {
                    permissions: [permission.MANAGE_BLOGS],
                },
            },
            {
                path: ':id',
                component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                canActivate: [_core_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_8__["PermissionsGuard"]],
                data: {
                    permissions: [permission.MANAGE_BLOGS],
                },
            },
            { path: '**', redirectTo: '', pathMatch: '' },
        ]
    }
];
var BlogsRoutingModule = /** @class */ (function () {
    function BlogsRoutingModule() {
    }
    BlogsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BlogsRoutingModule);
    return BlogsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvTWFya2V0aW5nLU1vZHVsZS9ibG9ncy9ibG9ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-blogs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blogs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blogs.component.scss */ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/blogs.module.ts ***!
  \****************************************************************************/
/*! exports provided: BlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsModule", function() { return BlogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blogs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogs-routing.module */ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs-routing.module.ts");
/* harmony import */ var _blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogs.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/blogs.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/views/shared/shared.module.ts");
/* harmony import */ var _pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pages.module */ "./src/app/views/pages/pages.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/form.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.ts");














var BlogsModule = /** @class */ (function () {
    function BlogsModule() {
    }
    BlogsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _blogs_component__WEBPACK_IMPORTED_MODULE_4__["BlogsComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _blogs_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            ]
        })
    ], BlogsModule);
    return BlogsModule;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[hidden] {\n  display: none !important; }\n\nmat-label {\n  margin-bottom: 10px; }\n\nstrong {\n  font-size: 12px;\n  font-weight: 500; }\n\ninput, textarea {\n  border-bottom: 1px solid #0000002e; }\n\n.lang_section {\n  border: 1px solid #ddd;\n  padding: 15px;\n  margin-bottom: 2em; }\n\ninput:-moz-read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\ninput:read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jsb2dzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL211c3RhZmFfbWFtZG91aC9hbmd1bGFyX3dvcmtzcGFjZS9ib2F0LXJpZGUtY21zL3NyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jsb2dzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NDLHdCQUF3QixFQUFBOztBQUV6QjtFQUNDLG1CQUFtQixFQUFBOztBQUVwQjtFQUNDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFakI7RUFDQyxrQ0FBa0MsRUFBQTs7QUFHbkM7RUFDQyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVuQjtFQUNDLHNDQUFzQztFQUN0Qyx1QkFBdUIsRUFBQTs7QUFGeEI7RUFDQyxzQ0FBc0M7RUFDdEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tb2R1bGVzL01hcmtldGluZy1Nb2R1bGUvYmxvZ3MvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxubWF0LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG5zdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyZTsgfVxuXG4ubGFuZ19zZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtOyB9XG5cbmlucHV0OnJlYWQtb25seSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQzYiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgfVxuIiwiW2hpZGRlbl0ge1xuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5tYXQtbGFiZWwge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc3Ryb25nIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuaW5wdXQgLCB0ZXh0YXJlYSAge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDJlO1xufVxuXG4ubGFuZ19zZWN0aW9uIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0cGFkZGluZzogMTVweDtcblx0bWFyZ2luLWJvdHRvbTogMmVtO1xufVxuaW5wdXQ6cmVhZC1vbmx5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDNiICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.ts ***!
  \***********************************************************************************/
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
/* harmony import */ var _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/Marketing-Module/blog.service */ "./src/app/core/services/Marketing-Module/blog.service.ts");
/* harmony import */ var _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/services/Helpers/error.msg.helper.service */ "./src/app/core/services/Helpers/error.msg.helper.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(formBuilder, service, formErrorService, errorMsgHelperService, route, router, cdr, authNoticeService, translateService, helper) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.formErrorService = formErrorService;
        this.errorMsgHelperService = errorMsgHelperService;
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
        this.page_name = this.translateService.instant('Components.BLOGS.name');
        this.content_name = this.translateService.instant('Components.BLOGS.single');
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
            // call api to get shipping rule
            _this.service.get(_this.id).subscribe(function (data) {
                _this.model = data;
                _this.current_image = _this.model.image;
                _this.isLoadingResults = false;
                _this.is_result = true;
                _this.cdr.markForCheck();
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        this.form = this.formBuilder.group({
            name_en: [(_a = this.model.name) === null || _a === void 0 ? void 0 : _a.en, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name_ar: [(_b = this.model.name) === null || _b === void 0 ? void 0 : _b.ar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description_en: [(_c = this.model.description) === null || _c === void 0 ? void 0 : _c.en, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description_ar: [(_d = this.model.description) === null || _d === void 0 ? void 0 : _d.ar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            author: [this.model.author, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_title_en: [(_f = (_e = this.model.seo) === null || _e === void 0 ? void 0 : _e.title) === null || _f === void 0 ? void 0 : _f.en, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_title_ar: [(_h = (_g = this.model.seo) === null || _g === void 0 ? void 0 : _g.title) === null || _h === void 0 ? void 0 : _h.ar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_description_en: [(_k = (_j = this.model.seo) === null || _j === void 0 ? void 0 : _j.description) === null || _k === void 0 ? void 0 : _k.en, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_description_ar: [(_m = (_l = this.model.seo) === null || _l === void 0 ? void 0 : _l.description) === null || _m === void 0 ? void 0 : _m.ar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seo_meta_tags_en: [(_p = (_o = this.model.seo) === null || _o === void 0 ? void 0 : _o.keywords) === null || _p === void 0 ? void 0 : _p.en],
            seo_meta_tags_ar: [(_r = (_q = this.model.seo) === null || _q === void 0 ? void 0 : _q.keywords) === null || _r === void 0 ? void 0 : _r.ar],
            is_active: [this.model.is_active == true ? '1' : '0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [''],
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
            var invalid_controls = this.formErrorService.markAsTouched(controls);
            // @ts-ignore
            this.errorMsgHelperService.handleErrors(invalid_controls);
            return;
        }
        this.model.createObjects();
        this.model.name.en = controls['name_en'].value;
        this.model.name.ar = controls['name_ar'].value;
        this.model.description.en = controls['description_en'].value;
        this.model.description.ar = controls['description_ar'].value;
        this.model.is_active = controls['is_active'].value;
        this.model.author = controls['author'].value;
        this.model.seo.title.en = controls['seo_title_en'].value;
        this.model.seo.title.ar = controls['seo_title_ar'].value;
        this.model.seo.description.en = controls['seo_description_en'].value;
        this.model.seo.description.ar = controls['seo_description_ar'].value;
        this.model.seo.keywords.en = controls['seo_meta_tags_en'].value;
        this.model.seo.keywords.ar = controls['seo_meta_tags_ar'].value;
        this.model.image = controls['image'].value;
        // call service to store shipping rule
        this.isLoadingResults = true;
        this.service.update(this.model.id, this.model).subscribe(function (resp) {
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
    EditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_8__["BlogService"] },
        { type: _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"] },
        { type: _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_9__["ErrorMsgHelperService"] },
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit.component.scss */ "./src/app/views/pages/modules/Marketing-Module/blogs/edit/edit.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_8__["BlogService"],
            _core_services_FormError_service__WEBPACK_IMPORTED_MODULE_5__["FormErrorService"],
            _core_services_Helpers_error_msg_helper_service__WEBPACK_IMPORTED_MODULE_9__["ErrorMsgHelperService"],
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

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[hidden] {\n  display: none !important; }\n\nmat-label {\n  margin-bottom: 10px; }\n\nstrong {\n  font-size: 12px;\n  font-weight: 500; }\n\n.lang_section {\n  border: 1px solid #ddd;\n  padding: 15px;\n  margin-bottom: 2em; }\n\ninput:-moz-read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\ninput:read-only {\n  background-color: #dddddd3b !important;\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jsb2dzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsIi9ob21lL211c3RhZmFfbWFtZG91aC9hbmd1bGFyX3dvcmtzcGFjZS9ib2F0LXJpZGUtY21zL3NyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jsb2dzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NDLHdCQUF3QixFQUFBOztBQUV6QjtFQUNDLG1CQUFtQixFQUFBOztBQUVwQjtFQUNDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVuQjtFQUNDLHNDQUFzQztFQUN0Qyx1QkFBdUIsRUFBQTs7QUFGeEI7RUFDQyxzQ0FBc0M7RUFDdEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tb2R1bGVzL01hcmtldGluZy1Nb2R1bGUvYmxvZ3MvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxubWF0LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG5zdHJvbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLmxhbmdfc2VjdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJlbTsgfVxuXG5pbnB1dDpyZWFkLW9ubHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkM2IgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IH1cbiIsIltoaWRkZW5dIHtcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxubWF0LWxhYmVsIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbnN0cm9uZyB7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxhbmdfc2VjdGlvbiB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbmlucHV0OnJlYWQtb25seSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQzYiAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.ts ***!
  \***********************************************************************************/
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
        this.meta_tags_ar = [];
        this.meta_tags_en = [];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], FormComponent.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormComponent.prototype, "imgURL", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormComponent.prototype, "meta_tags_ar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormComponent.prototype, "meta_tags_en", void 0);
    FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./form.component.scss */ "./src/app/views/pages/modules/Marketing-Module/blogs/form/form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, th, td, tr, .mat-sort-header-container {\n  text-align: center; }\n\ntd {\n  padding: 20px !important; }\n\n@media (max-width: 670px) {\n  .example-table-container {\n    width: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211c3RhZmFfbWFtZG91aC9hbmd1bGFyX3dvcmtzcGFjZS9ib2F0LXJpZGUtY21zL3NyYy9hcHAvdmlld3MvcGFnZXMvbW9kdWxlcy9NYXJrZXRpbmctTW9kdWxlL2Jsb2dzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msd0JBQXdCLEVBQUE7O0FBSXpCO0VBRUM7SUFDQyxzQkFBc0IsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZHVsZXMvTWFya2V0aW5nLU1vZHVsZS9ibG9ncy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlICwgdGggLCB0ZCAsdHIgLC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZHtcblx0cGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xufVxuXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXG5AbWVkaWEgKG1heC13aWR0aDogNjcwcHgpIHtcblxuXHQuZXhhbXBsZS10YWJsZS1jb250YWluZXJ7XG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0fVxuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.ts ***!
  \*************************************************************************************/
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
/* harmony import */ var _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../core/services/Marketing-Module/blog.service */ "./src/app/core/services/Marketing-Module/blog.service.ts");
/* harmony import */ var _core_services_Helpers_system_permissions_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../core/services/Helpers/system.permissions.helper.service */ "./src/app/core/services/Helpers/system.permissions.helper.service.ts");
/* harmony import */ var _core_Global_permissions_permission_marketing_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../core/Global/permissions/permission.marketing.config */ "./src/app/core/Global/permissions/permission.marketing.config.ts");















var IndexComponent = /** @class */ (function () {
    function IndexComponent(cdr, service, systemPermissionsHelperService, authNoticeService, translateService, router, helper) {
        this.cdr = cdr;
        this.service = service;
        this.systemPermissionsHelperService = systemPermissionsHelperService;
        this.authNoticeService = authNoticeService;
        this.translateService = translateService;
        this.router = router;
        this.helper = helper;
        this.displayedColumns = ['id', 'name', 'image', 'is_active', 'options'];
        this.isLoadingResults = true;
        // pagination variables
        this.resultsLength = 0;
        this.pageIndex = 0;
        //filter variables
        this.headerParams = {
            active: null,
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
        var permissions = new _core_Global_permissions_permission_marketing_config__WEBPACK_IMPORTED_MODULE_14__["PermissionMarketingConfig"]();
        this.page_name = this.translateService.instant('Components.BLOGS.name');
        this.content_name = this.translateService.instant('Components.BLOGS.single');
        this.can_manage = this.systemPermissionsHelperService.checkPermissions([permissions.MANAGE_BLOGS]);
        this.can_delete = this.systemPermissionsHelperService.checkPermissions([permissions.DELETE_BLOGS]);
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
        return _core_Global_section_icons_name__WEBPACK_IMPORTED_MODULE_10__["SectionIconsName"].services();
    };
    IndexComponent.prototype.displayContent = function (text) {
        return (text.length > 70) ? text.substring(0, 70) + ' ......' : text;
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_12__["BlogService"] },
        { type: _core_services_Helpers_system_permissions_helper_service__WEBPACK_IMPORTED_MODULE_13__["SystemPermissionsHelperService"] },
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./index.component.scss */ "./src/app/views/pages/modules/Marketing-Module/blogs/index/index.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_services_Marketing_Module_blog_service__WEBPACK_IMPORTED_MODULE_12__["BlogService"],
            _core_services_Helpers_system_permissions_helper_service__WEBPACK_IMPORTED_MODULE_13__["SystemPermissionsHelperService"],
            _core_services_auth_notice_service__WEBPACK_IMPORTED_MODULE_7__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-modules-Marketing-Module-blogs-blogs-module.js.map