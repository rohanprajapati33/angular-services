import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {
    console.log('intialized')
  }
  users() {
    return [
      { name: 'rohan', age: 22, email: 'rohan@test.com' },
      { name: 'rahul', age: 22, email: 'rahul@test.com' },
      { name: 'rohit', age: 22, email: 'rohit@test.com' },
      { name: 'ajay', age: 22, email: 'ajay@test.com' },
    ];
  }
}
