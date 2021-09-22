import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Shared Components/header/header.component';
import { LoginPageComponent } from './Main Components/login-page/login-page.component';

const routes: Routes = [{path: 'blog', component: HeaderComponent},{ path: 'login', component: LoginPageComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
