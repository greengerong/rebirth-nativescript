import { Component, ElementRef } from "@angular/core";
import * as dialogs from "ui/dialogs";

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
        dialogs.alert({
            title: `${this.model.user}同学:`,
            message: "谢谢你的反馈,我们已经收到,并将会尽快处理。",
            okButtonText: "好的"
        });

        this.model = {};
    }
}
