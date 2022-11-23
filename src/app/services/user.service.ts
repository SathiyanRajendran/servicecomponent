import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public loggerService:LoggerService) { }
  users=[
    {name:'sathiyan',status:'active'},
    {name:'rajendran',status:'active'},
    {name:'sankar',status:'inactive'}
  ]
  AddNewUser(name:string,status:string){
    this.users.push({name:name,status:status});
    this.loggerService.LogMessage(name,status)
  }
  
}
