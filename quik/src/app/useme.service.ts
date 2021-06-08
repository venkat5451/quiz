import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsemeService {

  constructor(private _service:HttpClient) { }
  getQuiz():Observable<Object>{
    return this._service.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986')
}}
