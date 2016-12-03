import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { SharedModule } from "../shared";
import { appRoutes } from './blog.route';
import { RouterModule } from '@angular/router';
import { BlogHomeComponent } from './home';
import { AboutMeComponent } from './about-me';

@NgModule({
    declarations: [
        BlogHomeComponent,
        AboutMeComponent
    ],
    imports: [
        NativeScriptModule,
        RouterModule.forChild(appRoutes),
        SharedModule
    ]
})
export class BlogModule {
}

