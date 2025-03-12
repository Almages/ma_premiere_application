import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/notfound/notfound.component";
import {LoginComponent} from "./pages/login/login.component";
import {ArticleComponent} from "./articles/article/article.component";
import {ArticlesComponent} from "./articles/articles/articles.component";
import {articleResolver} from "./articles/resolvers/article.resolver";
import {ArticleEditComponent} from "./articles/article-edit/article-edit.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'articles/create',
    component: ArticleEditComponent,
  },
  {
    path: 'articles/:id',
    component: ArticleComponent,
    resolve: {
      article: articleResolver
    }
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
