import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import { NativeScriptRouterModule } from 'nativescript-angular';
import { appRoutes } from './app.route';
import { BlogModule } from './blog/blog.module';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        CoreModule,
        BlogModule
    ]
})
export class AppModule {
}

