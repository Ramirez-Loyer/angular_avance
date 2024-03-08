import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private users: any[] = [
  {
    id : 1, 
    email : 'alex@mail.com',
    password: '1234',
    roles: ['ADMIN', 'USER']
  }, 
  {
    id : 1, 
    email : 'coco@mail.com',
    password: '1234',
    roles: ['USER']
  }
];
session: any;
  constructor() { }

  onLogin(email: string, password: number, roles: string) {
    let user = this.users.find(
      (u) => u.email=== email && u.password === password);
      if (user) {
        this.session = user;
        localStorage.setItem('session', JSON.stringify(this.session));
      
    return true;
  } else {
    return false;
  }
    
  
  }
}
