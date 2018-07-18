import { Component, OnInit } from '@angular/core';
import { User} from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(private userService:UserService, private toastr: ToastrService, private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  OnSubmit(form : NgForm){
    console.log('on submit clicked');
    this.userService.registerUser(form.value).subscribe((data:any) => {
      console.log(data)
      if(data.success == true){
        this.resetForm(form);
        this.toastr.success('Awesome!',data.msg+' Verify Your Account', {
          timeOut: 4000,
        });
        this.router.navigate(['/']);
      } else {
        this.toastr.error('Error -', data.msg);
      }

    });
  }


  resetForm(form?: NgForm){
    if(form!= null)
    form.reset();
    this.user = {
      name:'',
      address:'',
      city:'',
      zipcode:0,
      phone:0,
      email:'',
      username:'',
      password:'',
      investor:false,
      admin:false
    }

  }

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
}

