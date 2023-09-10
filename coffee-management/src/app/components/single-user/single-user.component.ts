import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleUserService } from '../../service/single-user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit{

  id:any;
  userData:any;

  constructor(private route: ActivatedRoute, private singleUserService: SingleUserService){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id')
      // console.log(this.id)
    })
   

    // console.log('hereeee',this.id)

    this.getSingleUser()

  }

  getSingleUser(){
    this.singleUserService.getUserbyId(this.id).subscribe(res => {
      // console.log(res)
      this.userData = res;
    })
  }


}
