import { Injectable } from '@angular/core';
import { Article } from '../../core';
import { Observable }     from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as fs from "file-system";

@Injectable()
export class AboutService {

    getArticle(): Observable<Article> {
        return fromPromise(fs.File.fromPath(__dirname + "/polang.html")
            .readText()
            .then(function (html) {
                const article = new Article();
                article.title = '破狼简介';
                article.categories = ['破狼', '简介'];
                article.layout = 'post';
                article.html = html;
                return article;
            }));
    }
}
