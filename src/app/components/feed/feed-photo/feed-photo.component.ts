import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-feed-photo',
  templateUrl: './feed-photo.component.html',
  styleUrls: ['./feed-photo.component.css'],
})
export class FeedPhotoComponent implements OnInit {
  @Input() feedPhoto: Photo;
  comments: any[] = [];
  isClicked = false;

  constructor() {}

  ngOnInit(): void {}

  showComment(): void {
    this.isClicked = !this.isClicked;
  }

  onPostComment(form: NgForm) {
    const comment = form.value.comment;
    if (comment != '') this.comments.push(form.value.comment);
  }
}
