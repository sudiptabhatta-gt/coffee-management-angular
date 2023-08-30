import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllStudents().subscribe(allData => {
      // debugger
      this.users = allData.data.data;
      // console.log(allData.data.data)
      // console.log(this.users)
    })
  }

}
