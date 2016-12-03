import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ComponentsModule } from "../components";
import { BlogHomeComponent } from './home';
import { appRoutes } from './blog.route';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlogHomeComponent],
    imports: [
        NativeScriptModule,
        RouterModule.forChild(appRoutes),
        ComponentsModule
    ]
})
export class BlogModule {
}

