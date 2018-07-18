import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../services/project.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
projects:Array<any>;
  constructor(
    private projectService:ProjectService,
    private router:Router
  ) {}

  ngOnInit() {
    this.getLatestProjects();
  }

  getLatestProjects(){
    this.projectService.getProjects().subscribe((projects:any)=> {
      this.projects = projects.projects;
    });
  }

  goTo(project_id:string){
    console.log(project_id)
    this.router.navigate(['projects/project/'+project_id])
  }

}
