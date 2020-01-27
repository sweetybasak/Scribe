import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home', component: HomeComponent
}, {
  path: 'login', component: LoginComponent
}, {
    path: 'myblogs', component: MyblogsComponent, canActivate: [AuthGuard]
}, {
  path: 'profile/:id', component: ProfileComponent
}, {
  path: 'edit-profile/:id', component: EditProfileComponent
}, {
  path: 'view/:postId', component: ViewComponent
}, {
  path: 'course', component: CourseComponent
}, {
  path: '**',  redirectTo: 'home'

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
