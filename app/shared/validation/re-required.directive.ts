import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

@Directive({
    selector: '[reRequired][ngModel]'
})
export class ReRequiredDirective implements Validator {
    constructor(el: ElementRef) {
        console.log("=============in==========");
    }

    @HostListener("textChange", ["$event"])
    textChangeListener(event: any) {
        console.log("====textChange====", event.value);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        console.log(c, "--------");
        return null;
    }
}