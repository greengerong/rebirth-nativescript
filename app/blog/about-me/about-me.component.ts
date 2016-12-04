import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Article, ArticleService } from '../../core';
import { AboutService } from './about.service';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as fs from "file-system";

@Component({
    selector: "about-me",
    templateUrl: "blog/about-me/about-me.component.html",
    viewProviders: [AboutService]
})
export class AboutMeComponent implements OnInit {
    article: Article;

    constructor(private  aboutService: AboutService) {

    }

    ngOnInit() {
        this.aboutService.getArticle()
            .subscribe(article => {
                fromPromise(fs.File.fromPath(__dirname + "/article-item.css")
                    .readText()
                    .then((css) => {
                            article.html = article.html + `<style type="text/css">${css}</style>`;
                            this.article = article;
                        }
                    ));
            });

    }
}
