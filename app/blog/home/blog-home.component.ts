import { Component, ElementRef } from "@angular/core";
import { ObservableArray } from 'data/observable-array';
import { SetupItemViewArgs } from 'nativescript-angular';
import { Router } from '@angular/router';


@Component({
    selector: "blog-home",
    templateUrl: "blog/home/blog-home.component.html",
})
export class BlogHomeComponent {

    constructor(private router: Router) {

    }

    gotoPage(url) {
        console.log("router", url)
        this.router.navigate([`/blog/${url}`]);
    }

}
