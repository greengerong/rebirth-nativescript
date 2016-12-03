import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Article } from '../../core';

@Component({
    selector: "article-item",
    templateUrl: "shared/article-item/article-item.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
    @Input()
    article: Article;

    ngOnInit() {
        console.log("article-item loaded*****************")
    }
}
