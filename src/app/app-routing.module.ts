import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Shared Components/header/header.component';
import { LoginPageComponent } from './Main Components/login-page/login-page.component';
import { ApproverPageComponent } from './Main Components/approver-page/approver-page.component';
import { UserGuard } from './Services/user.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'blog',
    component: HeaderComponent,
    children: [{ path: 'approver', component: ApproverPageComponent }],
    canActivate: [UserGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
