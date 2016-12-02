import { Component, ElementRef } from "@angular/core";
import { SetupItemViewArgs } from 'nativescript-angular';
import { ObservableArray } from 'data/observable-array';
import { ArticleService } from '../../core/article-service/article.service';
import { environment } from '../../environments/environment';

class Item {
    constructor(public name: string) {
    }
}

let items = ["ALL Heroes (header)", "Razor", "Rubick", "Phantom Lancer", "Legion Commander", "Brewmaster",
    "Outworld Devourer", "Sniper", "Lina", "Sven", "Visage", "Undying", "Tiny", "Tidehunter", "Puck", "Ursa",
    "Magnus", "Earthshaker", "Windrunner", "Techies", "Crystal Maiden", "Batrider", "Riki", "Invoker", "Venomancer",
    "Timbersaw", "Wraithking", "Anti Mage", "Ancient Apparition", "Troll Warlord", "Lich", "Enchantress",
    "Bristleback", "Pudge", "(footer)"];


@Component({
    selector: "article-list",
    templateUrl: "components/article-list/article-list.component.html",
})
export class ArticleListComponent {
    public dataItems: Array<Item>;
    public pageIndex = 1;

    constructor(public elementRef: ElementRef, private articleService: ArticleService) {
        this.dataItems = [];
        this.articleService.getArticles(this.pageIndex, environment.article.pageSize)
            .subscribe(
                t=> console.log(JSON.stringify(t), "========="),
                error=> console.log(error, "====error=====")
            );

        for (let i = 0; i < items.length; i++) {
            this.dataItems.push(new Item(items[i]));
        }
    }

    onSetupItemView(args: SetupItemViewArgs) {
        args.view.context.third = (args.index % 3 === 0);
        args.view.context.header = ((args.index + 1) % items.length === 1);
        args.view.context.footer = (args.index + 1 === items.length);
    }
}
