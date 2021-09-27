import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproverPageComponent } from './Main Components/approver-page/approver-page.component';
import { AuthorPageComponent } from './Main Components/author-page/author-page.component';
import { LoginPageComponent } from './Main Components/login-page/login-page.component';
import { UserGuard } from './Services/user.guard';
import { HeaderComponent } from './Shared Components/header/header.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'blog',
    component: HeaderComponent,
    children: [
      {path: 'author', component: AuthorPageComponent},
      { path: 'approver', component: ApproverPageComponent }],
    canActivate: [UserGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
