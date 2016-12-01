import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components";
import { CoreModule } from "./core";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        CoreModule,
        ComponentsModule
    ]
})
export class AppModule {
}

