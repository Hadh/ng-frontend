import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(
    private router:Router,
    private userService:UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.getProfile().subscribe((profile:any) => {
      console.log("halezrhml")
      this.user = profile.user;
    }, err => {
      console.log(err);
    });
  }

}
