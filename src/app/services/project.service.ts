import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import {Observable} from 'rxjs';
import { Project } from '../models/project.model';
import 'rxjs/add/operator/map';
import { Investment } from '../models/investment';

@Injectable()
export class ProjectService {
  readonly rootUrl = "http://localhost:3000/projects/";
  readonly rootUrl1 ="http://localhost:3000/investments/";

  authToken:any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  httpOptions2 = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  }
  constructor(private http:HttpClient) { }

  
  getProjects(){
    let headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.http.get(this.rootUrl, {headers:headers} )
  }

  getProjectsbyCategory(category_name){
    let headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.http.get(this.rootUrl+category_name, {headers:headers} )
  }

  getProjectById(project_id){
    let headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.http.get(this.rootUrl+'project/'+project_id, {headers:headers} )
  }

  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token;
  }

  addProject(project:FormData){
   /* const body :Project = {
      name: project.name,
      description : project.description,
      tagline:project.tagline,
      category: project.category,
      fundraiser: project.fundraiser,
      website: project.website,
      owner: project.owner,
      currentfund: project.currentfund,
      revenue:project.revenue,
      business_model:project.business_model,
      risks:project.risks,
      add_information:project.add_information,
      logo: project.logo,
      cover:project.cover,
      image1: project.image1,
      image2: project.image2,
      image3: project.image3
    }*/
    this.loadToken();
    console.log(this.authToken);
    let headers = new HttpHeaders({'Authorization': this.authToken});
    return this.http.post(this.rootUrl,project , {headers:headers})
  }

  investInProject(amount,add_info,project_id){
    this.loadToken();
    let investment : Investment = {
      project_id : project_id,
      add_info : add_info,
      amount: amount
    }
    let headers = new HttpHeaders({'Authorization': this.authToken});
    return this.http.post(this.rootUrl1,investment , {headers:headers})
  }



}
