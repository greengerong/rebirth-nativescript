import { Component, ElementRef, OnInit } from "@angular/core";
import { Article, ArticleService } from '../../core';
import { AboutService } from './about.service';


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
            .subscribe(article => this.article = article);
    }
}
