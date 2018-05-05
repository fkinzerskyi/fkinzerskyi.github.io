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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".main {\r\n    width: 500px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    border: 2px solid #d7d7d7;\r\n    border-bottom:  0px;\r\n    margin-top: 20px;\r\n    font-family: sans-serif;\r\n}\r\n\r\nh1 {\r\n\tbackground: #2980b9;\r\n\tcolor: white;\r\n\tmargin: 0;\r\n\tpadding: 10px 20px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 24px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.addItem {\r\n    position: relative;\r\n    padding-bottom: 0px;\r\n    height: 30px;\r\n}\r\n\r\n.addText {\r\n    width: 80%;\r\n    height: 25px;\r\n    padding: 5px 5px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.addItem button {\r\n    height: 40px;\r\n    width: 55px;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    font-size: 20px;\r\n    color: #686868;\r\n    margin-left: -40px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nli {\r\n    border-bottom: 1px solid #bfbfbf;\r\n    background-color: #d7d7d7;\r\n    padding: 10px 15px;\r\n    margin-bottom: 5px;\r\n    text-align: left;\r\n}\r\n\r\nspan {\r\n    cursor: pointer;\r\n    position: relative;\r\n    float: right;\r\n    margin-right: 10px;\r\n}\r\n\r\n.btn {\r\n    padding: 5px 10px;\r\n    margin: 10px 10px 10px 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>Todo's List</h1>\n  <button (click)=\"compareById()\" class=\"btn\">Sort by id</button>\n  <button (click)=\"compareByName()\" class=\"btn\">Sort by name</button>\n  <div class=\"addItem\">\n    <input [(ngModel)] = \"newItem\"  placeholder=\"Add New Task\" class=\"addText\" type=\"text\"\n    >\n    <button (click)=\"pushItem()\">Add</button>\n  </div>\n  <ul>\n    <li *ngFor= \"let item of items; let ind = index\"\n    >\n      {{item.id}}. {{item.name}}\n      <span (click)=\"removeItem(ind)\">x</span>\n    </li>\n  </ul>\n</div>"

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
        this.len = 1;
        this.title = 'app';
        this.items = [];
        this.newItem = "";
        this.removeItem = function (index) {
            this.items.splice(index, 1);
            this.len--;
            console.log(this.items);
        };
    }
    AppComponent.prototype.pushItem = function (newAccount) {
        if (this.newItem != "") {
            this.items.push({ name: this.newItem, id: this.len });
            this.len++;
            this.newItem = "";
            console.log(this.items);
        }
    };
    AppComponent.prototype.compareById = function () {
        this.items = this.items.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
        console.log(this.items);
    };
    AppComponent.prototype.compareByName = function () {
        this.items = this.items.sort(function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });
        console.log(this.items);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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