import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhotoComponent } from './components/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedComponent,
    FooterComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
