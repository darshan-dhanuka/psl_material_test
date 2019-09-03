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
import { MediaComponent } from './media/media.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { AboutVisionComponent } from './about-vision/about-vision.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';


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
  {path: 'media', component: MediaComponent},
  {path: 'team-members', component: TeamMembersComponent},
  {path: 'about-mission', component: AboutMissionComponent},
  {path: 'about-vision', component: AboutVisionComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'player-profile', component: PlayerProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
