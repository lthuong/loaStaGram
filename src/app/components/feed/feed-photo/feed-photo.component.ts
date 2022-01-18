import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-feed-photo',
  templateUrl: './feed-photo.component.html',
  styleUrls: ['./feed-photo.component.css']
})
export class FeedPhotoComponent implements OnInit {
  @Input() feedPhoto : Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
