import {Component, inject} from '@angular/core';
import {DefaultComponent} from "../../templates/default/default.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {Post} from "../../core/models/post";


@Component({
  selector: 'app-article-edit',
  imports: [
    DefaultComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.scss'
})
export class ArticleEditComponent {
  router = inject(Router);
  articleService = inject(ArticleService);

  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    userId: new FormControl('')
  });

  onSubmit() {
    if (this.form.invalid) return;

    let post: Post = {
      id: 0,
      title: this.form.value.title === null ? '' : this.form.value.title,
      body: this.form.value.body === null ? '' : this.form.value.body,
      userId: this.form.value.userId === null ? '' : this.form.value.userId
    }
    this.articleService.add(post);
    this.router.navigate(['/articles']).then();
  }
}
