import { ArticleListComponent } from  './article-list'

import { NgModule } from "@angular/core";
import { ArticleItemComponent } from './article-item';
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule } from 'nativescript-angular';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
    ],
    declarations: [
        ArticleListComponent,
        ArticleItemComponent
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        ArticleListComponent,
        NativeScriptFormsModule,
    ]
})
export class SharedModule {

}

