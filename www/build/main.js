webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ParticipatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParticipatePage = (function () {
    function ParticipatePage(navCtrl, navParams, dataService, http, formBuilder, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.requesterName = "";
        this.submittedAmount = 0;
        this.urlParameters = [];
        this.todo = this.formBuilder.group({
            contribution: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
        this.requestInfo = this.getRequesterInfo();
        this.dataService.getRemoteData();
        this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=users').map(function (res) { return res.json(); }).subscribe(function (data) {
            //  this.uname= this.navPara.get('title');
            _this.uname = 'luis';
            data.forEach(function (r) {
                if (r.username == _this.uname) {
                    _this.percent = r.percent;
                    console.log("name: " + r.username);
                    console.log("percent: " + r.percent);
                }
            });
        });
        //console.log(this.navPara.get('title'));
    }
    ParticipatePage.prototype.logForm = function () {
        this.submittedAmount = this.todo.value.contribution;
        if (this.submittedAmount == 0) {
            this.denyRequest();
        }
        else if (this.submittedAmount != 0) {
            this.acceptRequest(this.todo.value.contribution);
        }
        // console.log(this.todo.value.contribution);
        //  this.navCtrl.push(DashboardPage,{title: this.todo.value.title});
    };
    ParticipatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParticipatePage');
        // console.log(this.navParams.get('title'));
        // console.log("here: " + this.dataService.getRemoteData());
        if (document.URL.indexOf("?") > 0) {
            console.log(document.URL);
            var splitURL = document.URL.split("?");
            var splitParams = splitURL[1].split("&");
            var i = void 0;
            for (i in splitParams) {
                var valuableParam = false;
                var singleURLParam = splitParams[i].split('=');
                console.log(splitParams);
                if (singleURLParam[0] == "username") {
                    this.username = singleURLParam[1];
                    valuableParam = true;
                }
                if (singleURLParam[0] == "amount") {
                    this.amount = +singleURLParam[1];
                    valuableParam = true;
                }
                if (singleURLParam[0] == "currency") {
                    this.currency = singleURLParam[1];
                    valuableParam = true;
                }
                if (singleURLParam[0] == "category") {
                    this.category = singleURLParam[1];
                    valuableParam = true;
                }
                if (singleURLParam[0] == "total") {
                    this.total = +singleURLParam[1];
                    valuableParam = true;
                }
                var urlParameter = {
                    'name': singleURLParam[0],
                    'value': singleURLParam[1]
                };
                if (valuableParam) {
                    this.urlParameters.push(urlParameter);
                }
                console.log("url params: " + this.urlParameters);
            }
        }
    };
    ParticipatePage.prototype.backToDashboard = function () {
        // let data = {
        //   title: 'sudo title',
        //   information: [
        //     'name', 'id'
        //   ],
        //   time: '10:10am'
        // };
        //, data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    ParticipatePage.prototype.getUserContribution = function () {
        // console.log("uid: " + uid);
        // let uid = 0;
        // let data = this.dataService.getRemoteData();
        // this.userData = data[uid];
        // console.log(userData['percent']);
        // return userData['percent'];
        // return userData['name'];
        return this.percent;
    };
    ParticipatePage.prototype.getRequesterInfo = function () {
        var _this = this;
        this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=getReqs').map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data);
            // console.log(data[0]);
            // i is the user index in the response array
            console.log("raw: " + data[0]['realname']);
            var obj = data[0];
            _this.requesterName = obj['realname'];
            _this.requestedAmount = obj['amount'];
            _this.requestedCatergory = obj['category'];
            _this.contribution = 2000;
            var currencyType = obj['currency'];
            // requestedAmount: number;
            // this.requestInfo = {'realname': obj['realname'], 'amount': obj['amount']};
            // this.requestInfo = data[0];
            // let i = 0;
            // let jsonData = data[i];
            // jsondata = data[0];
            // console.log(jsonData['username']);
            console.log("RequestInfo: " + _this.requestInfo);
            return _this.requestInfo;
        });
    };
    ParticipatePage.prototype.denyRequest = function () {
        console.log("Denied request");
    };
    ParticipatePage.prototype.acceptRequest = function (x) {
        var _this = this;
        console.log("Accepting: " + this.submittedAmount);
        console.log("Got: " + x);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        //  headers.append("Accept", 'application/json');
        //  headers.append('Content-Type', 'application/json' );
        //  headers.append('Content-Type', 'text/html' );
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var dataObj = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        var url = "http://home.loosescre.ws/~keith/synCare/server.php?command=putX&username=keith&amount=" + this.submittedAmount + "&category=" + this.requestedCatergory + "&currency=dollar";
        // let url = "http://home.loosescre.ws/~keith/synCare/server.php?command=putX&username=keith&amount=53&category=medicine&currency=dollar";
        console.log(url);
        this.http.get(url)
            .subscribe(function (data) {
            console.log("success");
            _this.showAlert();
            _this.backToDashboard();
            //  console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
        //  this.http.post("http://jsonplaceholder.typicode.com/posts", dataObj, options)
        //    .subscribe(data => {
        //      console.log(data['_body']);
        //     }, error => {
        //      console.log(error);// Error getting the data
        //    });
        //   console.log("Accepted request");
    };
    ParticipatePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Payment Sent!',
            subTitle: 'Your payment of ' + this.submittedAmount + " was sent to " + this.requesterName,
            buttons: ['OK']
        });
        alert.present();
    };
    return ParticipatePage;
}());
ParticipatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-participate',template:/*ion-inline-start:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/participate/participate.html"*/'<!--\n  Generated template for the ParticipatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>participate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <h3>Participation Amount</h3> -->\n  <h3>Participation Amount</h3>\n\n  <ion-list>\n    <!-- <ion-item *ngFor="let post of dataService.posts"> -->\n    <!--\n      <ion-item *ngFor="let post of dataService.posts">\n      {{post.uid}}\n      {{post.percent}}\n    </ion-item>\n  -->\n  </ion-list>\n\n  <ion-grid>\n    <!-- <ion-row>\n      Requester: {{requesterName}}\n      </ion-row>\n      <ion-row>\n      Total Amout: {{requestedAmount}}\n    </ion-row>\n    <ion-row>\n    Category: {{requestedCatergory}}\n      Your contribution: {{contribution}}\n    </ion-row> -->\n\n\n    <ion-row>\n      <ion-col col-6>Requester: {{requesterName}}</ion-col><ion-col col-6>Total Amout: {{requestedAmount}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>Category: {{requestedCatergory}}</ion-col>\n      <ion-col col-6>Your contribution: {{contribution}}</ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-item>\n          <ion-input type="number" value=50 [(ngModel)]="number" required="true" clearInput=true min="0" max="50"></ion-input> -->\n          <!-- <ion-input type="number" value=50 [(ngModel)]="number" required="true" clearInput=true min="0" max="50"></ion-input> -->\n        <!-- </ion-item>\n    </ion-row> -->\n\n    <!-- <ion-row padding>\n      <ion-col col-6>\n        <button ion-button (click)="denyRequest()">Deny</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button (click)="acceptRequest()">Accept</button>\n      </ion-col>\n    </ion-row> -->\n    <!-- <ion-row>\n      <ion-col col-6>This column will take 6 columns</ion-col>\n    </ion-row> -->\n</ion-grid>\n\n  <form id ="formStructure" [formGroup]="todo" (ngSubmit)="logForm()">\n    <ion-item class="itemstyle">\n      <ion-label>Contribution</ion-label>\n      <ion-input  type="text" formControlName="contribution"></ion-input>\n    </ion-item>\n    <!-- <button  class="itemstyle2" ion-button type="submit" [disabled]="!todo.valid">Submit</button> -->\n    <ion-grid>\n      <ion-row>\n      <ion-col col-6>\n        <!-- (click)="denyRequest()" -->\n        <button ion-button class="button button-block button-possite" [disabled]="todo.valid" >Deny</button>\n      </ion-col>\n      <ion-col col-6>\n        <!-- (click)="acceptRequest()" -->\n        <button ion-button type="submit" class="button button-block button-possite" [disabled]="!todo.valid" >Accept</button>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </form>\n\n\n  <!-- <form>\n    <div class="list">\n      <label class="item item-input">\n        <span class="input-label">input here </span>\n        <input type="text" placeholder=50>\n      </label>\n      <label class="item">\n        <ion-grid>\n          <ion-row>\n          <ion-col col-6>\n            <button ion-button class="button button-block button-possite">Deny</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button class="button button-block button-possite">Accept</button>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n      </label>\n    </div>\n  </form> -->\n\n\n\n\n  <!-- <ion-item>\n    {{percent}}\n  </ion-item> -->\n\n\n\n\n\n\n\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/participate/participate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ParticipatePage);

//# sourceMappingURL=participate.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/participate/participate.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        this.posts = [];
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.getRemoteData = function () {
        var _this = this;
        this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=users').map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data);
            // console.log(data[0]);
            // i is the user index in the response array
            _this.posts = data;
            // let i = 0;
            // let jsonData = data[i];
            // jsondata = data[0];
            // console.log(jsonData['username']);
            console.log(data);
            // return jsonData['role'];
        });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.todo = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
    }
    LoginPage.prototype.logForm = function () {
        console.log(this.todo.value.title);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */], { title: this.todo.value.title });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Login </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n        \n    <form id ="formStructure" [formGroup]="todo" (ngSubmit)="logForm()">\n      <ion-item class="itemstyle">\n        <ion-label>username</ion-label>\n        <ion-input  type="text" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item class="itemstyle">\n        <ion-label>password</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n      <button  class="itemstyle2" ion-button type="submit" [disabled]="!todo.valid">Submit</button>\n    </form>\n   \n\n  </ion-content>'/*ion-inline-end:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_dashboardDetails__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_participate_participate__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_data__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_participate_participate__["a" /* ParticipatePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/participate/participate.module#ParticipatePageModule', name: 'ParticipatePage', segment: 'participate', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_participate_participate__["a" /* ParticipatePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__services_dashboardDetails__["a" /* DashboardDetails */],
            __WEBPACK_IMPORTED_MODULE_13__providers_data_data__["a" /* DataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'ParticipatePage', component: __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__["a" /* ParticipatePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDetails; });
var DashboardDetails = (function () {
    function DashboardDetails() {
    }
    return DashboardDetails;
}());

//# sourceMappingURL=dashboardDetails.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardPage = (function () {
    function DashboardPage(navCtrl, http, navPara) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navPara = navPara;
        this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=users').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.nameU = _this.navPara.get('title');
            data.forEach(function (r) {
                if (r.username == _this.nameU) {
                    _this.posts = r.fullname;
                    _this.posts1 = r.username;
                    _this.posts2 = r.email;
                    _this.posts3 = r.percent;
                }
            });
        });
        // this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=getX&uid=1').map(res => res.json()).subscribe(data => {
        //   this.historyshop = data;});
        //console.log(this.navPara.get('title'))
    }
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/dashboard/dashboard.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <p class="title">Dashboard </p>\n          <p class="subtitle">Welcome: {{posts}}</p>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="container">    \n      <ion-card class="card1">\n        <ion-card-content >\n          <h2>Username account: {{posts1}}</h2>\n          <!-- <p>{{posts1}}</p> -->\n\n          <h2> Email: {{posts2}}</h2>\n          <!-- <p>{{posts2}}</p> -->\n\n          <h2>Percentange: {{posts3}}</h2>\n          <!-- <p>{{posts3}}</p> -->\n\n        </ion-card-content>\n      </ion-card>\n\n    <ion-card class="card2">\n          <ion-card-content>\n              <h2>Total Participation:</h2>\n              <h2>\'</h2>\n              <h2>\'</h2> \n          </ion-card-content>\n      </ion-card>\n    </div>\n\n    <ion-card>\n        <ion-card-content>\n            <h2>History:</h2>\n            <h2>\'</h2>\n            <h2>\'</h2> \n        </ion-card-content>\n    </ion-card>\n\n\n  </ion-content>'/*ion-inline-end:"/Users/mateosixtos/Documents/Hackathons Files/synCare_web/src/pages/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
], DashboardPage);

var _a, _b, _c;
//# sourceMappingURL=dashboard.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map