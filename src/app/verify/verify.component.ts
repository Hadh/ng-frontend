import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(
    private router:Router,
    private userService:UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  OnSubmitVerify(token){
    console.log('on submit clicked');
    this.userService.verifyUser(token).subscribe((data:any) => {
      console.log(data)
      if(data.success == true){
        this.toastr.success('Awesome!',data.msg+' You can now login', {
          timeOut: 4000,
        });
        this.router.navigate(['/']);
      } else {
        this.toastr.error('Error -', data.msg);
      }

    });
  }
}
