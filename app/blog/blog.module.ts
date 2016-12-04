import { NgModule } from "@angular/core";
import { SharedModule } from "../shared";
import { appRoutes } from './blog.route';
import { RouterModule } from '@angular/router';
import { BlogHomeComponent } from './home';
import { AboutMeComponent } from './about-me';
import { ArticleDetailComponent } from './article-detail';
import { ContactComponent } from './contact';

@NgModule({
    declarations: [
        BlogHomeComponent,
        AboutMeComponent,
        ArticleDetailComponent,
        ContactComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(appRoutes)
    ],
    entryComponents: [
        BlogHomeComponent
    ]
})
export class BlogModule {
}

