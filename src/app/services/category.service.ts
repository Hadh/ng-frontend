import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  readonly rootUrl = "http://localhost:3000/categories";
  readonly rootUrl2 = "http://localhost:3000/projects/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }


  getCategories(){
    let headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.http.get(this.rootUrl, {headers:headers} )
  }

  getProjectsbyCategory(category_name){
    let headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.http.get(this.rootUrl2+category_name, {headers:headers} )
  }

}
