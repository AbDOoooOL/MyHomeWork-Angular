import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['../app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UserListComponent implements OnInit {

  public userList: any = [];
  public details: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 1;
  tableSizes: any = [1, 2, 3, 4, 5, 10];

  constructor(
    private myDataService: MyDataService,
    private locStorage:LocalStorageService,
    private _route: Router
    ) { }

  ngOnInit(): void {
    this.getuser();
  }

  logout(){
    if(confirm('Are you sure you want to log out?')){
      this.locStorage.clearData();
      this._route.navigate(['/getstart']);
      alert('The local storage memory has been cleaned');
    }
    else{
    }
  }

  myLogin(){
    let data = {id:1, user:"asd"}
    localStorage.setItem('userData', JSON.stringify(data));
    console.log(data)
  }

  getuser() {
    this.myDataService.getData().subscribe(
      result => {
        this.userList = result;
        // console.log(result);
      })
  }

  dataChange(event: any) {
    this.page = event;
    this.getuser();
  }
  sizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getuser();
  }
}