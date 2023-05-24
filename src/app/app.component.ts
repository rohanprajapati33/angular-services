import { Component, OnInit } from '@angular/core';
import { UserdataService } from './services/userdata.service';
import { UsersDataService } from './data/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'service in angular';
  users: any;
  todos: any;

  // constructor(private userData: UserdataService) {
  //   console.log(userData.users());
  //   this.users = userData.users();
  // }
  constructor(private userData: UsersDataService) {}

  ngOnInit() {
    this.userData.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
    this.todosdetails();
  }
  userDetails(userid: number) {
    this.userData.getUserById(userid).subscribe((data) => {
      console.warn(data);
    });
  }
  todosdetails() {
    this.userData.todos().subscribe((data) => {
      console.warn(data);
      this.todos = data;
    });
  }

  getUserFormData(data: any) {
    console.warn(data);
    this.userData.saveUser(data).subscribe((result) => {
      console.warn(result);
    });
  }
}

// title = 'services';
// sentences = "learn angular"
// today = new Date()
// country : any = ['india','pakistan','bhutan','america']

// log(){
//   console.log(this.sentences)
// }
// add(value:any){
//   this.country.push(value)
//   console.log(this.country)
//   this.country = [...this.country];
// }
