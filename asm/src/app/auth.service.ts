import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  login(username:string='', password:string=''){
    const userInfo = {un:username, pw:password}
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('http://localhost:3000/login', JSON.stringify(userInfo), {headers:headers, responseType: 'text'}
  )}
}
