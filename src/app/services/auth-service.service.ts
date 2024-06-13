import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiURL = enviroment.baseURLAPI

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  loginService(data: any){
    return this.http.post(
      this.apiURL + 'Authenticate/login',
      data,
      this.httpOptions
    )
  }

  registerService(data: any){
    return this.http.post(
      this.apiURL + 'Authenticate/register-user',
      data,
      this.httpOptions
    )
  }




}
