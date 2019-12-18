import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoryServiceService} from '../story-service.service';


@Component({
  selector: 'app-story-publisher',
  templateUrl: './story-publisher.component.html',
  styleUrls: ['./story-publisher.component.scss']
})
export class StoryPublisherComponent implements OnInit {
  content: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private StoryServiceService: StoryServiceService) { }

  ngOnInit() {
  }

  shareStory() {
    // tslint:disable-next-line:no-unused-expression
    this.StoryServiceService.share({content: this.content});
  }
}
