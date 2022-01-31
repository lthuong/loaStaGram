import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedPhotoComponent } from './components/feed/feed-photo/feed-photo.component';
import { HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './others/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedComponent,
    FooterComponent,
    FeedPhotoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
