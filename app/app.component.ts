import { Component } from "@angular/core";
import { ObservableArray } from 'data/observable-array';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    private countries: ObservableArray<any>;

    constructor() {
        this.countries = new ObservableArray([{ name: 'rebirth', continent: '-------' }])
    }

}
