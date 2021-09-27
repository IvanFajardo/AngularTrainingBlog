import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApproverPageComponent } from './Main Components/approver-page/approver-page.component';
import { AuthorPageComponent } from './Main Components/author-page/author-page.component';
import { LoginPageComponent } from './Main Components/login-page/login-page.component';
import { BlogService } from './Services/blog/blog.service';
import { BlogModalComponent } from './Shared Components/blog-modal/blog-modal.component';
import { HeaderComponent } from './Shared Components/header/header.component';
import { ResultTableComponent } from './Shared Components/result-table/result-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultTableComponent,
    AuthorPageComponent,
    LoginPageComponent,
    BlogModalComponent,
    ApproverPageComponent,
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
