import { NgModule, SkipSelf, Optional } from '@angular/core';
import { ArticleService } from './article-service';


@NgModule({
    imports: [],
    providers: [
        ArticleService
    ],
    exports: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
