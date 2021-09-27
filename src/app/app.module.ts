import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared Components/header/header.component';
import { LoginPageComponent } from './Main Components/login-page/login-page.component';
import { ResultTableComponent } from './Shared Components/result-table/result-table.component';
import { AuthorPageComponent } from './Main Components/author-page/author-page.component';
import { BlogService } from './Services/blog/blog.service';
import { BlogModalComponent } from './Shared Components/blog-modal/blog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultTableComponent,
    AuthorPageComponent,
    LoginPageComponent,
    BlogModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
