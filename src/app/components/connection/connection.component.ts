import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {


  form : FormGroup = this.fb.group({
      email: ['', Validators.required],
      password : ['', Validators.required],
    });
    
    constructor(public authService : AuthenticateService, private fb : FormBuilder, router : Router) {  
    
    }

  ngOnInit(): void {
  }
  session: any;

  login() {
   
    }

}
