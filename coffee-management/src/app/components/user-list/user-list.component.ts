import { AdduserService } from './../../service/adduser.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

import { UserClass } from '../../models/user-class.model';
import { UpdateuserService } from 'src/app/service/updateuser.service';
import { DeleteuserService } from 'src/app/service/deleteuser.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any = [];

  closeResult:string = '';

  addUserForm:any; 
  editForm:any;
  updateUserForm:any;

  deleteID:any;


  constructor(
    private usersService: UsersService,
    private modalService: NgbModal, 
    private fb: FormBuilder,
    private addUserService: AdduserService,
    private updateUserService: UpdateuserService,
    private deleteUserService: DeleteuserService) {}

  ngOnInit(): void {
    this.getStudents()

    this.addUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      team: [null],
      is_staff: [false],
      balance: [0],
      password: ['1234']
    })


    //  specify the controls that make up the form
    this.updateUserForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      team: [''],
      is_staff: [''],
      balance: ['', Validators.required]
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


  openAdd(content:any) {
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
    this.addUserForm.reset()
    this.modalService.dismissAll(); //dismiss the modal
  }


  get fcUpdate(){
    return this.updateUserForm.controls
  }



  openUpdate(contentUpdate:any, user: UserClass) {
    this.modalService.open(contentUpdate, {
      backdrop: 'static',
      // size: 'lg'
    });

    this.updateUserForm.patchValue( {
      id: user.id, 
      username: user.username,
      email: user.email,
      team: user.team,
      // is_staff: user.is_staff ? 'Admin' : 'User',
      is_staff: user.is_staff,
      balance: user.balance
    });
  }

  updateFormSubmit(){
    this.updateUserService.updateFormSubmitData(this.updateUserForm.value).subscribe(res => {
      this.getStudents();
    })
    this.modalService.dismissAll();
  }


  openDelete(contentDelete:any, user: UserClass){
    this.deleteID = user.id
    this.modalService.open(contentDelete, {
      backdrop: 'static',
      // size: 'lg'
    });
  }


  onDelete(){
    this.deleteUserService.deleteRecord(this.deleteID).subscribe(res => {
      this.getStudents()
    })

    this.modalService.dismissAll();
  }

}
