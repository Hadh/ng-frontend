import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent  }  from './home/home.component';
import { ContactComponent }  from './contact/contact.component';
import { FaqComponent }  from './faq/faq.component';
import { ProjectsComponent }  from './projects/projects.component';
import { CategoriesComponent }  from './categories/categories.component';
import { SignUpComponent }  from './sign-up/sign-up.component';
import { ProfileComponent }  from './profile/profile.component';
import { LoginComponent }  from './login/login.component';
import { VerifyComponent } from './verify/verify.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'verify', component: VerifyComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}