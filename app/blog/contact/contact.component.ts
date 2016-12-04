import { Component, ElementRef } from "@angular/core";
import { ObservableArray } from 'data/observable-array';
import { SetupItemViewArgs } from 'nativescript-angular';
import { Router } from '@angular/router';
import { SelectedIndexChangedEventData } from 'ui/tab-view';


@Component({
    selector: "contact",
    templateUrl: "blog/contact/contact.component.html",
    styleUrls: ["blog/contact/contact.component.css"]
})
export class ContactComponent {
    model: any = {};

    constructor() {
    }

    submit() {
        console.log("submit", JSON.stringify(this.model));
    }
}
