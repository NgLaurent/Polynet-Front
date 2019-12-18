import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryServiceService {
  public stories: any = [];


  constructor(private http: HttpClient) { }

  share(content: { content: string }) {
    return this.http.post('http://localhost:8080/stories', content).toPromise().then(() => {
      this.stories.unshift(content);
    });
  }
  fetch(): Promise<any> {
    return this.http.get('http://localhost:8080/stories').toPromise().then((response) => {

      this.stories = response;
    });
  }
}
