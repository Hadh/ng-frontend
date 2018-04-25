import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { ValidateService } from '../services/validate.service';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class UserService {
  readonly rootUrl = "http://localhost:3000/users";
  readonly rootUrl2 = "http://localhost:3000/projects/user/";
  authToken:any;
  user:any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient,  private validateService: ValidateService) { }

  registerUser(user: User){
    const body :User = {
      username: user.username,
      password: user.password,
      email: user.email,
      name: user.name,
      address : user.address,
      zipcode: user.zipcode,
      city:user.city,
      phone: user.phone,
      investor:false,
      admin:false
    }
    return this.http.post(this.rootUrl+'/register',body, this.httpOptions)
  }

  verifyUser(token: String){
    const body = {
      secretToken:token
    };
    return this.http.post(this.rootUrl+'/verify',body, this.httpOptions)
  }

  userAuthentification(email, password){
    var data = {
      email: email,
      password: password
    }
    var requestHeader = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post(this.rootUrl+'/authenticate',data, this.httpOptions )
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders({'Authorization': this.authToken, 'Content-Type':'application/json'});
    console.log("hhhehehh",headers)
    return this.http.get(this.rootUrl+'/profile', {headers:headers} )
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  Logout(){
    this.authToken= null;
    this.user= null;
    localStorage.clear();
  }

  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  getUserProjects(){
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user.id;
    let headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.http.get(this.rootUrl2+user_id, {headers:headers} )
  }

  getUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }
}
