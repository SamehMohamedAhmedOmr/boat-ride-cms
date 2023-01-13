(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-pages-modules-Yacht-Module-yacht-reservation-yacht-reservation-module~views-pages-modu~c9b950f6"],{

/***/ "./src/app/core/Serializers/Yacht-Module/yachts.enum.serializer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/Serializers/Yacht-Module/yachts.enum.serializer.ts ***!
  \*************************************************************************/
/*! exports provided: YachtsEnumSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YachtsEnumSerializer", function() { return YachtsEnumSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Yacht_Module_yachts_enums_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Yacht-Module/yachts.enums.model */ "./src/app/core/models/Yacht-Module/yachts.enums.model.ts");



var YachtsEnumSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YachtsEnumSerializer, _super);
    function YachtsEnumSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YachtsEnumSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    YachtsEnumSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    YachtsEnumSerializer.prototype.toJson = function (model) {
        return null;
    };
    YachtsEnumSerializer.prototype.toFormData = function (object) {
        return null;
    };
    YachtsEnumSerializer.prototype.adapt = function (item) {
        var model = new _models_Yacht_Module_yachts_enums_model__WEBPACK_IMPORTED_MODULE_2__["YachtsEnumsModel"](item.id);
        model.engine_types = item.engine_types;
        model.fuel_types = item.fuel_types;
        model.hull_types = item.hull_types;
        model.yacht_status = item.yacht_status;
        model.yacht_types = item.yacht_types;
        return model;
    };
    YachtsEnumSerializer.prototype.status = function (status) {
        return {};
    };
    return YachtsEnumSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/Serializers/Yacht-Module/yachts.serializer.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/Serializers/Yacht-Module/yachts.serializer.ts ***!
  \********************************************************************/
/*! exports provided: YachtsSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YachtsSerializer", function() { return YachtsSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Yacht_Module_yachts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Yacht-Module/yachts.model */ "./src/app/core/models/Yacht-Module/yachts.model.ts");



var YachtsSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YachtsSerializer, _super);
    function YachtsSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YachtsSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    YachtsSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    YachtsSerializer.prototype.toJson = function (model) {
        var object = {
            /* Basic Information*/
            'id': model.id,
            'name': model.name,
            'type': model.type,
            'code': model.code,
            'color': model.color,
            'passenger_capacity': model.passenger_capacity,
            'size': model.size,
            'no_of_captain': model.no_of_captain,
            'crew_members': model.crew_members,
            'facilities': model.facilities,
            'what_is_included': model.what_is_included,
            'what_expect_description': model.what_expect_description,
            'seo': model.seo,
            'corporate_company': model.corporate_company,
            'corporate_price': model.corporate_price,
            'selling_per_hour': model.selling_per_hour,
            'yacht_special_price': model.yacht_special_price,
            'minimum_hours_booking': model.minimum_hours_booking,
            'apply_vat': model.apply_vat,
            'status': model.status,
            'beds': model.beds,
            /* Key Feature*/
            'water_slider': model.water_slider,
            'safety_equipment': model.safety_equipment,
            'soft_drinks_refreshments': model.soft_drinks_refreshments,
            'swimming_equipment': model.swimming_equipment,
            'ice_tea_water': model.ice_tea_water,
            'DVD_player': model.DVD_player,
            'satellite_system': model.satellite_system,
            'red_carpet_on_arrival': model.red_carpet_on_arrival,
            'spacious_saloon': model.spacious_saloon,
            'BBQ_grill_equipment': model.BBQ_grill_equipment,
            'fresh_towels': model.fresh_towels,
            'yacht_slippers': model.yacht_slippers,
            'bathroom_amenities': model.bathroom_amenities,
            'under_water_light': model.under_water_light,
            'LED_screen_tv': model.LED_screen_tv,
            'sunbathing_on_the_foredeck': model.sunbathing_on_the_foredeck,
            'fishing_equipment': model.fishing_equipment,
        };
        if (model.services) {
            object['services'] = model.services;
        }
        if (model.images) {
            object['images'] = model.images;
        }
        if (model.banner_image) {
            object['banner'] = model.banner_image;
        }
        // Technical fields
        object = this.handleTechnicalFields(model, object);
        return object;
    };
    YachtsSerializer.prototype.handleTechnicalFields = function (model, object) {
        if (model.manufacturer) {
            object['manufacturer'] = model.manufacturer;
        }
        if (model.fuel_type) {
            object['fuel_type'] = model.fuel_type;
        }
        if (model.hull_type) {
            object['hull_type'] = model.hull_type;
        }
        if (model.engine_type) {
            object['engine_type'] = model.engine_type;
        }
        if (model.horse_Power) {
            object['horse_Power'] = model.horse_Power;
        }
        if (model.max_speed) {
            object['max_speed'] = model.max_speed;
        }
        if (model.cruising_speed) {
            object['cruising_speed'] = model.cruising_speed;
        }
        if (model.length) {
            object['length'] = model.length;
        }
        if (model.beam) {
            object['beam'] = model.beam;
        }
        if (model.model) {
            object['model'] = model.model;
        }
        if (model.year) {
            object['year'] = model.year;
        }
        return object;
    };
    YachtsSerializer.prototype.toFormData = function (object) {
        return null;
    };
    YachtsSerializer.prototype.adapt = function (item) {
        var model = new _models_Yacht_Module_yachts_model__WEBPACK_IMPORTED_MODULE_2__["YachtsModel"](item.id);
        /* Basic Information*/
        model.name = item.name;
        model.yacht_name = item.name;
        model.type = item.type;
        model.code = item.code;
        model.color = item.color;
        model.banner_image = item.banner_image;
        model.banner_thumbnail = item.banner_thumbnail;
        model.passenger_capacity = item.passenger_capacity;
        model.size = item.size;
        model.no_of_captain = item.no_of_captain;
        model.crew_members = item.crew_members;
        model.facilities = item.facilities;
        model.what_is_included = item.what_is_included;
        model.what_expect_description = item.what_expect_description;
        model.seo = item.seo;
        model.corporate_company = item.corporate_company;
        model.corporate_price = item.corporate_price;
        model.selling_per_hour = item.selling_per_hour;
        model.yacht_special_price = item.yacht_special_price;
        model.minimum_hours_booking = item.minimum_hours_booking;
        model.apply_vat = item.apply_vat;
        model.status = item.status;
        model.status_name = item.status_name;
        model.beds = item.beds;
        model.model = item.model;
        model.year = item.year;
        /* Technical Information*/
        model.manufacturer = item.manufacturer;
        model.fuel_type = item.fuel_type;
        model.hull_type = item.hull_type;
        model.engine_type = item.engine_type;
        model.horse_Power = item.horse_Power;
        model.max_speed = item.max_speed;
        model.cruising_speed = item.cruising_speed;
        model.length = item.length;
        model.beam = item.beam;
        /* Additional Information*/
        model.services = item.services;
        model.images = item.images;
        /* Key Feature*/
        model.water_slider = item.water_slider;
        model.safety_equipment = item.safety_equipment;
        model.soft_drinks_refreshments = item.soft_drinks_refreshments;
        model.swimming_equipment = item.swimming_equipment;
        model.ice_tea_water = item.ice_tea_water;
        model.DVD_player = item.DVD_player;
        model.satellite_system = item.satellite_system;
        model.red_carpet_on_arrival = item.red_carpet_on_arrival;
        model.spacious_saloon = item.spacious_saloon;
        model.BBQ_grill_equipment = item.BBQ_grill_equipment;
        model.fresh_towels = item.fresh_towels;
        model.yacht_slippers = item.yacht_slippers;
        model.bathroom_amenities = item.bathroom_amenities;
        model.under_water_light = item.under_water_light;
        model.LED_screen_tv = item.LED_screen_tv;
        model.sunbathing_on_the_foredeck = item.sunbathing_on_the_foredeck;
        model.fishing_equipment = item.fishing_equipment;
        return model;
    };
    YachtsSerializer.prototype.status = function (status) {
        return {
            'is_active': status,
        };
    };
    return YachtsSerializer;
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

/***/ "./src/app/core/models/Yacht-Module/yachts.enums.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/models/Yacht-Module/yachts.enums.model.ts ***!
  \****************************************************************/
/*! exports provided: YachtsEnumsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YachtsEnumsModel", function() { return YachtsEnumsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");


var YachtsEnumsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YachtsEnumsModel, _super);
    function YachtsEnumsModel(id) {
        return _super.call(this, id) || this;
    }
    YachtsEnumsModel.prototype.list = function () {
        return {
            'id': this.id,
        };
    };
    return YachtsEnumsModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/models/Yacht-Module/yachts.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/models/Yacht-Module/yachts.model.ts ***!
  \**********************************************************/
/*! exports provided: YachtsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YachtsModel", function() { return YachtsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");
/* harmony import */ var _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/multi.language.model */ "./src/app/core/models/Base/multi.language.model.ts");
/* harmony import */ var _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SEO-Module/seo.model */ "./src/app/core/models/SEO-Module/seo.model.ts");




var YachtsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YachtsModel, _super);
    function YachtsModel(id) {
        var _this = _super.call(this, id) || this;
        _this.createObjects();
        return _this;
    }
    YachtsModel.prototype.list = function () {
        var _a;
        return {
            'id': this.id,
            'name': this.name,
            'yacht_name': this.yacht_name,
            // @ts-ignore
            'image': ((_a = this === null || this === void 0 ? void 0 : this.images) === null || _a === void 0 ? void 0 : _a.length) ? this.images[0].image : '',
            'selling_per_hour': this.selling_per_hour,
            'status': this.status_name,
            'yacht_special_price': this.yacht_special_price,
            'minimum_hours_booking': this.minimum_hours_booking,
        };
    };
    YachtsModel.prototype.createObjects = function () {
        this.name = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.facilities = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.what_is_included = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.what_expect_description = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.seo = new _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__["SeoModel"](null);
    };
    return YachtsModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/services/Yacht-Module/yachts/yachts.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/services/Yacht-Module/yachts/yachts.service.ts ***!
  \*********************************************************************/
/*! exports provided: YachtsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YachtsService", function() { return YachtsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Base_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Base/base.service */ "./src/app/core/services/Base/base.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Serializers_Yacht_Module_yachts_serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Serializers/Yacht-Module/yachts.serializer */ "./src/app/core/Serializers/Yacht-Module/yachts.serializer.ts");
/* harmony import */ var _Serializers_Yacht_Module_yachts_enum_serializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Serializers/Yacht-Module/yachts.enum.serializer */ "./src/app/core/Serializers/Yacht-Module/yachts.enum.serializer.ts");








var YachtsService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(YachtsService, _super);
    function YachtsService(Http) {
        return _super.call(this, Http, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url(), 'admins/yachts', new _Serializers_Yacht_Module_yachts_serializer__WEBPACK_IMPORTED_MODULE_6__["YachtsSerializer"]()) || this;
    }
    YachtsService.prototype.listEnums = function () {
        var serializer = new _Serializers_Yacht_Module_yachts_enum_serializer__WEBPACK_IMPORTED_MODULE_7__["YachtsEnumSerializer"]();
        return this.http.get("" + this.url + this.endpoint + "/list-enums")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return serializer.fromJson(data); }));
    };
    YachtsService.prototype.deleteImage = function (id) {
        return this.http
            .delete("" + this.url + this.endpoint + "/delete/image/" + id);
    };
    YachtsService.prototype.prepareObject = function (model, controls) {
        /* Basic Information*/
        model.name.en = controls['name_en'].value;
        model.name.ar = controls['name_ar'].value;
        model.facilities.en = controls['facilities_en'].value;
        model.facilities.ar = controls['facilities_ar'].value;
        model.what_is_included.en = controls['what_is_included_en'].value;
        model.what_is_included.ar = controls['what_is_included_ar'].value;
        model.what_expect_description.en = controls['what_expect_description_en'].value;
        model.what_expect_description.ar = controls['what_expect_description_ar'].value;
        model.seo.title.en = controls['seo_title_en'].value;
        model.seo.title.ar = controls['seo_title_ar'].value;
        model.seo.description.en = controls['seo_description_en'].value;
        model.seo.description.ar = controls['seo_description_ar'].value;
        model.seo.keywords.en = controls['seo_meta_tags_en'].value;
        model.seo.keywords.ar = controls['seo_meta_tags_ar'].value;
        model.banner_image = controls['banner_image'].value;
        model.type = controls['type'].value;
        model.code = controls['code'].value;
        model.color = controls['color'].value;
        model.passenger_capacity = controls['passenger_capacity'].value;
        model.size = controls['size'].value;
        model.no_of_captain = controls['no_of_captain'].value;
        model.crew_members = controls['crew_members'].value;
        model.corporate_company = controls['corporate_company'].value;
        model.corporate_price = controls['corporate_price'].value;
        model.selling_per_hour = controls['selling_per_hour'].value;
        model.yacht_special_price = controls['yacht_special_price'].value;
        model.minimum_hours_booking = controls['minimum_hours_booking'].value;
        model.apply_vat = controls['apply_vat'].value;
        model.status = controls['status'].value;
        model.beds = controls['beds'].value;
        model.services = controls['services'].value;
        model.images = controls['images'].value;
        /* Technical Information*/
        model.manufacturer = controls['manufacturer'].value;
        model.fuel_type = controls['fuel_type'].value;
        model.hull_type = controls['hull_type'].value;
        model.engine_type = controls['engine_type'].value;
        model.horse_Power = controls['horse_Power'].value;
        model.max_speed = controls['max_speed'].value;
        model.cruising_speed = controls['cruising_speed'].value;
        model.length = controls['length'].value;
        model.beam = controls['beam'].value;
        model.model = controls['model'].value;
        model.year = controls['year'].value;
        /* Key Feature*/
        model.water_slider = controls['water_slider'].value;
        model.safety_equipment = controls['safety_equipment'].value;
        model.soft_drinks_refreshments = controls['soft_drinks_refreshments'].value;
        model.swimming_equipment = controls['swimming_equipment'].value;
        model.ice_tea_water = controls['ice_tea_water'].value;
        model.DVD_player = controls['DVD_player'].value;
        model.satellite_system = controls['satellite_system'].value;
        model.red_carpet_on_arrival = controls['red_carpet_on_arrival'].value;
        model.spacious_saloon = controls['spacious_saloon'].value;
        model.BBQ_grill_equipment = controls['BBQ_grill_equipment'].value;
        model.fresh_towels = controls['fresh_towels'].value;
        model.yacht_slippers = controls['yacht_slippers'].value;
        model.bathroom_amenities = controls['bathroom_amenities'].value;
        model.under_water_light = controls['under_water_light'].value;
        model.LED_screen_tv = controls['LED_screen_tv'].value;
        model.sunbathing_on_the_foredeck = controls['sunbathing_on_the_foredeck'].value;
        model.fishing_equipment = controls['fishing_equipment'].value;
        return model;
    };
    YachtsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    YachtsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], YachtsService);
    return YachtsService;
}(_Base_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=default~views-pages-modules-Yacht-Module-yacht-reservation-yacht-reservation-module~views-pages-modu~c9b950f6.js.map