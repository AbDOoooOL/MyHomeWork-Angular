import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;
  name!: any;
  password: any;

  loginArray: any = {};

  user: any = {};

  constructor(
    private _route: Router,
    private http: HttpClient,
    private localStore: LocalStorageService
  ) { }

  ngOnInit(): void {


    this.login = new FormGroup({
      'name': new FormControl(),
      'password': new FormControl()
    });
  }

  // mylog() {
  //   // this.user  = this._http.get<any>("http://localhost:3000/signup").subscribe(res => console.log(res));
  //   // localStorage.setItem(this.user.value.name, this.user.value.password);
  //   console.log(this.login.value.name, this.localStore.getData(this.login.value.name));
  // }
  public productUrl = 'http://localhost:3000/signup';

  logindata(login: FormGroup) {

    this.http.get<any>(this.productUrl)
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.name === this.login.value.name && a.password === this.login.value.password
        });

        if (user) {
          this.localStore.saveData(this.login.value.name, this.login.value.password);
          alert(`Welcome Dear ${this.login.value.name} Logged In`);
          // this.login.reset();
          this._route.navigate(['/user-list']);
        } else {
          alert('User Or Password Not Found');
          this._route.navigate(['/login']);
        }
      }, err => {
        alert('something was wrong \nDo not forget to add json server using the following command \nnpm install -g json-server\njson-server --watch db.json');
      });
  }
}