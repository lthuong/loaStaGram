import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedPhotoComponent } from './components/feed/feed-photo/feed-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedComponent,
    FooterComponent,
    FeedPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
