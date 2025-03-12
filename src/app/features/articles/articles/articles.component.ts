import {Component} from '@angular/core';
import {DefaultComponent} from "../../../templates/default/default.component";
import {ArticleCardComponent} from "../shared/article-card/article-card.component";
import {Post} from "../../../core/models/post";

@Component({
  selector: 'app-articles',
  imports: [
    DefaultComponent,
    ArticleCardComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  posts: Post[] = [
    {
      id: 1,
      title: "title 1",
      userId: "toto",
      body: "bla bla bla"
    },
    {
      id: 2,
      title: "title 2",
      userId: "toto",
      body: "bla bla bla"
    },
    {
      id: 3,
      title: "title3",
      userId: "toto",
      body: "bla bla bla"
    }, {
      id: 4,
      title: "title 1",
      userId: "toto",
      body: "bla bla bla"
    },
    {
      id: 5,
      title: "title 2",
      userId: "toto",
      body: "bla bla bla"
    },
    {
      id: 6,
      title: "title3",
      userId: "toto",
      body: "bla bla bla"
    },
  ];
}
