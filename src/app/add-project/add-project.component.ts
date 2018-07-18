import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Project} from '../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project:Project;
  categoriesList:Array<string>;
  logo:File = null;
  cover:File = null;
  image1 :File = null;
  image2:File = null;
  image3:File = null;


  isDataAvailable:boolean = false;

  constructor(
    private router:Router,
    private categoryService:CategoryService,
    private projectService:ProjectService,
    private toastr: ToastrService,
    private _location: Location

  ) { }

 

  ngOnInit() {
    this.resetForm();
    this.getCategories().subscribe((categories:any)=> {
      this.categoriesList = categories;
      //console.log(this.categoriesList);
      if (this.categoriesList)
        this.isDataAvailable = true;
    })
  }

  getCategories(){
    return this.categoryService.getCategories();

  }

  OnSubmit(form : NgForm){
    console.log('helloooo')
    console.log(form.value);
    const myForm = new FormData();
    myForm.append('name',form.value.name);
    myForm.append('description',form.value.description);
    myForm.append('category',form.value.category);
    myForm.append('tagline',form.value.tagline);
    myForm.append('website',form.value.website);
    myForm.append('fundraiser',form.value.fundraiser);
    myForm.append('revenue',form.value.revenue);
    myForm.append('business_model',form.value.business_model);
    myForm.append('add_information',form.value.add_information);
    myForm.append('logo', this.logo);
    myForm.append('cover', this.cover);
    myForm.append('image1', this.image1);
    myForm.append('image2', this.image2);
    myForm.append('image3', this.image3);
    myForm.append('github', form.value.github);
    myForm.append('stack', form.value.stack);
     this.projectService.addProject(myForm).subscribe((data:any) => {
      console.log(data)
      if(data.success == true){
        this.resetForm(form);
        this.toastr.success('Awesome!',data.msg+' Verify Your Account', {
          timeOut: 4000,
        });
        this.router.navigate(['/projects']);
      } else {
        this.toastr.error('Error -', data.msg);
      }

    }); 
  }

  resetForm(form?: NgForm){
    if(form!= null)
    form.reset();
    this.project = {
      name:'',
      description:'',
      tagline:'',
      category:'',
      fundraiser:0,
      revenue:0,
      business_model:'',
      risks:'',
      website:'',
      github:'',
      stack:'',
      add_information:'',
      currentfund:0,
      owner:null,
      logo:null,
      cover:null,
      image1:null,
      image2:null,
      image3:null,
    

    }

  }

  onFileSelected1(event){
    console.log(event.target.files[0]);
    return this.logo = <File>event.target.files[0]

  }

  onFileSelected2(event){
    this.cover = <File>event.target.files[0]

  }

  onFileSelected3(event){
    this.image1 = <File>event.target.files[0]
    
  }

  onFileSelected4(event){
    this.image2 = <File>event.target.files[0];
   
  }

  onFileSelected5(event){
    this.image3 = <File>event.target.files[0]
   
  }


}
