import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/notfound/notfound.component";
import {LoginComponent} from "./pages/login/login.component";
import {ArticleComponent} from "./features/articles/article/article.component";
import {ArticlesComponent} from "./features/articles/articles/articles.component";
import {articleResolver} from "./features/articles/resolvers/article.resolver";
import {ArticleEditComponent} from "./features/articles/article-edit/article-edit.component";
import {UsersComponent} from "./features/users/users/users.component";
import {authenticationGuard} from "./core/security/authentication.guard";


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
    canActivate: [authenticationGuard]
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
    path: 'users',
    component: UsersComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
