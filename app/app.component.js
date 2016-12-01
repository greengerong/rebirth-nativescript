"use strict";
var core_1 = require("@angular/core");
var observable_array_1 = require('data/observable-array');
var AppComponent = (function () {
    function AppComponent() {
        this.countries = new observable_array_1.ObservableArray([{ name: 'rebirth', continent: '-------' }]);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map