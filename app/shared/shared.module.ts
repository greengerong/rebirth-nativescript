import { ArticleListComponent } from  './article-list'

import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ArticleItemComponent } from './article-item';

@NgModule({
    imports: [NativeScriptModule],
    declarations: [
        ArticleListComponent,
        ArticleItemComponent
    ],
    exports: [ArticleListComponent]
})
export class SharedModule {

}

