(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-pages-modules-Marketing-Module-blogs-blogs-module~views-pages-modules-Marketing-Module~116567de"],{

/***/ "./src/app/core/services/Helpers/error.msg.helper.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/Helpers/error.msg.helper.service.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorMsgHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsgHelperService", function() { return ErrorMsgHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _views_shared_errors_model_errors_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../views/shared/errors-model/errors-model.component */ "./src/app/views/shared/errors-model/errors-model.component.ts");





var ErrorMsgHelperService = /** @class */ (function () {
    function ErrorMsgHelperService(dialog, translateService) {
        this.dialog = dialog;
        this.translateService = translateService;
    }
    ErrorMsgHelperService.prototype.handleErrors = function (invalid_controls) {
        var _this = this;
        var errors_msg = [];
        invalid_controls.forEach(function (value) {
            switch (value) {
                // COMMON
                case 'name_en':
                    errors_msg.push(_this.translateService.instant('COMMON.name_ar'));
                    break;
                case 'name_ar':
                    errors_msg.push(_this.translateService.instant('COMMON.name_ar'));
                    break;
                case 'description_en':
                    errors_msg.push(_this.translateService.instant('COMMON.description_en'));
                    break;
                case 'description_ar':
                    errors_msg.push(_this.translateService.instant('COMMON.description_ar'));
                    break;
                case 'seo_title_en':
                    errors_msg.push(_this.translateService.instant('COMMON.seo_title_en'));
                    break;
                case 'seo_title_ar':
                    errors_msg.push(_this.translateService.instant('COMMON.seo_title_ar'));
                    break;
                case 'seo_description_en':
                    errors_msg.push(_this.translateService.instant('COMMON.seo_description_en'));
                    break;
                case 'seo_description_ar':
                    errors_msg.push(_this.translateService.instant('COMMON.seo_description_ar'));
                    break;
                case 'seo_meta_tags_en':
                    errors_msg.push(_this.translateService.instant('COMMON.seo_meta_tags_en'));
                    break;
                case 'seo_meta_tags_ar':
                    errors_msg.push(_this.translateService.instant('COMMON.seo_meta_tags_ar'));
                    break;
                case 'price':
                    errors_msg.push(_this.translateService.instant('Components.price'));
                    break;
                case 'image':
                    errors_msg.push(_this.translateService.instant('Components.image'));
                    break;
                case 'name':
                    errors_msg.push(_this.translateService.instant('COMMON.name'));
                    break;
                case 'email':
                    errors_msg.push(_this.translateService.instant('COMMON.email'));
                    break;
                case 'password':
                    errors_msg.push(_this.translateService.instant('COMMON.password'));
                    break;
                case 'is_active':
                    errors_msg.push(_this.translateService.instant('COMMON.activation'));
                    break;
                case 'apply_vat':
                    errors_msg.push(_this.translateService.instant('Components.apply_vat'));
                    break;
                // SERVICES
                case 'price_model':
                    errors_msg.push(_this.translateService.instant('Components.SERVICES.columns.price_model'));
                    break;
                case 'minimum_hours_booking':
                    errors_msg.push(_this.translateService.instant('Components.SERVICES.columns.minimum_hours_booking'));
                    break;
                case 'max_quantity':
                    errors_msg.push(_this.translateService.instant('Components.SERVICES.columns.max_quantity'));
                    break;
                // OFFERS & Blogs & SEO
                case 'valid_date':
                    errors_msg.push(_this.translateService.instant('Components.OFFERS.columns.valid_date'));
                    break;
                case 'author':
                    errors_msg.push(_this.translateService.instant('Components.BLOGS.columns.author'));
                    break;
                case 'url':
                    errors_msg.push(_this.translateService.instant('Components.SEO.columns.url'));
                    break;
                // YACHTS basic_information
                case 'facilities_en':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.facilities_en'));
                    break;
                case 'facilities_ar':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.facilities_ar'));
                    break;
                case 'what_is_included_en':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.what_is_included_en'));
                    break;
                case 'what_is_included_ar':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.what_is_included_ar'));
                    break;
                case 'type':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.type'));
                    break;
                case 'code':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.code'));
                    break;
                case 'color':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.color'));
                    break;
                case 'beds':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.beds'));
                    break;
                case 'passenger_capacity':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.passenger_capacity'));
                    break;
                case 'size':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.size'));
                    break;
                case 'no_of_captain':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.no_of_captain'));
                    break;
                case 'crew_members':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.crew_members'));
                    break;
                case 'corporate_company':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.corporate_company'));
                    break;
                case 'corporate_price':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.corporate_price'));
                    break;
                case 'selling_per_hour':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.selling_per_hour'));
                    break;
                case 'yacht_special_price':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.yacht_special_price'));
                    break;
                case 'status':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.status'));
                    break;
                case 'banner_image':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.basic_information.banner_image'));
                    break;
                case 'services':
                    errors_msg.push(_this.translateService.instant('MENUS.MARKETING.MENU.SERVICES'));
                    break;
                // YACHTS technical_information
                case 'manufacturer':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.manufacturer'));
                    break;
                case 'fuel_type':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.fuel_type'));
                    break;
                case 'hull_type':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.hull_type'));
                    break;
                case 'engine_type':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.engine_type'));
                    break;
                case 'horse_Power':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.horse_power'));
                    break;
                case 'max_speed':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.max_speed'));
                    break;
                case 'cruising_speed':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.cruising_speed'));
                    break;
                case 'length':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.length'));
                    break;
                case 'beam':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.beam'));
                    break;
                case 'year':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.year'));
                    break;
                case 'model':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.columns.technical_information.model'));
                    break;
                // WATER_SPORTS
                case 'water_sport_description_en':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.description_en'));
                    break;
                case 'water_sport_descriptions_ar':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.description_ar'));
                    break;
                case 'routes_en':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.routes_en'));
                    break;
                case 'routes_ar':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.routes_ar'));
                    break;
                case 'what_expect_description_en':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.what_expect_description_en'));
                    break;
                case 'what_expect_description_ar':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.what_expect_description_ar'));
                    break;
                case 'location_en':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.location_en'));
                    break;
                case 'location_ar':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.location_ar'));
                    break;
                case 'special_price':
                    errors_msg.push(_this.translateService.instant('Components.WATER_SPORTS.columns.basic_information.special_price'));
                    break;
                // YACHTS_RESERVATION
                case 'title':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.title'));
                    break;
                case 'phone':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.phone'));
                    break;
                case 'address':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.address'));
                    break;
                case 'country_id':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.country'));
                    break;
                case 'start_hour':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.start_hour'));
                    break;
                case 'start_date':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.start_date'));
                    break;
                case 'end_hour':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.end_hour'));
                    break;
                case 'end_date':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.end_date'));
                    break;
                case 'yacht_id':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS.name'));
                    break;
                case 'payment_method':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.payment_method'));
                    break;
                case 'number_of_people':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.number_of_people'));
                    break;
                case 'rate_per_hour':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.rate_per_hour'));
                    break;
                case 'other_charges':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.other_charges'));
                    break;
                case 'discount':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.discount'));
                    break;
                case 'minimum_Advance_Payment':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.minimum_Advance_Payment'));
                    break;
                case 'total_price':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.total_price'));
                    break;
                case 'trip_duration':
                    errors_msg.push(_this.translateService.instant('Components.YACHTS_RESERVATION.columns.trip_duration'));
                    break;
                default:
                    errors_msg.push(_this.translateService.instant('Components.' + value));
                    break;
            }
        });
        if (errors_msg.length) {
            this.showErrorMsgComponent(errors_msg);
        }
    };
    ErrorMsgHelperService.prototype.showErrorMsgComponent = function (errors_msg) {
        var dialogRef = this.dialog.open(_views_shared_errors_model_errors_model_component__WEBPACK_IMPORTED_MODULE_4__["ErrorsModelComponent"], {
            width: '40rem',
            data: {
                title: this.translateService.instant('COMMON.errors'),
                body: errors_msg
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ErrorMsgHelperService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    ErrorMsgHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ErrorMsgHelperService);
    return ErrorMsgHelperService;
}());



/***/ })

}]);
//# sourceMappingURL=default~views-pages-modules-Marketing-Module-blogs-blogs-module~views-pages-modules-Marketing-Module~116567de.js.map