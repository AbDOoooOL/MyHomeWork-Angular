import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private loggedInState = JSON.parse( localStorage.getItem('loggedIn') || 'false')

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInState = value
    localStorage.setItem('loggedIn','true')
  }
  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')||this.loggedInState.toString())
  }
  public saveData(key:string,value:string){
    this.loggedInState = value;
    localStorage.setItem(key, value);
  }
  public getData(key:string){
    localStorage.getItem(key);
  }
  public clearData(){
    localStorage.clear();
  }
}
