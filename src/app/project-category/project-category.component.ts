import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProjectService } from '../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-project-category',
  templateUrl: './project-category.component.html',
  styleUrls: ['./project-category.component.css']
})
export class ProjectCategoryComponent implements OnInit {
  projects:any;
  hasItems:Boolean = false;
  category_name:string;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private categoryService:CategoryService,
    private projectService:ProjectService,
    private toastr: ToastrService,
    private _location: Location
  ) { 
      this.activatedRoute.params
        .subscribe( params => {
          console.log(params.category_name)
          this.category_name = params.category_name;
          this.getProjectsbyCategory(params.category_name);
        })
    }

  ngOnInit() {

  }

  getProjectsbyCategory(cat:string){
    this.projectService.getProjectsbyCategory(cat).subscribe((data:any) => {
      console.log('Project Fetching done')
      this.projects = data.projects;
      console.log(this.projects.length)
      if(this.projects.length != 0){
        this.hasItems = true;
      }
    }, err => {
      console.log(err);
    });

  }

  backClicked() {
    this._location.back();
}

}
