import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedPhotoComponent } from './components/feed/feed-photo/feed-photo.component';
import { AboutComponent } from './components/about/about.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedComponent,
    FooterComponent,
    FeedPhotoComponent,
    AboutComponent,
    AnswerQuestionComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
