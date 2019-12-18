import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoryServiceService} from '../story-service.service';

class Story {
  content: string;
}

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.scss']
})


export class StoryFeedComponent implements OnInit {
  stories: any = [];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private StoryServiceService: StoryServiceService) { }

  ngOnInit() {
    this.StoryServiceService.fetch().then(() => {
      this.stories = this.StoryServiceService.stories;
    });
  }
}
