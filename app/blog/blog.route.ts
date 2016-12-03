import { BlogHomeComponent } from './home';
import { ArticleDetailComponent } from './article-detail';

export const appRoutes = [
    { path: "blog", component: BlogHomeComponent },
    { path: "blog/:id", component: ArticleDetailComponent }
];

