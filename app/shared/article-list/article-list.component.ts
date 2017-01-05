import { Component, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";
import { ArticleService, Article, SearchResult } from '../../core';
import { environment } from '../../environments/environment';
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import { PullToRefresh } from "nativescript-pulltorefresh";


registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
    selector: "article-list",
    templateUrl: "shared/article-list/article-list.component.html",
    styleUrls: ['shared/article-list/article-list.component.css']
})
export class ArticleListComponent implements OnInit {
    pageIndex = 1;
    article: SearchResult<Article>;
    @Output()
    articleClicked = new EventEmitter();
    @Output()
    loadCompleted = new EventEmitter();

    constructor(public elementRef: ElementRef, private articleService: ArticleService) {

    }

    ngOnInit() {
        this.pageChange(this.pageIndex, (error, data) => {
            this.loadCompleted.emit({ error, data });
            this.loadCompleted.complete();
        });
    }

    ngOnDestroy(): void {
        this.articleClicked.complete();
    }

    gotoPage(url) {
        this.articleClicked.emit(url);
    }

    loadMore($event) {
        this.pageIndex += 1;
        this.pageChange(this.pageIndex, () => 1);
    }

    refresh(refresher) {
        let pullRefresh = refresher.object;
        this.pageIndex = 1;
        this.articleService.cacheEvict();
        this.articleService.getArticles(this.pageIndex, environment.article.pageSize)
            .subscribe(result => {
                    this.article = result;
                    pullRefresh.refreshing = false;
                },
                (e) => {
                    console.log('ArticleListComponent error');
                    pullRefresh.refreshing = false;
                });
    }

    pageChange(pageIndex, done?: (error: any, data?: any) => void) {
        this.articleService.getArticles(pageIndex, environment.article.pageSize)
            .subscribe(result => {
                    this.article = this.article || <SearchResult<Article>>{ result: [] };
                    this.article.pageIndex = result.pageIndex;
                    this.article.total = result.total;
                    this.article.result.push(...result.result);
                    done && done(null, result);
                },
                (e) => {
                    console.log('ArticleListComponent error');
                    done && done(e);
                });
    }
}
