import {Injectable} from '@angular/core';
import {Post} from "../../core/models/post";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private posts: Post[] = [
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
      title: "title 4",
      userId: "toto",
      body: "bla bla bla"
    },
    {
      id: 5,
      title: "title 5",
      userId: "toto",
      body: "bla bla bla"
    },
    {
      id: 6,
      title: "title 6",
      userId: "toto",
      body: "bla bla bla"
    },
  ];

  get() {
    return this.posts;
  }

  getById(id: number) {
    return this.get().find(post => post.id === id);
  }

  add(article: Post) {
    console.debug('add', this.get());
    this.posts.push(article);
    console.debug('add', this.get());
  }
}
