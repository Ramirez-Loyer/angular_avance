import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Training } from 'src/app/model/training.model'; 
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CartService } from 'src/app/services/cart.service';
import { TrainingsComponent } from '../trainings/trainings.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listTrainings : Training[] | undefined;  
  error: any;

  constructor(private cartService : CartService, private router : Router, private apiService: ApiServiceService) {
  }

 ngOnInit(): void {        
   this.getAllTrainings();
 }


 /*selectedTraining : Training = new Training(); */

 //Méthode pour exploiter l'api dans l'app
 getAllTrainings(){
  this.apiService.getTrainings().subscribe({
    next : (data) => this.listTrainings= data, 
    error : (err) => this.error = err.message, 
    complete : () => this.error = null
  });
}

addOrEdit(){

}

  
}



