import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError:boolean= false;


  constructor(private userService:UserService, private router:Router, private toastr: ToastrService,) { }

  ngOnInit() {
  }

  OnSubmitLogin(email, password){
    this.userService.userAuthentification(email, password).subscribe((data:any)=>{
      if(data.success){
        this.userService.storeUserData(data.token, data.user);
        //localStorage.setItem('userToken', data.token);
        console.log(data)
        this.toastr.success('Awesome!','You are logged in!', {
          timeOut: 4000,
        });
        this.router.navigate(['/'])
      } else {
        this.isLoginError = true;
      }

    }, (err: HttpErrorResponse)=> {
      this.isLoginError = true;
    })
  }

}
