import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private h:HttpClient) { }
  getTin(){
    return this.h.get('http://localhost:3000/tintuc');
  }
}
