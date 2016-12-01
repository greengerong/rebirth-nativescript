"use strict";
var core_1 = require("@angular/core");
var Item = (function () {
    function Item(name) {
        this.name = name;
    }
    return Item;
}());
var items = ["ALL Heroes (header)", "Razor", "Rubick", "Phantom Lancer", "Legion Commander", "Brewmaster",
    "Outworld Devourer", "Sniper", "Lina", "Sven", "Visage", "Undying", "Tiny", "Tidehunter", "Puck", "Ursa",
    "Magnus", "Earthshaker", "Windrunner", "Techies", "Crystal Maiden", "Batrider", "Riki", "Invoker", "Venomancer",
    "Timbersaw", "Wraithking", "Anti Mage", "Ancient Apparition", "Troll Warlord", "Lich", "Enchantress",
    "Bristleback", "Pudge", "(footer)"];
var AppComponent = (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
        this.dataItems = [];
        for (var i = 0; i < items.length; i++) {
            this.dataItems.push(new Item(items[i]));
        }
    }
    AppComponent.prototype.onSetupItemView = function (args) {
        args.view.context.third = (args.index % 3 === 0);
        args.view.context.header = ((args.index + 1) % items.length === 1);
        args.view.context.footer = (args.index + 1 === items.length);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map