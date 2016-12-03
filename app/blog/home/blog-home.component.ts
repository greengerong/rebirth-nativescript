import { Component, ElementRef } from "@angular/core";
import { ObservableArray } from 'data/observable-array';
import { SetupItemViewArgs } from 'nativescript-angular';
import { Router } from '@angular/router';
import { SelectedIndexChangedEventData } from 'ui/tab-view';


@Component({
    selector: "blog-home",
    templateUrl: "blog/home/blog-home.component.html",
})
export class BlogHomeComponent {
    tabs = [{ title: '文章', iconSource: '' }, { title: '关于我' }, { title: '联系我们' }];
    currentTab: any;

    constructor(private router: Router) {
        this.currentTab = this.tabs[0];
    }

    gotoPage(url) {
        console.log("router", url)
        this.router.navigate([`/blog/${url}`]);
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        this.currentTab = this.tabs[args.newIndex];
    }
}
