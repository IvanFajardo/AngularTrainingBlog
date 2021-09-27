import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Shared Components/header/header.component';
import { LoginPageComponent } from './Main Components/login-page/login-page.component';
import { UserGuard } from './Services/user.guard';
import { AuthorPageComponent } from './Main Components/author-page/author-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'blog', component: HeaderComponent,
    children:[
      {path: 'author', component: AuthorPageComponent},
    ],
    canActivate:[UserGuard]
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
