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

  form : FormGroup = this.formBuilder.group({
  email: ['', Validators.required/*.pattern('[a-z0-9.@]*')*/ ],
      password : ['', Validators.required/*.minLength(5)]*/ ],
    });
    
    constructor(public authService : AuthenticateService, private formBuilder : FormBuilder, private router : Router) {  
    
    }

  ngOnInit(): void {
  }
 

  Login() {
   let user = this.authService.onLogin(
    this.form.value.email, 
    this.form.value.password
    
    );

    if(!user){
      alert('Invalid email or password');
    }else {
      this.router.navigateByUrl('/admin');
    }

    }

}
