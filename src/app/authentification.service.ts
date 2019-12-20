import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  Connected = false;

  constructor(private http: HttpClient) { }

  isConnected(){
    return this.Connected;
  }

  login(username: string, password:string){
    const body = new URLSearchParams();
    body.set("username",username);
    body.set("password", password)

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post('http://localhost:8080/login', body.toString(), options).toPromise().then(
      (sucess) => {
        this.Connected = true;
      }, (error) =>{
        this.Connected = false;
      }
    )
  }
}
