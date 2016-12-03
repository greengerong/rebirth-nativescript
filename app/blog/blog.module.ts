import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ComponentsModule } from "../components";
import { BlogComponent } from './blog.component';
import { appRoutes } from './blog.route';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlogComponent],
    imports: [
        NativeScriptModule,
        RouterModule.forChild(appRoutes),
        ComponentsModule
    ]
})
export class BlogModule {
}

