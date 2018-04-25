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
  userProjects;
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

    this.getUserProjects();
  }

  getUserProjects(){
    this.userService.getUserProjects().subscribe((projects:any)=> {
      console.log("projects retrieved");
      console.log(projects);
      this.userProjects = projects.projects;
    }, err => {
      console.log(err);
    })
  }

}
