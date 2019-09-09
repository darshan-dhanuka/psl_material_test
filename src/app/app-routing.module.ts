import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueStructureComponent } from './league-structure/league-structure.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AndhraBulletsComponent } from './andhra-bullets/andhra-bullets.component';
import { BengaluruWarriorsComponent } from './bengaluru-warriors/bengaluru-warriors.component';
import { ChennaiThalaivasComponent } from './chennai-thalaivas/chennai-thalaivas.component';
import { DelhiPentharsComponent } from './delhi-penthars/delhi-penthars.component';
import { GujratFalconsComponent } from './gujrat-falcons/gujrat-falcons.component';
import { GoanNutsComponent } from './goan-nuts/goan-nuts.component';
import { KolkataKingsComponent } from './kolkata-kings/kolkata-kings.component';
import { MumbaiAnchorsComponent } from './mumbai-anchors/mumbai-anchors.component';
import { PuneSharksComponent } from './pune-sharks/pune-sharks.component';
import { PunjabBluffersComponent } from './punjab-bluffers/punjab-bluffers.component';
import { RajasthanTiltersComponent } from './rajasthan-tilters/rajasthan-tilters.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { AboutVisionComponent } from './about-vision/about-vision.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PslTeamComponent } from './psl-team/psl-team.component';
import { QualifierComponent } from './qualifier/qualifier.component';
import { ProComponent } from './pro/pro.component';
import { MentorComponent } from './mentor/mentor.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { VideosComponent } from './videos/videos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Season1Component } from './season1/season1.component';
import { Season2Component } from './season2/season2.component';
import { PreviousSeasonsComponent } from './previous-seasons/previous-seasons.component';
import { NewsComponent } from './news/news.component';
import { LegalityComponent } from './legality/legality.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'league-structure' , component: LeagueStructureComponent},
  {path: 'faqs' , component: FaqsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'andhra-bullets', component: AndhraBulletsComponent},
  {path: 'bengaluru-warriors', component: BengaluruWarriorsComponent},
  {path: 'chennai-thalaivas', component: ChennaiThalaivasComponent},
  {path: 'delhi-penthars', component: DelhiPentharsComponent},
  {path: 'gujrat-falcons', component: GujratFalconsComponent},
  {path: 'goan-nuts', component: GoanNutsComponent},
  {path: 'kolkata-kings', component: KolkataKingsComponent},
  {path: 'mumbai-anchors', component: MumbaiAnchorsComponent},
  {path: 'pune-sharks', component: PuneSharksComponent},
  {path: 'punjab-bluffers', component: PunjabBluffersComponent},
  {path: 'rajasthan-tilters', component: RajasthanTiltersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'legality', component: LegalityComponent},
  {path: 'how-to-play', component: HowToPlayComponent},
  {path: 'team-members', component: TeamMembersComponent},
  {path: 'about-mission', component: AboutMissionComponent},
  {path: 'about-vision', component: AboutVisionComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'player-profile', component: PlayerProfileComponent},
  {path: 'psl-teams', component:  PslTeamComponent},
  {path: 'qualifier', component: QualifierComponent},
  {path: 'pro', component:  ProComponent},
  {path: 'mentor', component:  MentorComponent},
  {path: 'news', component:  NewsComponent},
  {path: 'videos', component:  VideosComponent},
  {path: 'gallery', component:  GalleryComponent},
  {path: 'season1', component:  Season1Component},
  {path: 'season2', component:  Season2Component},
  {path: 'previous-seasons', component:  PreviousSeasonsComponent},
  {path: 'terms', component:  TermsAndConditionsComponent},
  {path: 'player-profile', component:  PlayerProfileComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
