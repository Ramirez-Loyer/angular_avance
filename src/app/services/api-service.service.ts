import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Training } from '../model/training.model';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  public getTrainings() {
    return this.http.get<Training[]>(environment.host+"/trainings");
  }

  public getTraining(id : number) {
    return this.http.get<Training>(environment.host+"/trainings/"+id);
  }
}
