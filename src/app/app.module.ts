import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AndhraBulletsComponent } from './andhra-bullets/andhra-bullets.component';
import { BengaluruWarriorsComponent } from './bengaluru-warriors/bengaluru-warriors.component';
import { ChennaiThalaivasComponent } from './chennai-thalaivas/chennai-thalaivas.component';
import { DelhiPentharsComponent } from './delhi-penthars/delhi-penthars.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GoanNutsComponent } from './goan-nuts/goan-nuts.component';
import { GujratFalconsComponent } from './gujrat-falcons/gujrat-falcons.component';
import { HomeComponent } from './home/home.component';
import { KolkataKingsComponent } from './kolkata-kings/kolkata-kings.component';
import { LeagueStructureComponent } from './league-structure/league-structure.component';

import { MumbaiAnchorsComponent } from './mumbai-anchors/mumbai-anchors.component';
import { PuneSharksComponent } from './pune-sharks/pune-sharks.component';
import { PunjabBluffersComponent } from './punjab-bluffers/punjab-bluffers.component';
import { RajasthanTiltersComponent } from './rajasthan-tilters/rajasthan-tilters.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { AboutVisionComponent } from './about-vision/about-vision.component';
import { TeamMembersComponent } from './team-members/team-members.component';

import { BlogsComponent } from './blogs/blogs.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { Season1Component } from './season1/season1.component';
import { Season2Component } from './season2/season2.component';
import { PslTeamComponent } from './psl-team/psl-team.component';
import { QualifierComponent } from './qualifier/qualifier.component';
import { ProComponent } from './pro/pro.component';
import { MentorComponent } from './mentor/mentor.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PreviousSeasonsComponent } from './previous-seasons/previous-seasons.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    TermsComponent,
    LoginComponent,
    RegisterComponent,
    TestimonialsComponent,
    AndhraBulletsComponent,
    BengaluruWarriorsComponent,
    ChennaiThalaivasComponent,
    DelhiPentharsComponent,
    FaqsComponent,
    GoanNutsComponent,
    GujratFalconsComponent,
    HomeComponent,
    KolkataKingsComponent,
    LeagueStructureComponent,
    
    MumbaiAnchorsComponent,
    PuneSharksComponent,
    PunjabBluffersComponent,
    RajasthanTiltersComponent,
    AboutMissionComponent,
    AboutVisionComponent,
    TeamMembersComponent,
  
    BlogsComponent,
    PlayerProfileComponent,
    Season1Component,
    Season2Component,
    PslTeamComponent,
    QualifierComponent,
    ProComponent,
    MentorComponent,
    NewsComponent,
    VideosComponent,
    GalleryComponent,
    PreviousSeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
