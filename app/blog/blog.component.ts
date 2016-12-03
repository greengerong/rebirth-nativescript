import { Component, ElementRef } from "@angular/core";
import { ObservableArray } from 'data/observable-array';
import { SetupItemViewArgs } from 'nativescript-angular';


@Component({
    selector: "blog",
    templateUrl: "blog/blog.component.html",
})
export class BlogComponent {
    public htmlString: string;

    constructor(public elementRef: ElementRef) {
        this.htmlString = '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>';
    }


}
