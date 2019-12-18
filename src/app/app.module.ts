import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import {_MatMenuDirectivesModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { StoryPublisherComponent } from './story-publisher/story-publisher.component';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { FooterComponent } from './footer/footer.component';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoryServiceService} from './story-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StoryPublisherComponent,
    StoryFeedComponent,
    FooterComponent
  ],
  imports: [
    // tslint:disable-next-line:max-line-length
    MatButtonModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, _MatMenuDirectivesModule, MatMenuModule, FormsModule, HttpClientModule, MatCardModule
  ],
  providers: [StoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
