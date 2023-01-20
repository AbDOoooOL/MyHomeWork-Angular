import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app-routing.module';
import { SingupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GetstartComponent } from './getstart/getstart.component';

import { UserListComponent } from './users/user-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailComponent } from './users-detail/user-detail.component';
 

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SingupComponent,
    LoginComponent,
    GetstartComponent,
    UserDetailComponent,

  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'login', component: LoginComponent},
      {path:'signup', component: SingupComponent},
      {path:'getstart', component: GetstartComponent},
      {path:'user-list', component: UserListComponent},
      {path:'user-detail', component: UserDetailComponent},
      {path:'user-detail/:id', component: UserDetailComponent},
      ////////
      {path:'' , redirectTo: 'getstart' , pathMatch: 'full' },
      {path:'**' , redirectTo: 'getstart' , pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }