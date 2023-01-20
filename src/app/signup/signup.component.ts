import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css']
})
export class SingupComponent implements OnInit {

  signup!: FormGroup | any;
  signuser: any;

  constructor(
    private _route: Router,
    private _http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      'name': new FormControl,
      'email': new FormControl,
      'password': new FormControl,
    })
  }
  // public productUrl = 'http://localhost:4200/api/db.json';
  public productUrl = 'http://localhost:3000/signup';

  signupdata(signup: FormGroup) {
    this._http.post<any>(this.productUrl, this.signup.value)
      .subscribe(res => {
        alert(`Welcome Dear ${this.signup.value.name} - Successfully Registered - Click OK To Go To The Login Page `);
        // this._toast?.success(this.signuser, 'successfully registered');
        this._route.navigate(['/login']);
        this.signup.reset();
        // this.signuser = this.signup.value.name;

      }, err => {
        alert('something was wrong \nDo not forget to add json server using the following command \nnpm install -g json-server\njson-server --watch db.json');
      });
  }
}