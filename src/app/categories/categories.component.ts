import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any;

  constructor(
    private router:Router,
    private categoryService:CategoryService,
    private toastr: ToastrService
  ) { }

ngOnInit(){
  this.getCategories();
}

  getCategories() {
    this.categoryService.getCategories().subscribe((categories:any) => {
      console.log("halezrhml")
      this.categories = categories;
      console.log(categories)
    }, err => {
      console.log(err);
    });
  }

}
