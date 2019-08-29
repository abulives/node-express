(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/address/address.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/address/address.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row text-center\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\"><h3>Registration</h3></div>\n   \t<div class=\"col-sm-4\"></div>\n</div>\n<div class=\"row text-center\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\">\n\t\t<span *ngIf = \"alertButton == '1'; then condition1 \" ></span> \n\t\t<ng-template #condition1>\t\t\t\n\t\t</ng-template>\n\t\t<span *ngIf = \"alertButton == '2'; then condition2 \" ></span> \n\t\t<ng-template #condition2>\t\n\t\t  <div class=\"alert alert-danger alert-dismissible fade show\">\n\t\t    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t    {{errmsg}}\n\t\t  </div>\n\t\t</ng-template>\n\t</div>\n   \t<div class=\"col-sm-4\"></div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\">\n\t\t<form #address = \"ngForm\">\n\t \t\t<div class=\"form-group\">\n\t \t\t\t<label for=\"username\">Name:</label>\n\t      \t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter name\" ngModel>\n\t\t\t</div> \n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"address\">Address:</label>\n\t\t\t\t<textarea name=\"address\" placeholder=\"Enter Address\" class=\"form-control\"  ngModel></textarea>\n\t\t   \t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"pincode\">Pincode:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"pincode\" placeholder=\"Enter pincode\" ngModel>\n\t\t   \t</div>       \n\t      <button type=\"submit\" class=\"btn btn-primary\"  (click) = \"saveAddress(address.value)\">SAVE</button>\n\t   </form>\n\t</div>\n   \t<div class=\"col-sm-4\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\t<a class=\"navbar-brand\" routerLink=\"/product\">Angular</a>\n  \t<div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    \t<div class=\"navbar-nav\">\n    \t\t<span *ngIf = \"signinButton == '1' && user_type == '1'; then usermenu\" ></span>\n    \t\t<ng-template #usermenu>\n      \t\t\t<a class=\"nav-item nav-link active\" routerLink=\"/home\">Users <span class=\"sr-only\">(current)</span></a>\n    \t\t</ng-template>\n    \t</div>\n\t</div>\n\t<form class=\"form-inline my-2 my-lg-0\">\n\t\t<span *ngIf = \"signinButton == '0'; then condition1 else condition2\" ></span> \n\t\t<ng-template #condition1>\n\t\t\t<button routerLink=\"/signin\" class=\"btn btn-success my-2 my-sm-0\" type=\"button\">Sign In</button>\n\t\t</ng-template>\n\t\t<ng-template #condition2>\n\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n\t\t\t\t\t{{username}}\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">My Profile</a>\n\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Orders</a>\n\t\t\t\t\t\t<a (click) = \"logout()\" class=\"dropdown-item\">Signout</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<!--<a class=\"nav-link\" routerLink=\"/product\">\n\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\tCart\n\t\t\t\t\t</a>-->\n\t\t\t\t\t<a routerLink=\"/mycart\" class=\"notification\">\n\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span> Cart</span>\n\t\t\t\t\t\t<span [hidden]=\"total==0\" class=\"badge\">{{total}}</span>\n\t\t\t\t\t</a> \n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</ng-template>\n\t</form>\n  \t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    \t<span class=\"navbar-toggler-icon\"></span>\n  \t</button>\n</nav>\n<div class=\"container\" style=\"margin-top:30px\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Welcome <code>{{username}}</code></p>\n<span *ngIf = \"alertButton == '1'; then condition1 \" ></span> \n<ng-template #condition1>\n\t<div class=\"alert alert-success alert-dismissible fade show\">\n    \t<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    \t User deleted successfully.\n  </div>\n</ng-template>\n<span *ngIf = \"alertButton == '2'; then condition2 \" ></span> \n<ng-template #condition2>\t\n  <div class=\"alert alert-danger alert-dismissible fade show\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    Something went wrong.\n  </div>\n</ng-template>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Username</th>\n        <th>Email</th>\n        <th>Registration time</th>\n        <th>User Id</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let user of users\">\n        <td>{{user.username}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.date | date:\"dd/MM/yyyy h:mma\"}}</td>\n        <td>{{user._id}}</td>\n        <td>\n        \t<i class=\"fa fa-trash over-pointer\" aria-hidden=\"true\"  (click) = \"onClickDelete(user)\"></i>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Welcome to Angular</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mycart/mycart.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mycart/mycart.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-9\">\n        <div class=\"card\">\n            <div class=\"card-header\">My Cart</div>\n            <div class=\"card-body\">\n                <div class=\"card\" *ngFor = \"let cart of carts\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <img style=\"max-width:200px;\" class=\"card-img-top\" src=\"{{cart.image}}\">\n                            </div>\n                            <div class=\"col-sm-9\">\n                                <h4 class=\"card-title\">{{cart.name}}</h4>\n                                <p class=\"card-text\">{{cart.description}}</p>\n                                <p class=\"card-text\">Price: {{cart.price}}</p>\n                                <p class=\"card-text\">\n                                    Quantity: \n                                    <i (click) = \"removeCart(cart)\" class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                    {{cart.quantity}}\n                                    <i (click) = \"updateCart(cart)\" class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                    <button style=\"float:right\" type=\"button\" class=\"btn btn-success\">PLACE ORDER</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">PRICE DETAILS</div>\n            <div class=\"card-body\">\n                    <ul class=\"list-group\">\n                            <li class=\"list-group-item\">Quantiy: {{total_quantity}}</li>\n                            <li class=\"list-group-item\">Delivery : Free</li>\n                        </ul> \n            </div>\n            <div class=\"card-footer\">Total Payable: {{total_price}}</div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                DELIVERY ADDRESS\n                <button style=\"float:right\" routerLink=\"/address\" type=\"button\" class=\"btn btn-primary\">EDIT</button>\n            </div>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Abu</li>\n                    <li class=\"list-group-item\">Ramamurthy Nagar</li>\n                    <li class=\"list-group-item\">Bangalore</li>\n                    <li class=\"list-group-item\">560016</li>\n                </ul> \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-columns\">\n    <div class=\"card\" style=\"max-width:400px\"  *ngFor = \"let product of products\">\n        <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"Card image\" style=\"width:100%\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">{{product.name}}</h4>\n            <p class=\"card-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>{{product.price}}</p>\n            <button  (click) = \"onAddtoCart(product)\" type=\"button\" class=\"btn btn-primary a_button\">ADD TO CART</button>\n            <button  (click) = \"onBuyNow(product)\" type=\"button\" class=\"btn btn-primary a_button\">BUY NOW</button>\n        </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registration/registration.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row text-center\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\"><h3>Registration</h3></div>\n   \t<div class=\"col-sm-4\"></div>\n</div>\n<div class=\"row text-center\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\">\n\t\t<span *ngIf = \"alertButton == '1'; then condition1 \" ></span> \n\t\t<ng-template #condition1>\n\t\t\t<div class=\"alert alert-success alert-dismissible fade show\">\n\t\t    \t<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t    \t User registered successfully.\n\t\t  </div>\n\t\t</ng-template>\n\t\t<span *ngIf = \"alertButton == '2'; then condition2 \" ></span> \n\t\t<ng-template #condition2>\t\n\t\t  <div class=\"alert alert-danger alert-dismissible fade show\">\n\t\t    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t    {{errmsg}}\n\t\t  </div>\n\t\t</ng-template>\n\t</div>\n   \t<div class=\"col-sm-4\"></div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\">\n\t\t<form #userregistration = \"ngForm\">\n\t \t\t<div class=\"form-group\">\n\t \t\t\t<label for=\"username\">Username:</label>\n\t      \t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Enter username\" ngModel>\n\t\t\t</div> \n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\">Email:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" ngModel>\n\t\t   \t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\">Password:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"password\" placeholder=\"Enter password\" ngModel>\n\t\t   \t</div>       \n\t      <button type=\"submit\" class=\"btn btn-primary\"  (click) = \"onClickSubmit(userregistration.value)\">Register</button>\n\t   </form>\n\t</div>\n   \t<div class=\"col-sm-4\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\"><h3>Log In</h3></div>\n   \t<div class=\"col-sm-4\"></div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4 text-center\">\t\t\n\t\t<div  *ngIf=\"alertMessage\" class=\"alert alert-danger alert-dismissible fade show\">\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t    User doesn't exist. \n\t\t</div>\n\t</div>\n   \t<div class=\"col-sm-4\"></div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4\">\n\t\t<form #userlogin = \"ngForm\">\n\t \t\t<div class=\"form-group\">\n\t \t\t\t <label for=\"username\">Username:</label>\n\t      \t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Enter username\" ngModel>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t \t\t\t <label for=\"username\">Password:</label>\n\t      \t\t<input type=\"text\" class=\"form-control\" name=\"password\" placeholder=\"Enter password\" ngModel>\n\t     \t</div>\n\t      \t<div class=\"form-group form-check\">\n\t\t    \t<label class=\"form-check-label\">\n\t\t      \t<input class=\"form-check-input\" type=\"checkbox\"> Remember me\n\t\t    \t</label>\n\t\t  </div>\t      \n\t      <button type=\"submit\" class=\"btn btn-primary\"  (click) = \"onClickSubmit(userlogin.value)\">Log In</button>\n\t   </form>\n\t</div>\n   \t<div class=\"col-sm-4\"></div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4 text-center\">\n\t\t<a class=\"nav-item nav-link active\" routerLink=\"/registration\">Create account</a>\n\t</div>\n   \t<div class=\"col-sm-4\"></div>\n</div>"

/***/ }),

/***/ "./src/app/address/address.component.scss":
/*!************************************************!*\
  !*** ./src/app/address/address.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");




let AddressComponent = class AddressComponent {
    constructor(router, myservice) {
        this.router = router;
        this.myservice = myservice;
    }
    ngOnInit() {
        if (!localStorage.getItem("user_id")) {
            this.router.navigate(['signin']);
        }
    }
    saveAddress(user) {
        user.user_id = localStorage.getItem("user_id");
        this.myservice.saveAddress(user).subscribe(data => {
            if (data) {
                this.router.navigate(['mycart']);
            }
        }, error => {
            this.alertButton = '2';
            if (error.error.errmsg) {
                this.errmsg = error.error.errmsg;
            }
            else if (error.error.message) {
                this.errmsg = error.error.message;
            }
            else {
                this.errmsg = "Something went wrong.";
            }
        });
    }
};
AddressComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
];
AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: __webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/index.js!./src/app/address/address.component.html"),
        styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/address/address.component.scss")]
    })
], AddressComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mycart/mycart.component */ "./src/app/mycart/mycart.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");









const routes = [
    { path: '', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'mycart', component: _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_7__["MycartComponent"] },
    { path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_8__["AddressComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification {\n  color: white;\n  text-decoration: none;\n  padding: 8px;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px;\n}\n\n.notification:hover {\n  background: red;\n}\n\n.notification .badge {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  padding: 5px 10px;\n  border-radius: 50%;\n  background: red;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJvaWQvRG9jdW1lbnRzL2FuZ3VsYXItdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG4gIFxuICAubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gIH1cbiAgXG4gIC5ub3RpZmljYXRpb24gLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH0iLCIubm90aWZpY2F0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");




let AppComponent = class AppComponent {
    constructor(router, myservice) {
        this.router = router;
        this.myservice = myservice;
        this.title = 'angular-ui';
        this.navbarOpen = false;
        this.username = "";
        this.user_type = "";
        this.total = 0;
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
        if (localStorage.getItem("isLoggedIn")) {
            this.username = localStorage.getItem("user");
            this.user_type = localStorage.getItem("user_type");
            this.signinButton = localStorage.getItem("isLoggedIn");
        }
        else {
            this.signinButton = "0";
        }
        if (localStorage.getItem("isLoggedIn")) {
        }
        this.getCartCount();
    }
    getCartCount() {
        if (localStorage.getItem("user_id")) {
            var params = {
                user_id: localStorage.getItem("user_id")
            };
            this.myservice.getCartCount(params).subscribe((data) => {
                if (data.length > 0) {
                    this.total = data[0].quantity;
                }
            }, error => {
            });
        }
    }
    logout() {
        localStorage.setItem('isLoggedIn', "0");
        //this.router.navigate(['signin']);
        window.location.href = "/signin";
    }
    updateCount() {
        this.total += 1;
    }
    reduceCount() {
        this.total -= 1;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mycart/mycart.component */ "./src/app/mycart/mycart.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_16__["ProductComponent"],
            _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_17__["MycartComponent"],
            _address_address_component__WEBPACK_IMPORTED_MODULE_18__["AddressComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"]
        ],
        providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_10__["MyserviceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, myservice) {
        this.router = router;
        this.myservice = myservice;
        this.username = localStorage.getItem("user");
        this.alertButton = '0';
    }
    ngOnInit() {
        if (localStorage.getItem("isLoggedIn") == "1") {
            this.getUsers();
        }
        else {
            this.router.navigate(['signin']);
        }
    }
    getUsers() {
        this.myservice.listUsers().subscribe(data => {
            if (data) {
                this.users = data;
            }
        }, error => {
            console.error("Error", error);
        });
    }
    onClickDelete(user) {
        this.myservice.deleteUser(user).subscribe(data => {
            this.users.splice(this.users.indexOf(user), 1);
            this.alertButton = '1';
        }, error => {
            this.alertButton = '1';
            console.error("Error", error);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/mycart/mycart.component.scss":
/*!**********************************************!*\
  !*** ./src/app/mycart/mycart.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Y2FydC9teWNhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mycart/mycart.component.ts":
/*!********************************************!*\
  !*** ./src/app/mycart/mycart.component.ts ***!
  \********************************************/
/*! exports provided: MycartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycartComponent", function() { return MycartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





let MycartComponent = class MycartComponent {
    constructor(router, myservice, appcomponent) {
        this.router = router;
        this.myservice = myservice;
        this.appcomponent = appcomponent;
        this.carts = [];
        this.total_price = 0;
        this.total_quantity = 0;
    }
    ngOnInit() {
        if (localStorage.getItem("user_id")) {
            var product = {
                user_id: localStorage.getItem("user_id")
            };
            this.myservice.getmyCart(product).subscribe((data) => {
                this.carts = data;
                this.findTotal(data);
            }, error => {
                console.error("Error", error);
            });
        }
        else {
            this.router.navigate(['signin']);
        }
    }
    findTotal(data) {
        var total_price = 0;
        var total_quantity = 0;
        data.forEach(function (cart) {
            total_price += cart.price;
            total_quantity += cart.quantity;
        });
        this.total_price = total_price;
        this.total_quantity = total_quantity;
    }
    removeCart(product) {
        var params = {
            _id: product.id
        };
        this.myservice.removeCart(params).subscribe((data) => {
            this.ngOnInit();
            this.appcomponent.reduceCount();
        }, error => {
            console.error("Error", error);
        });
    }
    updateCart(product) {
        if (localStorage.getItem("user_id")) {
            var price = product.price / product.quantity;
            delete product._id;
            product.user_id = localStorage.getItem("user_id");
            var cart = {
                productid: product.productid,
                user_id: product.user_id,
                name: product.name,
                image: product.image,
                description: product.description,
                price: price
            };
            cart.price = price;
            this.myservice.addCart(cart).subscribe((data) => {
                this.ngOnInit();
                this.appcomponent.updateCount();
            }, error => {
                console.error("Error", error);
            });
        }
        else {
            this.router.navigate(['signin']);
        }
    }
};
MycartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
MycartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mycart',
        template: __webpack_require__(/*! raw-loader!./mycart.component.html */ "./node_modules/raw-loader/index.js!./src/app/mycart/mycart.component.html"),
        styles: [__webpack_require__(/*! ./mycart.component.scss */ "./src/app/mycart/mycart.component.scss")]
    })
], MycartComponent);



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let MyserviceService = class MyserviceService {
    constructor(http) {
        this.http = http;
    }
    signIn(data) {
        return this.http.post('/api/v1/users/signin', data, httpOptions);
    }
    registerUser(data) {
        return this.http.post('/api/v1/users/signup', data, httpOptions);
    }
    listUsers() {
        return this.http.get('/api/v1/users/users');
    }
    deleteUser(user) {
        return this.http.delete('/api/v1/users/user/' + user._id, httpOptions);
    }
    listProducts() {
        return this.http.get('/api/v1/products/product', httpOptions);
    }
    addCart(data) {
        return this.http.post('/api/v1/products/cart', data, httpOptions);
    }
    getmyCart(data) {
        return this.http.post('/api/v1/products/mycart', data, httpOptions);
    }
    getCartCount(data) {
        return this.http.get('/api/v1/products/mycartcount', { params: data });
    }
    removeCart(data) {
        return this.http.delete('/api/v1/products/mycart/' + data._id, httpOptions);
    }
    saveAddress(data) {
        return this.http.post('/api/v1/products/address', data, httpOptions);
    }
};
MyserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyserviceService);



/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a_button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJvaWQvRG9jdW1lbnRzL2FuZ3VsYXItdWkvc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hX2J1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4iLCIuYV9idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





let ProductComponent = class ProductComponent {
    constructor(router, myservice, appcomponent) {
        this.router = router;
        this.myservice = myservice;
        this.appcomponent = appcomponent;
    }
    ngOnInit() {
        this.getProduct();
    }
    getProduct() {
        this.myservice.listProducts().subscribe(data => {
            if (data) {
                this.products = data;
            }
        }, error => {
            console.error("Error", error);
        });
    }
    onAddtoCart(product) {
        if (localStorage.getItem("user_id")) {
            product.user_id = localStorage.getItem("user_id");
            this.myservice.addCart(product).subscribe((data) => {
            }, error => {
                console.error("Error", error);
            });
            this.appcomponent.updateCount();
            this.router.navigate(['mycart']);
        }
        else {
            this.router.navigate(['signin']);
        }
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");




let RegistrationComponent = class RegistrationComponent {
    constructor(router, myservice) {
        this.router = router;
        this.myservice = myservice;
        this.alertButton = '0';
        this.errmsg = "";
    }
    ngOnInit() { }
    onClickSubmit(user) {
        this.myservice.registerUser(user).subscribe(data => {
            if (data) {
                this.alertButton = '1';
                this.router.navigate(['signin']);
            }
        }, error => {
            this.alertButton = '2';
            if (error.error.errmsg) {
                this.errmsg = error.error.errmsg;
            }
            else if (error.error.message) {
                this.errmsg = error.error.message;
            }
            else {
                this.errmsg = "Something went wrong.";
            }
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/registration/registration.component.html"),
        styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/registration/registration.component.scss")]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/signin/signin.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");




let SigninComponent = class SigninComponent {
    constructor(router, myservice) {
        this.router = router;
        this.myservice = myservice;
        this.alertMessage = false;
    }
    ngOnInit() {
    }
    onClickSubmit(user) {
        this.myservice.signIn(user).subscribe((data) => {
            if (data) {
                localStorage.setItem('isLoggedIn', "1");
                localStorage.setItem('user', data.username);
                localStorage.setItem('user_type', data.user_type);
                localStorage.setItem('user_id', data._id);
                //this.router.navigate(['home']);
                window.location.href = "/product";
            }
        }, error => {
            this.alertMessage = true;
            console.error("Error", error);
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/signin/signin.component.scss")]
    })
], SigninComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/android/Documents/angular-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map