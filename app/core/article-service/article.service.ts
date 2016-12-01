import { Injectable } from '@angular/core';
import { SearchResult } from './search-result.model';
import { Article } from './article.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {

    constructor() {
    }

    getArticles(pageIndex = 1, pageSize = 5): Observable<SearchResult<Article>> {
        return null;
    }

    getArticleByUrl(articleUrl: string): Observable<Article> {
        return null;
    }

    getAllArticles(): Observable<SearchResult<Article>> {
        return null;
    }

    private  innerGetAllArticles(): Observable<SearchResult<Article>> {
        return null;
    }

}
