import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email: string , password: string){
    //return http.http.post(url , {email: email , password: password})
    return new Observable((obs) => {
      setTimeout(()=> {
        if(email === "email@gmail.com" && password === "password"){
          obs.next(true)
        }
        else{
          obs.next(false)
        }
        obs.complete()
      } , 2000)
    })
  }
}
