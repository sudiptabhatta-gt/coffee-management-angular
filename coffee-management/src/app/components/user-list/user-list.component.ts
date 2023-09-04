import { AdduserService } from './../../service/adduser.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any = [];

  closeResult:string = '';

  addUserForm:any; 

  constructor(
    private usersService: UsersService,
    private modalService: NgbModal, 
    private fb: FormBuilder,
    private addUserService: AdduserService) { }

  ngOnInit(): void {
    this.getStudents()

    this.addUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      team: [null, Validators.required],
      is_staff: [false, Validators.required],
      balance: [0, Validators.required],
      password: ['1234']
    })
  }


  getStudents(){
    this.usersService.getAllStudents().subscribe(allData => {
      // debugger
      this.users = allData.data.data;
      // console.log(allData.data.data)
      // console.log(this.users)
    })
  }


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  get fc(){
    return this.addUserForm.controls 
  }


  addFormSubmit(){
    // console.log(this.addUserForm.value)

    this.addUserService.addFormSubmitData(this.addUserForm.value).subscribe(res => {
      this.getStudents() // reload the table 
    })

    this.modalService.dismissAll(); //dismiss the modal
  }

}
