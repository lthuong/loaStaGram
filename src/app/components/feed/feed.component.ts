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
      // i will add something like this
    });

  }

}
