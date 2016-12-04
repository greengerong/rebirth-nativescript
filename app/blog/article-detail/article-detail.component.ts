import { Component, ElementRef, OnInit } from "@angular/core";
import { Article, ArticleService } from '../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "article-detail",
    templateUrl: "blog/article-detail/article-detail.component.html",
})
export class ArticleDetailComponent implements OnInit {
    article: Article;

    constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: any) => {
            this.articleService.getArticleByUrl(params.id)
                .subscribe(article => {
                    this.articleService.getArticleCss()
                        .subscribe(css => {
                            article.html = article.html + `<style type="text/css">${css}</style>`;
                            this.article = article;
                        })
                });
        });
    }
}
