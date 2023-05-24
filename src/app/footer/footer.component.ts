import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  users:any;
  constructor(private userData:UserdataService){
    console.log("userdata",userData.users())
    this.users=userData.users();
  }

}
