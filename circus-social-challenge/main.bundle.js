webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_profile_guard__ = __webpack_require__("./src/app/guards/profile.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_search_search_component__ = __webpack_require__("./src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_search_results_search_results_component__ = __webpack_require__("./src/app/pages/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile_component__ = __webpack_require__("./src/app/pages/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components



var routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__pages_search_search_component__["a" /* SearchComponent */] },
    { path: 'search-results', component: __WEBPACK_IMPORTED_MODULE_4__pages_search_results_search_results_component__["a" /* SearchResultsComponent */] },
    { path: 'view-profile/:username', component: __WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile_component__["a" /* UserProfileComponent */], resolve: { data: __WEBPACK_IMPORTED_MODULE_2__guards_profile_guard__["a" /* ProfileGuard */] } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/* Spinner Classes */\n.spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto; }\n.double-bounce1,\n.double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #007bff;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out; }\n.double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n@-webkit-keyframes sk-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n@keyframes sk-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n.pagination {\n  padding: 0 1rem;\n  border-radius: 0.25rem; }\n.pagination li.disabled a {\n    color: #6c757d !important;\n    pointer-events: none;\n    cursor: auto; }\n.pagination li.active a {\n    background-color: #007bff;\n    border-color: #007bff;\n    color: #fff !important; }\n.pagination li a {\n    cursor: pointer;\n    color: #007bff !important;\n    border: 1px solid #dee2e6;\n    padding: 0.5rem 0.75rem;\n    line-height: 1.25rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_profile_guard__ = __webpack_require__("./src/app/guards/profile.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search_component__ = __webpack_require__("./src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_results_search_results_component__ = __webpack_require__("./src/app/pages/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_profile_user_profile_component__ = __webpack_require__("./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jw_angular_pagination__ = __webpack_require__("./node_modules/jw-angular-pagination/lib/jw-pagination.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jw_angular_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jw_angular_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Guards

// Components




// Providers & Services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_results_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10_jw_angular_pagination__["JwPaginationComponent"]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__guards_profile_guard__["a" /* ProfileGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/profile.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileGuard = /** @class */ (function () {
    function ProfileGuard(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ProfileGuard.prototype.resolve = function (route, state) {
        var _this = this;
        if (route.params['username']) {
            // Check if the user exists. If yes, navigate. If no, return to list page.
            return this.dataService.getUserInfo(route.params['username']).then(function (data) {
                if (!data) {
                    _this.router.navigate(['search-results']);
                }
                else {
                    _this.dataService.getUserRepos(route.params['username']);
                    return data;
                }
            });
        }
        else {
            this.router.navigate(['search-results']);
            return null;
        }
    };
    ProfileGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "./src/app/pages/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-results\">\n  <div class=\"container px-3 py-4\">\n    <div [hidden]=\"!results\" class=\"row\">\n      <div class=\"col-3\">\n        <div class=\"input-group mb-3\">\n          <input (keyup.enter)=\"getSearchResults(this.searchParams)\" [(ngModel)]=\"searchParams\" type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          <div class=\"input-group-append\">\n            <button (click)=\"getSearchResults(this.searchParams)\" class=\"btn btn-outline-primary\" type=\"button\">Search</button>\n          </div>\n        </div>\n      </div>\n      <div [hidden]=\"!results\" class=\"col\">\n        <div class=\"float-right py-2\">\n          <strong>{{totalCount}} results</strong>\n        </div>\n      </div>\n    </div>\n    <!--- Search Results -->\n    <div class=\"row\">\n      <!--- Spinner -->\n      <div [hidden]=\"totalCount >= 0\" class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n      </div>\n      <div *ngIf=\"totalCount === 0\">\n        <h1 class=\"display-4 mx-auto px-3 py-3\">Sorry, no repositories were found.</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div *ngFor=\"let result of pageOfItems\">\n            <div class=\"results-card card\">\n              <div class=\"row\">\n                <div class=\"col-3\">\n                  <img [src]=\"result.owner.avatar_url\" class=\"img-thumbnail pb-md-2\" />\n                  <div class=\"px-2 row m-0\">\n                    <h5 class=\"text-info\">{{result.owner.login}}</h5>\n                  </div>\n                  <div class=\"px-2 pt-md-1 row m-0\">\n                    <button (click)=\"viewProfile(result.owner.login)\" class=\"btn btn-sm btn-block btn-outline-primary\">View Profile</button>\n                  </div>\n                </div>\n                <div class=\"col-9\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <h4>{{result.name}}</h4>\n                      <p>{{result.description}}</p>\n                    </div>\n                  </div>\n                  <hr>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <h6 class=\"text-muted\">Language: {{result.language}}</h6>\n                    </div>\n                    <div class=\"col\">\n                      <h6 class=\"text-muted float-right\">Forks: {{result.forks}}</h6>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--- Paginator -->\n    <div class=\"row\">\n      <jw-pagination [pageSize]=\"5\" [items]=\"results\" (changePage)=\"onChangePage($event)\"></jw-pagination>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/search-results/search-results.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/* Spinner Classes */\n.spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto; }\n.double-bounce1,\n.double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #007bff;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out; }\n.double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n@-webkit-keyframes sk-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n@keyframes sk-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n.pagination {\n  padding: 0 1rem;\n  border-radius: 0.25rem; }\n.pagination li.disabled a {\n    color: #6c757d !important;\n    pointer-events: none;\n    cursor: auto; }\n.pagination li.active a {\n    background-color: #007bff;\n    border-color: #007bff;\n    color: #fff !important; }\n.pagination li a {\n    cursor: pointer;\n    color: #007bff !important;\n    border: 1px solid #dee2e6;\n    padding: 0.5rem 0.75rem;\n    line-height: 1.25rem; }\n.search-results .results-card {\n  /* Card Styles */\n  margin: 30px 16px;\n  padding: 30px;\n  width: 100%;\n  border-radius: 0; }\n.search-results .results-card .img-thumbnail {\n    max-width: 75%;\n    border-radius: 0;\n    border: 0; }\n.search-results .results-card .btn-block {\n    width: 75%; }\n"

/***/ }),

/***/ "./src/app/pages/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(dataService, route, router) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.loadingData = true;
        this.results = [];
        dataService.getResults$().subscribe(function (response) {
            _this.totalCount = response['total_count'];
            _this.results = response['items'];
            _this.loadingData = false;
        });
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.searchParams = params.q;
            if (!_this.results) {
                _this.dataService.getResults(_this.searchParams);
            }
        });
    };
    SearchResultsComponent.prototype.getSearchResults = function (params) {
        if (params) {
            this.dataService.getResults(params);
            this.router.navigate(['search-results'], { queryParams: { q: params } });
        }
    };
    // Navigate to view profile page
    SearchResultsComponent.prototype.viewProfile = function (username) {
        this.router.navigate(['view-profile', username]);
    };
    // Paginator Events
    SearchResultsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    SearchResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__("./src/app/pages/search-results/search-results.component.html"),
            styles: [__webpack_require__("./src/app/pages/search-results/search-results.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <div class=\"row\">\n    <div class=\"col px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n      <h1 class=\"display-4\">GitHub Search</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-10 px-3 py-3 pb-md-4 mx-auto\">\n      <div class=\"input-group mb-3\">\n        <input (keyup.enter)=\"getSearchResults(this.searchParams)\" [(ngModel)]=\"searchParams\" type=\"text\" class=\"form-control\" placeholder=\"Enter your repos\">\n        <div class=\"input-group-append\">\n          <button (click)=\"getSearchResults(this.searchParams)\" class=\"btn btn-outline-primary\" type=\"button\">Search</button>\n        </div>        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/* Spinner Classes */\n.spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto; }\n.double-bounce1,\n.double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #007bff;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out; }\n.double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n@-webkit-keyframes sk-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n@keyframes sk-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n.pagination {\n  padding: 0 1rem;\n  border-radius: 0.25rem; }\n.pagination li.disabled a {\n    color: #6c757d !important;\n    pointer-events: none;\n    cursor: auto; }\n.pagination li.active a {\n    background-color: #007bff;\n    border-color: #007bff;\n    color: #fff !important; }\n.pagination li a {\n    cursor: pointer;\n    color: #007bff !important;\n    border: 1px solid #dee2e6;\n    padding: 0.5rem 0.75rem;\n    line-height: 1.25rem; }\n.search {\n  top: 0;\n  display: inline-block;\n  position: fixed;\n  bottom: 200px;\n  left: 0;\n  right: 0;\n  width: 700px;\n  height: 100px;\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Subscription Service

var SearchComponent = /** @class */ (function () {
    function SearchComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.getSearchResults = function (params) {
        if (params) {
            this.dataService.getResults(params);
            this.router.navigate(['search-results'], { queryParams: { q: params } });
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__("./src/app/pages/search/search.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile\">\n  <div class=\"container px-3 py-4\">\n    <div class=\"row\">\n      <div class=\"col-9 offset-3\">\n        <h1 class=\"display-4\">{{userInfo.name}} -\n          <span class=\"text-muted\">Repositories</span>\n        </h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <img [src]=\"userInfo.avatar_url\" class=\"img-fluid img-thumbnail\">\n        <div class=\"pt-md-3 row m-0\">\n          <h5>{{userInfo.name}}</h5>\n        </div>\n        <div class=\"pt-md-2 row m-0\">\n          <button class=\"btn btn-sm btn-block btn-outline-primary\">Follow</button>\n        </div>\n      </div>\n      <div class=\"col repos-col\">\n        <!--- Spinner -->\n        <div [hidden]=\"userRepos && userRepos.length\" class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"repo-card card col-5\" *ngFor=\"let repo of userRepos\">\n            <h4>{{repo.name}}</h4>\n            <p class=\"repo-description\">{{repo.description}}</p>\n            <h6 class=\"text-muted\">{{repo.language}}</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/* Spinner Classes */\n.spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto; }\n.double-bounce1,\n.double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #007bff;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out; }\n.double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n@-webkit-keyframes sk-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n@keyframes sk-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n.pagination {\n  padding: 0 1rem;\n  border-radius: 0.25rem; }\n.pagination li.disabled a {\n    color: #6c757d !important;\n    pointer-events: none;\n    cursor: auto; }\n.pagination li.active a {\n    background-color: #007bff;\n    border-color: #007bff;\n    color: #fff !important; }\n.pagination li a {\n    cursor: pointer;\n    color: #007bff !important;\n    border: 1px solid #dee2e6;\n    padding: 0.5rem 0.75rem;\n    line-height: 1.25rem; }\n.user-profile .display-4 {\n  font-size: 2.75rem; }\n.user-profile .img-thumbnail {\n  border-radius: 0; }\n.user-profile .repos-col {\n  padding-left: 20px;\n  border-left: 1px solid #d5d5d5; }\n.user-profile .repo-card {\n  border-radius: 0;\n  margin: 10px;\n  padding: 10px; }\n.user-profile .repo-card .repo-description {\n    height: 70px;\n    overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.userInfo = data['data'];
            _this.dataService.getUserRepos$()
                .subscribe(function (response) {
                _this.userRepos = response;
            });
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/pages/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/pages/user-profile/user-profile.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/providers/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.ROOT_URL = 'https://api.github.com';
        this.results = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.repos = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        // Error Handling Mechanism
        this.handleError = function (error) {
            return error.json();
        };
    }
    DataService.prototype.getResults$ = function () {
        return this.results.asObservable();
    };
    DataService.prototype.getUserRepos$ = function () {
        return this.repos.asObservable();
    };
    // Get Github repositories according to search parameters
    DataService.prototype.getResults = function (params) {
        var _this = this;
        return this.http
            .get(this.ROOT_URL + "/search/repositories?q=" + params)
            .map(this.extractData, this)
            .subscribe(function (response) { return _this.results.next(response); }, this.handleError);
    };
    // Get Github repositories according to search parameters
    DataService.prototype.getUserInfo = function (username) {
        var _this = this;
        return this.http
            .get(this.ROOT_URL + "/users/" + username)
            .toPromise()
            .then(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    // Get Github repositories according to search parameters
    DataService.prototype.getUserRepos = function (username) {
        var _this = this;
        return this.http
            .get(this.ROOT_URL + "/users/" + username + "/repos")
            .map(this.extractData, this)
            .subscribe(function (response) { return _this.repos.next(response); }, this.handleError);
    };
    // Handler to extract data response
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map