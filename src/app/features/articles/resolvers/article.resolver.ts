import {ResolveFn} from '@angular/router';
import {ArticleService} from "../services/article.service";
import {inject} from "@angular/core";
import {Post} from "../../../core/models/post";

export const articleResolver: ResolveFn<Post | undefined> = (route, _state) => {
  const articleService = inject(ArticleService);
  const id = route.paramMap.get('id');
  console.debug(id);
  return articleService.getById(Number(id));
};
