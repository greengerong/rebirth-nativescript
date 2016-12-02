import { Injectable } from '@angular/core';
import { SearchResult } from './search-result.model';
import { Article } from './article.model';
import { Observable } from 'rxjs/Observable';
import { getFile, getImage, getJSON, getString, request } from "http";
import { environment } from '../../environments/environment';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {
    articles: SearchResult<Article>;

    getArticles(pageIndex = 1, pageSize = 5): Observable<SearchResult<Article>> {
        return this.getAllArticles()
            .map(res => {
                let result = res.result || [];
                let startIndex = (pageIndex - 1 ) * pageSize;
                return {
                    pageSize,
                    pageIndex,
                    total: result.length,
                    result: result.slice(startIndex, startIndex + pageSize)
                };
            });
    }

    getArticleByUrl(articleUrl: string): Observable<Article> {
        return this.getAllArticles()
            .map(res => {
                let result = res.result || [];
                return (<any>result).find(item => item.url === articleUrl);
            });
    }

    getAllArticles(): Observable<SearchResult<Article>> {
        if (this.articles) {
            return of(this.articles);
        }

        return this.innerGetAllArticles()
            .map(res => {
                let result = res.result || [];
                return <SearchResult<Article>>{
                    result: result.map(item => {
                        item.overview = item.overview || item.markdown.substr(0, 100);
                        item.image = item.image || (item.html.match(/src="?'?([^> <"']+)"?'?/) || [])[1];

                        return item;
                    })
                };
            })
            .map(function (item) {
                this.articles = item;
                return item;
            });
    }

    cacheEvict(): this {
        this.articles = null;
        return this;
    };

    private  innerGetAllArticles(): Observable<SearchResult<Article>> {
        let promise: Promise<SearchResult<Article>> = getJSON(environment.api.article);
        return fromPromise(promise);
    }

}
