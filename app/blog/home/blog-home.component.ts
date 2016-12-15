import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular';
import { SelectedIndexChangedEventData } from 'ui/tab-view';
import * as application from "application";

@Component({
    selector: "blog-home",
    templateUrl: "blog/home/blog-home.component.html",
})
export class BlogHomeComponent {
    tabs = [{ title: '文章', iconSource: '' }, { title: '关于我' }, { title: '联系我们' }];
    currentTab: any;

    constructor(private routerExtensions: RouterExtensions) {
        this.currentTab = this.tabs[0];
    }

    gotoPage(url) {
        console.log("routerExtensions", url)
        let transitionName = application.ios ? "curl" : 'flipRight';
        this.routerExtensions.navigate([`/blog/${url}`], {
            transition: {
                name: transitionName,
                duration: 3000,
                curve: "linear"
            }
        });
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        this.currentTab = this.tabs[args.newIndex];
    }
}
