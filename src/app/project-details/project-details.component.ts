import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';
import { Investment } from '../models/investment';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project:any;
  investment:Investment;
  project_id:string;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private projectService:ProjectService,
    private toastr: ToastrService,
    private _location: Location
  ) {
    this.activatedRoute.params
    .subscribe( params => {
      this.project_id = params.project_id;
      this.getProjectByID(params.project_id);
    })
   }

  ngOnInit() {
    this.resetForm();
  }

getProjectByID(project_id:string){
  this.projectService.getProjectById(project_id).subscribe((data:any) => {
    console.log('Project Fetching done');
    this.project = data.project;
  } , err => {
    //console.log(err);
  });
}

OnSubmit(form : NgForm){
   this.projectService.investInProject(form.value.amount,form.value.add_info,this.project_id).subscribe((data:any) => {
    if(data.success == true){
      this.resetForm(form);
      this.toastr.success('Awesome!','You will be contacted soon!', {
        timeOut: 4000,
      });
    } else {
      this.toastr.error('Error -', data.msg);
    }

  }); 
}

resetForm(form?: NgForm){
  if(form!= null)
  form.reset();
  this.investment = {
    amount:null,
    add_info:'',
    project_id: this.project_id
  }

}

}
