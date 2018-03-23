import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public isUserLoggedIn: boolean;
  constructor(
    private router:Router,
    private userService:UserService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }

  Logout(){
    this.toastr.success('Logged out!','', {
      timeOut: 4000,
    });
    this.userService.Logout();
    this.router.navigate(['/']);
  }

}
