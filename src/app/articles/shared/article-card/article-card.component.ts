import {Component, Input, input} from '@angular/core';
import {Post} from "../../../core/models/post";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-article-card',
  imports: [
    RouterLink
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  //post = input.required<Post>;
  @Input() post!: Post;
}
