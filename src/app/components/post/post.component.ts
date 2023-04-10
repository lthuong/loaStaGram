import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Photo } from 'src/app/models/photo';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  feedPhoto: Photo;
  paramSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.params.subscribe((param) => {
      const id = +param['id'];
      this.feedPhoto = this.feedService.getPhotoById(id);
    });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
