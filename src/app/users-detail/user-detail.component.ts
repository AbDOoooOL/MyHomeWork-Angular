import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['../app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class UserDetailComponent implements OnInit {

  public userList: any = [];
  myUrl: any;
  id: any;

  constructor(
    private myDataService: MyDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mySelect()
  }

  mySelect() {
    this.myUrl = this.myDataService.getDetails(this.route.snapshot.params['id']).subscribe(
      res => {
        this.userList = res;
        console.log(this.userList.data);
      }
    )
  }
}