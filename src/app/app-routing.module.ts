import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent  }  from './home/home.component';
import { ContactComponent }  from './contact/contact.component';
import { FaqComponent }  from './faq/faq.component';
import { ProjectsComponent }  from './projects/projects.component';
import { ProjectDetailsComponent }  from './project-details/project-details.component';
import { CategoriesComponent }  from './categories/categories.component';
import { SignUpComponent }  from './sign-up/sign-up.component';
import { ProfileComponent }  from './profile/profile.component';
import { LoginComponent }  from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { ProjectCategoryComponent } from './project-category/project-category.component'
import {NotFoundComponent } from './not-found/not-found.component';
import {AddProjectComponent} from './add-project/add-project.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'add-project', component:AddProjectComponent},
  { path: 'categories', component: CategoriesComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'verify', component: VerifyComponent },
  { path: 'categories/:category_name', component: ProjectCategoryComponent },
  { path: 'projects/project/:project_id', component: ProjectDetailsComponent },
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}