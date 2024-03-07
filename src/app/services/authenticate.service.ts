import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
users: any[] = [
  {
    id : 1, 
    email : 'monmail@mail.com',
    password: 123456,
  }, 
  {
    id : 1, 
    email : 'unautremail@mail.com',
    password: 123456,
  }
];
session: any;
  constructor() { }

  login(email: string, password: number) {
    let user = this.users.find(
      (u) => u.username === email && u.password === password);
      if (user) {
        this.session = user;
        //bd.json.setItem('session', JSON.stringify(this.session));
      }
    return user;
  }
}
