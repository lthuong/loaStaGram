import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';

import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  photos : Photo[] = [];

  constructor(private feedService : FeedService) { }

  ngOnInit(): void {
    this.feedService.getPhotos().subscribe((photos) => {
      this.photos = photos;
      /**
       * Let's add a few line of comments
       * I'm still very new to all of this
       * Hope that i will get better
       */
    });

  }

}
