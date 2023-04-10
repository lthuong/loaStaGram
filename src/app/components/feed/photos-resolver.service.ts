import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from 'src/app/models/photo';
import { FeedService } from 'src/app/services/feed.service';

@Injectable({ providedIn: 'root' })
export class PhotosResolverService implements Resolve<Photo[]> {
  constructor(private feedService: FeedService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Photo[] | Observable<Photo[]> | Promise<Photo[]> {
    return this.feedService.getPhotos();
  }
}
