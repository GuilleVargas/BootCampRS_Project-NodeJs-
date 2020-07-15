
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{
  path: '', component: InitComponent},
{
  path:'home', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
