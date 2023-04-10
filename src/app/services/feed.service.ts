import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { feedUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  photos: Photo[] = [];

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    // sort the photo list according to the date
    return this.http.get<Photo[]>(feedUrl).pipe(
      map((result: Photo[]) => {
        let swap = 0;
        let index = 0;
        while (true) {
          if (index < result.length - 1) {
            if (result[index].date > result[index + 1].date) {
              let hold = result[index];
              result[index] = result[index + 1];
              result[index + 1] = hold;
              swap++;
              index++;
            } else {
              index++;
            }
          } else {
            if (swap > 0) {
              swap = 0;
              index = 0;
            } else break;
          }
        }
        return result;
      }),
      tap((result: Photo[]) => {
        this.photos = result;
      })
    );
  }

  getPhotoById(id: number) {
    let photo = this.photos[0];
    for (let p of this.photos) {
      if (p.id === id) {
        return p;
      }
    }
    return photo;
  }
}
