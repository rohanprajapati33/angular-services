import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.apiUrl + 'users')
  }
  
  saveUser(data:any){
    return this.http.post(this.apiUrl,data)
  }
  
  getUserById(userId: number){
      return this.http.get(this.apiUrl + 'users/'  + userId);
  }

  todos(){
    return this.http.get(this.apiUrl + 'todos')
  }
}
