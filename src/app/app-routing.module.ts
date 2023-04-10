import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './components/feed/feed.component';
import { AboutComponent } from './components/about/about.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { PostComponent } from './components/post/post.component';
import { PhotosResolverService } from './components/feed/photos-resolver.service';

const routes: Routes = [
  { path: 'feed', component: FeedComponent, resolve: [PhotosResolverService] },
  {
    path: 'feed/:id',
    component: PostComponent,
    resolve: [PhotosResolverService],
  },
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'questions', component: AnswerQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
