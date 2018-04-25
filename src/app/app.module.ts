import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ProjectService } from './services/project.service';
import { ValidateService } from './services/validate.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from './auth.guard';
import { VerifyComponent } from './verify/verify.component';
import { ProjectCategoryComponent } from './project-category/project-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddProjectComponent } from './add-project/add-project.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FaqComponent,
    HomeComponent,
    ProjectsComponent,
    CategoriesComponent,
    SignUpComponent,
    ProfileComponent,
    LoginComponent,
    FooterComponent,
    VerifyComponent,
    ProjectCategoryComponent,
    NotFoundComponent,
    ProjectDetailsComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService,ValidateService,AuthGuard, CategoryService,ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
