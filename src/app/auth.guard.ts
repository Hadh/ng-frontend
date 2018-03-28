import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router:Router,
        private userService:UserService,
        ) { }
    
        canActivate() {
           if(this.userService.loggedIn()){
               return true;
           } else {
               this.router.navigate(['/login']);
               return false;
           }
        }
}