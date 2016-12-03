import { ArticleListComponent } from  './article-list'

import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

@NgModule({
    imports: [NativeScriptModule],
    declarations: [ArticleListComponent],
    exports: [ArticleListComponent]
})
export class SharedModule {

}

