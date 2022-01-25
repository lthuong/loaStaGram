import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { feedUrl } from '../components/configs/api';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  /* 
  // static list of photos to be displayed on the feed
  photos = [
    new Photo(1, "Happy birthday to me", "https://media.istockphoto.com/photos/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles-picture-id1136810581?k=20&m=1136810581&s=612x612&w=0&h=Jj80oUK2CtY9nwYYRfJXB31ydjhOo5igRolQn-lV8M0="),
    new Photo(2, "The second time", "https://www.mayrhofner-bergbahnen.com/fileadmin/_processed_/f/1/csm_winterlandschaft-penken-2_b094b85f45.jpg"),
    new Photo(3, "It's gonna be fun!!!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSqgtKElpRJtMg9G6MjoDIGjMq0xxBArtrQ&usqp=CAU"),
    new Photo(4, "Let's gooooooooooooo", "https://www.spiritbutton.com/wp-content/uploads/2018/02/59d475ba81f82ed3c7607d4f45425c97.jpg"),
    new Photo(5, "Watch this drama the 999 times =))", "https://image.tmdb.org/t/p/w780/lZo7G1kEU70PHP1dCe46I0cUKiF.jpg")
  ]
  */

  constructor(private http : HttpClient) { }

  getPhotos() : Observable<Photo[]> {
    // sort the photo list according to the date 
    return this.http.get<Photo[]>(feedUrl).pipe(
      map((result : Photo[]) => {
        let swap = 0;
        let index = 0;
        while(true) {
          if(index < result.length - 1) {
            if(result[index].date > result[index + 1].date) {
              let hold = result[index];
              result[index] = result[index + 1];
              result[index + 1] = hold;
              swap++;
              index++;
            } else {
              index++;
            }
          } else {
            if(swap > 0) {
              swap = 0;
              index = 0;
            } else break;
          }
        }
        return result;
      })
    );
  }
}
