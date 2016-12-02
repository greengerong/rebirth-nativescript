import { Component, ElementRef } from "@angular/core";
import { ObservableArray } from 'data/observable-array';
import { SetupItemViewArgs } from 'nativescript-angular';



@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public countries: ObservableArray<any>;

    constructor(public elementRef: ElementRef) {
        this.countries = new ObservableArray([{ name: 'rebirth', continent: '-------' }])

    }


}
