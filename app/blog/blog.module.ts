import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { SharedModule } from "../shared";
import { BlogHomeComponent } from './home';
import { appRoutes } from './blog.route';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlogHomeComponent],
    imports: [
        NativeScriptModule,
        RouterModule.forChild(appRoutes),
        SharedModule
    ]
})
export class BlogModule {
}

