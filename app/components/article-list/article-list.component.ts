import { Component, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";
import { ArticleService, Article, SearchResult } from '../../core';
import { environment } from '../../environments/environment';

@Component({
    selector: "article-list",
    templateUrl: "components/article-list/article-list.component.html",
})
export class ArticleListComponent implements OnInit {
    pageIndex = 1;
    article: SearchResult<Article>;
    @Output()
    articleClicked = new EventEmitter();

    constructor(public elementRef: ElementRef, private articleService: ArticleService) {

    }

    ngOnInit() {
        this.pageChange(this.pageIndex);
    }

    ngOnDestroy(): void {
        this.articleClicked.complete();
    }

    gotoPage(url) {
        this.articleClicked.emit(url);
    }

    loadMore() {
        this.pageIndex += 1;
        this.pageChange(this.pageIndex, () => 1);
    }

    pageChange(pageIndex, done?: () => void) {
        this.articleService.getArticles(pageIndex, environment.article.pageSize)
            .subscribe(result => {
                    if (!this.article) {
                        this.article = result;
                        return;
                    }

                    this.article.pageIndex = result.pageIndex;
                    this.article.total = result.total;
                    this.article.result.push(...result.result);

                    done && done();
                },
                (e) => {
                    console.log(e, 'ArticleListComponent error');
                    done && done();
                });
    }
}
