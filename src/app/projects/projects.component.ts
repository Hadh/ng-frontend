import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:any;
  hasItems:Boolean = false;
  projectsSearch:any;

  constructor(
    private router:Router,
    private categoryService:CategoryService,
    private projectService:ProjectService,
    private toastr: ToastrService,
    private _location: Location
  ) { }


  ngOnInit() {
    this.getProjects();

  }

  getProjects(){
    this.projectService.getProjects().subscribe((data:any) => {
      console.log('Project Fetching done')
      this.projects = data.projects;
      this.projectsSearch = data.projects;
  
      console.log(this.projects)
      if(this.projects){
        this.hasItems = true;
        
      }
    }, err => {
      console.log(err);
    });

  }

  search(query:string){
    this.projectsSearch = (query) ? this.projects.filter( project => project.name.toLowerCase().includes(query.toLocaleLowerCase()) ||  project.description.toLowerCase().includes(query.toLocaleLowerCase())         || project.category.toLowerCase().includes(query.toLocaleLowerCase())) : this.projects
  }


  backClicked() {
    this._location.back();
}

goTo(project_id:string){
  console.log(project_id)
  this.router.navigate(['projects/project/'+project_id])
}




}
