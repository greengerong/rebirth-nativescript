import { ArticleListComponent } from  './article-list'

import { NgModule } from "@angular/core";
import { ArticleItemComponent } from './article-item';
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule } from 'nativescript-angular';
import { ReRequiredDirective } from './validation/re-required.directive';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
    ],
    declarations: [
        ArticleListComponent,
        ArticleItemComponent,
        ReRequiredDirective
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        ArticleListComponent,
        ReRequiredDirective
    ]
})
export class SharedModule {

}

