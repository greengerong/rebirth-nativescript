import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import { NativeScriptRouterModule } from 'nativescript-angular';
import { appRoutes } from './app.route';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        SharedModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        CoreModule,
        BlogModule
    ]
})
export class AppModule {
}

