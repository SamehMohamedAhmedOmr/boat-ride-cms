(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-pages-modules-Water-Sports-Module-water-sports-reservation-water-sports-reservation-mo~ad9cb744"],{

/***/ "./src/app/core/Serializers/Water-Sport-Module/water.sports.enum.serializer.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/core/Serializers/Water-Sport-Module/water.sports.enum.serializer.ts ***!
  \*************************************************************************************/
/*! exports provided: WaterSportsEnumSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterSportsEnumSerializer", function() { return WaterSportsEnumSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Water_Sport_Module_water_sports_enums_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Water-Sport-Module/water.sports.enums.model */ "./src/app/core/models/Water-Sport-Module/water.sports.enums.model.ts");



var WaterSportsEnumSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WaterSportsEnumSerializer, _super);
    function WaterSportsEnumSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WaterSportsEnumSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    WaterSportsEnumSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    WaterSportsEnumSerializer.prototype.toJson = function (model) {
        return null;
    };
    WaterSportsEnumSerializer.prototype.toFormData = function (object) {
        return null;
    };
    WaterSportsEnumSerializer.prototype.adapt = function (item) {
        var model = new _models_Water_Sport_Module_water_sports_enums_model__WEBPACK_IMPORTED_MODULE_2__["WaterSportsEnumsModel"](item.id);
        model.water_sport_status = item.water_sport_status;
        return model;
    };
    WaterSportsEnumSerializer.prototype.status = function (status) {
        return {};
    };
    return WaterSportsEnumSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/Serializers/Water-Sport-Module/water.sports.serializer.ts":
/*!********************************************************************************!*\
  !*** ./src/app/core/Serializers/Water-Sport-Module/water.sports.serializer.ts ***!
  \********************************************************************************/
/*! exports provided: WaterSportsSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterSportsSerializer", function() { return WaterSportsSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Water_Sport_Module_water_sports_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Water-Sport-Module/water.sports.model */ "./src/app/core/models/Water-Sport-Module/water.sports.model.ts");



var WaterSportsSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WaterSportsSerializer, _super);
    function WaterSportsSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WaterSportsSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    WaterSportsSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    WaterSportsSerializer.prototype.toJson = function (model) {
        var object = {
            /* Basic Information*/
            'id': model.id,
            'name': model.name,
            'code': model.code,
            'color': model.color,
            'routes': model.routes,
            'water_sport_description': model.water_sport_description,
            'what_to_expect_description': model.what_to_expect_description,
            'location': model.location,
            'seo': model.seo,
            'corporate_company': model.corporate_company,
            'corporate_price': model.corporate_price,
            'selling_per_hour': model.selling_per_hour,
            'special_price': model.special_price,
            'minimum_booking': model.minimum_booking,
            'apply_vat': model.apply_vat,
            'status': model.status,
        };
        if (model.images) {
            object['images'] = model.images;
        }
        if (model.banner_image) {
            object['banner'] = model.banner_image;
        }
        return object;
    };
    WaterSportsSerializer.prototype.toFormData = function (object) {
        return null;
    };
    WaterSportsSerializer.prototype.adapt = function (item) {
        var model = new _models_Water_Sport_Module_water_sports_model__WEBPACK_IMPORTED_MODULE_2__["WaterSportsModel"](item.id);
        /* Basic Information*/
        model.name = item.name;
        model.water_sport_name = item.name;
        model.code = item.code;
        model.color = item.color;
        model.routes = item.routes;
        model.location = item.location;
        model.water_sport_description = item.water_sport_description;
        model.what_to_expect_description = item.what_to_expect_description;
        model.seo = item.seo;
        model.corporate_company = item.corporate_company;
        model.corporate_price = item.corporate_price;
        model.selling_per_hour = item.selling_per_hour;
        model.special_price = item.special_price;
        model.minimum_booking = item.minimum_booking;
        model.apply_vat = item.apply_vat;
        model.status = item.status;
        model.status_name = item.status_name;
        model.images = item.images;
        model.banner_image = item.banner_image;
        return model;
    };
    WaterSportsSerializer.prototype.status = function (status) {
        return {
            'is_active': status,
        };
    };
    return WaterSportsSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



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

/***/ "./src/app/core/models/Water-Sport-Module/water.sports.enums.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/models/Water-Sport-Module/water.sports.enums.model.ts ***!
  \****************************************************************************/
/*! exports provided: WaterSportsEnumsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterSportsEnumsModel", function() { return WaterSportsEnumsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");


var WaterSportsEnumsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WaterSportsEnumsModel, _super);
    function WaterSportsEnumsModel(id) {
        return _super.call(this, id) || this;
    }
    WaterSportsEnumsModel.prototype.list = function () {
        return {
            'id': this.id,
        };
    };
    return WaterSportsEnumsModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/models/Water-Sport-Module/water.sports.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/models/Water-Sport-Module/water.sports.model.ts ***!
  \**********************************************************************/
/*! exports provided: WaterSportsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterSportsModel", function() { return WaterSportsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");
/* harmony import */ var _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/multi.language.model */ "./src/app/core/models/Base/multi.language.model.ts");
/* harmony import */ var _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SEO-Module/seo.model */ "./src/app/core/models/SEO-Module/seo.model.ts");




var WaterSportsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WaterSportsModel, _super);
    function WaterSportsModel(id) {
        var _this = _super.call(this, id) || this;
        _this.createObjects();
        return _this;
    }
    WaterSportsModel.prototype.list = function () {
        var _a;
        return {
            'id': this.id,
            'name': this.name,
            'water_sport_name': this.name,
            // @ts-ignore
            'image': ((_a = this === null || this === void 0 ? void 0 : this.images) === null || _a === void 0 ? void 0 : _a.length) ? this.images[0].image : '',
            'selling_per_hour': this.selling_per_hour,
            'status': this.status_name,
        };
    };
    WaterSportsModel.prototype.createObjects = function () {
        this.name = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.water_sport_description = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.routes = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.what_to_expect_description = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.location = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.seo = new _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__["SeoModel"](null);
    };
    return WaterSportsModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/services/Water-Sport-Module/Water-Sport/water.sports.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/core/services/Water-Sport-Module/Water-Sport/water.sports.service.ts ***!
  \**************************************************************************************/
/*! exports provided: WaterSportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterSportsService", function() { return WaterSportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Base_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Base/base.service */ "./src/app/core/services/Base/base.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Serializers_Water_Sport_Module_water_sports_serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Serializers/Water-Sport-Module/water.sports.serializer */ "./src/app/core/Serializers/Water-Sport-Module/water.sports.serializer.ts");
/* harmony import */ var _Serializers_Water_Sport_Module_water_sports_enum_serializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Serializers/Water-Sport-Module/water.sports.enum.serializer */ "./src/app/core/Serializers/Water-Sport-Module/water.sports.enum.serializer.ts");








var WaterSportsService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WaterSportsService, _super);
    function WaterSportsService(Http) {
        return _super.call(this, Http, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url(), 'admins/water_sports', new _Serializers_Water_Sport_Module_water_sports_serializer__WEBPACK_IMPORTED_MODULE_6__["WaterSportsSerializer"]()) || this;
    }
    WaterSportsService.prototype.listEnums = function () {
        var serializer = new _Serializers_Water_Sport_Module_water_sports_enum_serializer__WEBPACK_IMPORTED_MODULE_7__["WaterSportsEnumSerializer"]();
        return this.http.get("" + this.url + this.endpoint + "/list-enums")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return serializer.fromJson(data); }));
    };
    WaterSportsService.prototype.deleteImage = function (id) {
        return this.http
            .delete("" + this.url + this.endpoint + "/delete/image/" + id);
    };
    WaterSportsService.prototype.prepareObject = function (model, controls) {
        /* Basic Information*/
        model.name.en = controls['name_en'].value;
        model.name.ar = controls['name_ar'].value;
        model.water_sport_description.en = controls['water_sport_description_en'].value;
        model.water_sport_description.ar = controls['water_sport_descriptions_ar'].value;
        model.routes.en = controls['routes_en'].value;
        model.routes.ar = controls['routes_ar'].value;
        model.what_to_expect_description.en = controls['what_expect_description_en'].value;
        model.what_to_expect_description.ar = controls['what_expect_description_ar'].value;
        model.location.en = controls['location_en'].value;
        model.location.ar = controls['location_ar'].value;
        model.seo.title.en = controls['seo_title_en'].value;
        model.seo.title.ar = controls['seo_title_ar'].value;
        model.seo.description.en = controls['seo_description_en'].value;
        model.seo.description.ar = controls['seo_description_ar'].value;
        model.seo.keywords.en = controls['seo_meta_tags_en'].value;
        model.seo.keywords.ar = controls['seo_meta_tags_ar'].value;
        model.code = controls['code'].value;
        model.color = controls['color'].value;
        model.corporate_company = controls['corporate_company'].value;
        model.corporate_price = controls['corporate_price'].value;
        model.selling_per_hour = controls['selling_per_hour'].value;
        model.special_price = controls['special_price'].value;
        model.minimum_booking = controls['minimum_hours_booking'].value;
        model.apply_vat = controls['apply_vat'].value;
        model.status = controls['status'].value;
        model.images = controls['images'].value;
        model.banner_image = controls['banner_image'].value;
        return model;
    };
    WaterSportsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    WaterSportsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WaterSportsService);
    return WaterSportsService;
}(_Base_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=default~views-pages-modules-Water-Sports-Module-water-sports-reservation-water-sports-reservation-mo~ad9cb744.js.map