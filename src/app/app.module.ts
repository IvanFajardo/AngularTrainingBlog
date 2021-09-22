import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModalComponent } from './Shared Components/blog-modal/blog-modal.component';

@NgModule({
  declarations: [AppComponent, BlogModalComponent],
  imports: [BrowserModule, AppRoutingModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
