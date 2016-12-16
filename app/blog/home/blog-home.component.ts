import { Component, trigger, state, style, transition, animate, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular';
import { SelectedIndexChangedEventData } from 'ui/tab-view';
import * as application from "application";

@Component({
    selector: "blog-home",
    templateUrl: "blog/home/blog-home.component.html",
    animations: [
        trigger("state", [
            state("inactive", style({
                "opacity": "0",
                'transform': 'translate(-500, -500)'
            })),
            state("active", style({
                "opacity": "1",
                'transform': 'translate(0, 0)'
            })),
            transition("inactive => active", [animate("600ms ease-out")]),
            // transition("active => inactive", [animate("600ms ease-out")]),
        ])]
})
export class BlogHomeComponent {

    tabs = [{ title: '文章', iconSource: '' }, { title: '关于我' }, { title: '联系我们' }];
    currentTab: any;
    isActive: boolean;

    constructor(private routerExtensions: RouterExtensions) {
        this.currentTab = this.tabs[0];
    }

    loadCompleted(): void {
        this.isActive = true;
    }

    gotoPage(url) {
        let transitionName = application.ios ? "curl" : 'flipRight';
        this.routerExtensions.navigate([`/blog/${url}`], {
            transition: {
                name: transitionName,
                duration: 600,
                curve: "linear"
            }
        });
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        this.currentTab = this.tabs[args.newIndex];
    }
}
