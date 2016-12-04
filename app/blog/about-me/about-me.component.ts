import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Article, ArticleService } from '../../core';
import { AboutService } from './about.service';

@Component({
    selector: "about-me",
    templateUrl: "blog/about-me/about-me.component.html",
    viewProviders: [AboutService]
})
export class AboutMeComponent implements OnInit {
    article: Article;

    constructor(private  aboutService: AboutService, private articleService: ArticleService) {

    }

    ngOnInit() {
        this.aboutService.getArticle()
            .subscribe(article => {
                this.articleService.getArticleCss()
                    .subscribe(css => {
                        article.html = article.html + `<style type="text/css">${css}</style>`;
                        this.article = article;
                    })
            });

    }
}
