import { Component, OnInit,ViewChild } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OverlayModule } from '@angular/cdk/overlay';

export interface UserData {
  category: string;
  player_name: string;
  team: string;
  tour_played: string;
  points_earned: string;
  ranking: string;
  overall: string;
  bio: string;
}
/** Constants used to fill up our data base. */
const COLORS: string[] = [
  '', '5','4','4','7','4','2','3','2','3','3','4','4','6','4','6','5','3','2','2','3','6','4','5','4','5','4','3','2','4','2','5','5','5','5','5','2','2','4','2','4','5','5','4','5','3','5','4','2','4','3','5','6','3','5','5','2','4','3','2','4','4','6','4','4','5','4','2','2','4','4','5','7','4','5','7','4','2','2','2','2','6','4','5','6','4','4','2','1','3','4','5','5','5','5','4','4','3','2','3','4','4','5','4','5','6','6','2','2','4','2'
];
const NAMES: string[] = [
  'Kunal Patni', 'Kunal Patni', 'Madan Kumar','Rajat Sharma','Michael Soyza','Vivek Rughani','Aditya Kumar','Anik Ajmera','Jeevendra Arora','Chiraag Patel','Avadh Shah','Aditya Sushant','Jaideep Sajwan','Ratul Steves','Ashish Munot','Arsh Grover','Varun Gupta','Gokul Raj Dharmarajan','Sandeep Thakral','Bhargav Bandi','Sagar Choudhury','Kanishka Samant','Manoj Pentakota','Deepak Bothra','Kalyan Chakravarthy','Bobby Zhang','Rohit Behal','Praveen Anguru','Pushpak Bhatia','Ragesh','Vikas Jethnani','Akash Malik','Vinod Megalmani','Shashank Jain','Martin Jacobson','Terry Fan','Prashant Bhutoria','Prabhakaran S','Niharika Bindra','Akshay Nasa','Vaibhav Sharma','Dhaval Mudgal','Abhinav Iyer','Aman Dhamija','Dylan Linde','Kevin Macphee','Pranay Chawla','Pranav Khandalkar','Kshitij Kucheria','Siddharth Karia','Firoz Khan','Romit Advani','Zurvan Tumboli','Jaydeep Dawer','Ioannis A. Konstas','Eka Vedantham','Mayank Jain','Ram Kakkar','Naman Khettry','Ankit Takle','Loveleen Singh','Sumit Asrani','Sahil Agarwal','Sangeeth Mohan','Raman Gujral','Samay Parikh','Vinayak Bajaj','Jagjot Singh Pangli','Anish Garg','Rohan Singh','Himanshu Arora','Amit Jain','Nishant Sharma','Alok Birewar','Haresh Kukreja','Danish Shaikh','Avinash Tauro','Sasi Kiran','Honey Bijlani','Gaurav Gupta','Rajesh Rajpopat','Raghav Bansal','Sharad Rao','Kartik Ved','Alan Lau','Gerald Karlic','Dhawal Lachhwani','Amit Gupta','Aditya Degala','Myron Pereira','Aryan Chaudhary','Abhishek Goindi','Sumit Sapra','Paawan Bansal','Sofia Lovegren','Rajnish Kumar','Yuvraj Chaudhary','Abhishek Garg','Rohan Rishi','Gaurav Sood','Ankit Wadhawan','Shravan Chhabria','Siddarth Singhvi','Vaibhav Sharma','Sriharsha D.','Sahil Chutani','Sajal Gupta','Banmanlang Lyndem','Sai Siddharth','Sanjay Taneja','Saumil Krishnani'
];
const TEAMS : string[] = ['','Andhra Bullets','Andhra Bullets','Andhra Bullets','Andhra Bullets','Andhra Bullets','Andhra Bullets','Andhra Bullets','Andhra Bullets','Andhra Bullets','Andhra Bullets','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Bengaluru Warriors','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Chennai Thalaivas ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Delhi Panthers ','Goan Nuts','Goan Nuts','Goan Nuts','Goan Nuts','Goan Nuts','Goan Nuts','Goan Nuts','Goan Nuts','Goan Nuts','Goan Nuts','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Gujarat Falcons ','Kolkata Kings','Kolkata Kings','Kolkata Kings','Kolkata Kings','Kolkata Kings','Kolkata Kings','Kolkata Kings','Kolkata Kings','Kolkata Kings','Kolkata Kings','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Mumbai Anchors','Pune Sharks','Pune Sharks','Pune Sharks','Pune Sharks','Pune Sharks','Pune Sharks','Pune Sharks','Pune Sharks','Pune Sharks','Pune Sharks','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Punjab Bluffers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers','Rajasthan Titlers']

const CATEGORYY : string[] = ['','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live','Mentor ','Pro','Pro ','Wildcard','Wildcard','Online ','Online ','Online ','Live  ','Live']

const POINTS_EARNED : string[] = ['','49000','19000','178000','116000','19000','33000','33000','0','0','47000','93000','0','19000','145000','23000','0','0','116000','50000','33000','108500','19000','50000','66000','150000','77000','50000','0','19000','0','84500','0','50000','47000','23500','66000','0','116000','66000','80000','82500','53000','50000','50000','23500','19000','30000','0','159000','0','76000','0','0','0','159000','0','23500','0','0','33000','34500','30000','30000','146000','114000','0','0','0','42000','50000','76000','76000','80000','50000','23000','19000','0','0','0','0','30000','0','30000','42000','92000','0','0','0','50000','143000','0','29000','34500','0','0','0','0','0','47000','0','80000','30000','29000','30000','0','0','0','0','0','159000']

const RANKINGS : string[] = ['','21','30','1','7','30','25','25','31','31','22','10','31','30','5','29','31','31','7','20','25','9','30','20','18','3','16','20','31','30','31','12','31','20','22','28','18','31','7','18','15','13','19','20','20','28','30','26','31','2','31','17','31','31','31','2','31','28','31','31','25','24','26','26','4','8','31','31','31','23','20','17','17','14','20','29','30','31','31','31','31','26','31','26','23','11','31','31','31','20','6','31','27','24','31','31','31','31','31','22','31','14','26','15','26','31','31','31','31','31','2']

const OVERALL_RANKINGS : string[] = ['','54','67','11','23','67','60','60','69','26','56','19','62','67','17','66','42','69','23','52','60','25','29','52','43','15','39','22','69','30','69','6','12','52','56','63','38','69','23','38','37','24','51','52','52','63','46','62','69','3','69','40','45','69','69','13','69','49','38','69','60','1','62','48','9','5','69','69','69','57','21','2','27','36','52','7','53','69','62','69','69','34','69','32','57','31','69','69','69','52','18','20','33','59','69','69','69','69','69','16','69','10','35','37','62','69','69','69','69','62','13']

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  public show_dialog : boolean = false;
  public show_reg : boolean = false;
  public button_name : any = 'Show Login Form!';
  user: SocialUser;
  details: UserDetails;
  displayedColumns: string[] = ['player_name', 'team', 'category', 'tour_played','points_earned','ranking','overall'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public auth: AuthenticationService, private authService: AuthService, location: PlatformLocation) {
    location.onPopState(() => {
       this.load();
   });
   const users = Array.from({length: 110}, (_, k) => createNewUser(k + 1));console.log(users);
   this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      //console.log(user);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  load()
{
  window.location.reload();
}

toggle() {
  document.getElementById('divshow2').style.display = 'block';
}

togglereg() {
  document.getElementById('divreg').style.display = 'block';
}

signOut(): void {
  this.authService.signOut();
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[id];
  const team = TEAMS[id];
  const cate = CATEGORYY[id];
  const points_earned='';
  const ranking ='';
  const overall ='';
  const bio ='';
  return {
    category: cate,
    player_name: name,
    team: team,
    tour_played: COLORS[id],
    points_earned:POINTS_EARNED[id],
    ranking:RANKINGS[id],
    overall:OVERALL_RANKINGS[id],
    bio:bio
  };
}
