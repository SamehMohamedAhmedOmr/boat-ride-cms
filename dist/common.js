(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/Serializers/Marketing-Module/services.enum.serializer.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/Serializers/Marketing-Module/services.enum.serializer.ts ***!
  \*******************************************************************************/
/*! exports provided: ServicesEnumSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesEnumSerializer", function() { return ServicesEnumSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Marketing_Module_services_enums_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Marketing-Module/services.enums.model */ "./src/app/core/models/Marketing-Module/services.enums.model.ts");



var ServicesEnumSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServicesEnumSerializer, _super);
    function ServicesEnumSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServicesEnumSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    ServicesEnumSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    ServicesEnumSerializer.prototype.toJson = function (model) {
        return null;
    };
    ServicesEnumSerializer.prototype.toFormData = function (object) {
        return null;
    };
    ServicesEnumSerializer.prototype.adapt = function (item) {
        var model = new _models_Marketing_Module_services_enums_model__WEBPACK_IMPORTED_MODULE_2__["ServicesEnumsModel"](item.id);
        model.price_models = item.price_models;
        return model;
    };
    ServicesEnumSerializer.prototype.status = function (status) {
        return {};
    };
    return ServicesEnumSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/Serializers/Marketing-Module/services.serializer.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/Serializers/Marketing-Module/services.serializer.ts ***!
  \**************************************************************************/
/*! exports provided: ServicesSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesSerializer", function() { return ServicesSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Marketing_Module_services_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Marketing-Module/services.model */ "./src/app/core/models/Marketing-Module/services.model.ts");



var ServicesSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServicesSerializer, _super);
    function ServicesSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServicesSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    ServicesSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    ServicesSerializer.prototype.toJson = function (model) {
        var object = {
            'id': model.id,
            'name': model.name,
            'description': model.description,
            'price': model.price,
            'price_model': model.price_model,
            'minimum_hours_booking': model.minimum_hours_booking,
            'max_quantity': model.max_quantity,
            'seo': model.seo,
        };
        if (model.image) {
            object['image'] = model.image;
        }
        return object;
    };
    ServicesSerializer.prototype.toFormData = function (object) {
        return null;
    };
    ServicesSerializer.prototype.adapt = function (item) {
        var model = new _models_Marketing_Module_services_model__WEBPACK_IMPORTED_MODULE_2__["ServicesModel"](item.id);
        model.name = item.name;
        model.description = item.description;
        model.price = item.price;
        model.price_model = item.price_model;
        model.minimum_hours_booking = item.minimum_hours_booking;
        model.max_quantity = item.max_quantity;
        model.seo = item.seo;
        model.image = item.image;
        return model;
    };
    ServicesSerializer.prototype.status = function (status) {
        return {
            'is_active': status,
        };
    };
    return ServicesSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/Serializers/Setting/dashboard.serializer.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/Serializers/Setting/dashboard.serializer.ts ***!
  \******************************************************************/
/*! exports provided: DashboardSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSerializer", function() { return DashboardSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Settings/dashboard.model */ "./src/app/core/models/Settings/dashboard.model.ts");



var DashboardSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DashboardSerializer, _super);
    function DashboardSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    DashboardSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    DashboardSerializer.prototype.toJson = function (model) {
        return {};
    };
    DashboardSerializer.prototype.toFormData = function (object) {
        return null;
    };
    DashboardSerializer.prototype.adapt = function (item) {
        var model = new _models_Settings_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardModel"](null);
        model.yacht_count = item.yacht_count;
        model.water_sport_count = item.water_sport_count;
        model.yacht_reserved_trips_count = item.yacht_reserved_trips_count;
        model.yacht_confirmed_trips_count = item.yacht_confirmed_trips_count;
        model.water_sport_reserved_trips = item.water_sport_reserved_trips;
        model.water_sport_confirmed_trips = item.water_sport_confirmed_trips;
        model.settings = item.settings;
        return model;
    };
    DashboardSerializer.prototype.status = function (status) {
        return {
            'is_active': status,
        };
    };
    return DashboardSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/Serializers/Setting/settings.serializer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/Serializers/Setting/settings.serializer.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsSerializer", function() { return SettingsSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/Base.serializer */ "./src/app/core/Serializers/Base/Base.serializer.ts");
/* harmony import */ var _models_Settings_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Settings/settings.model */ "./src/app/core/models/Settings/settings.model.ts");



var SettingsSerializer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SettingsSerializer, _super);
    function SettingsSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsSerializer.prototype.fromJson = function (json) {
        return this.adapt(json.body);
    };
    SettingsSerializer.prototype.fromJsonList = function (json) {
        return this.adaptList(json.body, json.pagination);
    };
    SettingsSerializer.prototype.toJson = function (model) {
        var obj = {
            'id': model.id,
            'enable_coming_soon': model.enable_coming_soon,
        };
        if (model.whatsapp_number) {
            obj['whatsapp_number'] = model.whatsapp_number;
        }
        return obj;
    };
    SettingsSerializer.prototype.toFormData = function (object) {
        return null;
    };
    SettingsSerializer.prototype.adapt = function (item) {
        var model = new _models_Settings_settings_model__WEBPACK_IMPORTED_MODULE_2__["SettingsModel"](item.id);
        model.enable_coming_soon = item.enable_coming_soon;
        return model;
    };
    SettingsSerializer.prototype.status = function (status) {
        return {};
    };
    return SettingsSerializer;
}(_Base_Base_serializer__WEBPACK_IMPORTED_MODULE_1__["BaseSerializer"]));



/***/ }),

/***/ "./src/app/core/models/Marketing-Module/services.enums.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/models/Marketing-Module/services.enums.model.ts ***!
  \**********************************************************************/
/*! exports provided: ServicesEnumsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesEnumsModel", function() { return ServicesEnumsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");


var ServicesEnumsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServicesEnumsModel, _super);
    function ServicesEnumsModel(id) {
        return _super.call(this, id) || this;
    }
    ServicesEnumsModel.prototype.list = function () {
        return {
            'id': this.id,
            'price_models': this.price_models,
        };
    };
    return ServicesEnumsModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/models/Marketing-Module/services.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/models/Marketing-Module/services.model.ts ***!
  \****************************************************************/
/*! exports provided: ServicesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModel", function() { return ServicesModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");
/* harmony import */ var _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/multi.language.model */ "./src/app/core/models/Base/multi.language.model.ts");
/* harmony import */ var _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SEO-Module/seo.model */ "./src/app/core/models/SEO-Module/seo.model.ts");




var ServicesModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServicesModel, _super);
    function ServicesModel(id) {
        var _this = _super.call(this, id) || this;
        _this.createObjects();
        return _this;
    }
    ServicesModel.prototype.list = function () {
        return {
            'id': this.id,
            'name': this.name,
            'description': this.description,
            'price': this.price,
            'price_model': this.price_model,
            'minimum_hours_booking': this.minimum_hours_booking,
            'max_quantity': this.max_quantity,
            'image': this.image,
        };
    };
    ServicesModel.prototype.createObjects = function () {
        this.name = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.description = new _Base_multi_language_model__WEBPACK_IMPORTED_MODULE_2__["MultiLanguageModel"]();
        this.seo = new _SEO_Module_seo_model__WEBPACK_IMPORTED_MODULE_3__["SeoModel"](null);
    };
    return ServicesModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/models/Settings/dashboard.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/models/Settings/dashboard.model.ts ***!
  \*********************************************************/
/*! exports provided: DashboardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModel", function() { return DashboardModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");


var DashboardModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DashboardModel, _super);
    function DashboardModel(id) {
        return _super.call(this, id) || this;
    }
    DashboardModel.prototype.list = function () {
        return {};
    };
    return DashboardModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/models/Settings/settings.model.ts":
/*!********************************************************!*\
  !*** ./src/app/core/models/Settings/settings.model.ts ***!
  \********************************************************/
/*! exports provided: SettingsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModel", function() { return SettingsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base_base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/base.model */ "./src/app/core/models/Base/base.model.ts");


var SettingsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SettingsModel, _super);
    function SettingsModel(id) {
        return _super.call(this, id) || this;
    }
    SettingsModel.prototype.list = function () {
        return {
            'id': this.id,
            'enable_coming_soon': this.enable_coming_soon,
            'whatsapp_number': this.whatsapp_number
        };
    };
    return SettingsModel;
}(_Base_base_model__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/core/services/Helpers/time.slots.helper.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/services/Helpers/time.slots.helper.service.ts ***!
  \********************************************************************/
/*! exports provided: TimeSlotsHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSlotsHelperService", function() { return TimeSlotsHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var TimeSlotsHelperService = /** @class */ (function () {
    function TimeSlotsHelperService(datePipe) {
        this.datePipe = datePipe;
    }
    TimeSlotsHelperService.prototype.checkDate = function (slot, now, current_date) {
        var target_date = new Date(current_date + ' 00:00:00');
        var target_current_date = new Date(now.toDateString());
        if (target_date > target_current_date) {
            return (slot.status == 'AVAILABLE') ? 'available' : 'booked';
        }
        else if (target_date < target_current_date) {
            if (slot.status == 'UNAVAILABLE') {
                return 'booked';
            }
            return 'past';
        }
        var times = slot.time.split(':');
        var date = new Date();
        date.setHours(Number(times[0]), Number(times[1]), Number(times[2]));
        if (slot.status == 'UNAVAILABLE') {
            return 'booked';
        }
        return (date <= now) ? 'past' : 'available';
    };
    TimeSlotsHelperService.prototype.transformDate = function (date) {
        return this.datePipe.transform(date, 'yyyy-MM-dd');
    };
    TimeSlotsHelperService.prototype.differenceBetweenDates = function (start_date, start_hour, end_date, end_hour) {
        var start_trip_date = new Date(start_date + ' ' + start_hour);
        var end_trip_date = new Date(end_date + ' ' + end_hour);
        // @ts-ignore
        var diffInMilliseconds = Math.abs(start_trip_date - end_trip_date);
        return diffInMilliseconds / 3600000;
    };
    TimeSlotsHelperService.transformListDate = function (date) {
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
        return datePipe.transform(date, 'MMM d, y, h:mm a');
    };
    TimeSlotsHelperService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    TimeSlotsHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], TimeSlotsHelperService);
    return TimeSlotsHelperService;
}());



/***/ }),

/***/ "./src/app/core/services/Marketing-Module/services.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/services/Marketing-Module/services.service.ts ***!
  \********************************************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Base/base.service */ "./src/app/core/services/Base/base.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Serializers_Marketing_Module_services_serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Serializers/Marketing-Module/services.serializer */ "./src/app/core/Serializers/Marketing-Module/services.serializer.ts");
/* harmony import */ var _Serializers_Marketing_Module_services_enum_serializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Serializers/Marketing-Module/services.enum.serializer */ "./src/app/core/Serializers/Marketing-Module/services.enum.serializer.ts");








var ServicesService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServicesService, _super);
    function ServicesService(Http) {
        return _super.call(this, Http, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url(), 'admins/services', new _Serializers_Marketing_Module_services_serializer__WEBPACK_IMPORTED_MODULE_6__["ServicesSerializer"]()) || this;
    }
    ServicesService.prototype.listEnums = function () {
        var serializer = new _Serializers_Marketing_Module_services_enum_serializer__WEBPACK_IMPORTED_MODULE_7__["ServicesEnumSerializer"]();
        return this.http.get("" + this.url + this.endpoint + "/list-enums")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return serializer.fromJson(data); }));
    };
    ServicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ServicesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
}(_Base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/core/services/Setting/dashboard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/Setting/dashboard.service.ts ***!
  \************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Serializers_Setting_dashboard_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Serializers/Setting/dashboard.serializer */ "./src/app/core/Serializers/Setting/dashboard.serializer.ts");
/* harmony import */ var _Serializers_Setting_settings_serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Serializers/Setting/settings.serializer */ "./src/app/core/Serializers/Setting/settings.serializer.ts");







var DashboardService = /** @class */ (function () {
    function DashboardService(Http) {
        this.http = Http;
        this.endpoint = 'admins/dashboard-report';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url();
        this.serializer = new _Serializers_Setting_dashboard_serializer__WEBPACK_IMPORTED_MODULE_5__["DashboardSerializer"]();
    }
    ;
    DashboardService.prototype.get = function () {
        var _this = this;
        return this.http
            .get("" + this.url + this.endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.serializer.fromJson(data); }));
    };
    DashboardService.prototype.createSettings = function (item) {
        var endpoint = 'admins/settings';
        var serializer = new _Serializers_Setting_settings_serializer__WEBPACK_IMPORTED_MODULE_6__["SettingsSerializer"]();
        return this.http
            .post("" + this.url + endpoint, serializer.toJson(item))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return serializer.fromJson(data); }));
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map