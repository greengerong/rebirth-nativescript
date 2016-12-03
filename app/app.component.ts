import { Component, ElementRef } from "@angular/core";
import { ObservableArray } from 'data/observable-array';


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    constructor(public elementRef: ElementRef) {

    }


}
