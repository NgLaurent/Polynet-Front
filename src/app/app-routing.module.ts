import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {StoryPublisherComponent} from "./story-publisher/story-publisher.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component:StoryPublisherComponent, canActivate: [AuthGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'feeds' , component:StoryPublisherComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
