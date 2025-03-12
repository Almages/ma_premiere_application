import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Post} from "../../core/models/post";
import {DefaultComponent} from "../../templates/default/default.component";

@Component({
  selector: 'app-article',
  imports: [
    DefaultComponent,
    RouterLink
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {

  article!: Post;
  route = inject(ActivatedRoute);
  // constructor(private route: ActivatedRoute) {  // }

  ngOnInit() {
    this.article = this.route.snapshot.data['article']; // On récupère les données du resolver
    console.log(this.article);
  }

}
