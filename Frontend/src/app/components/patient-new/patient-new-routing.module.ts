import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientNewComponent } from './patient-new.component';


const routes: Routes = [
    { path: "", component: PatientNewComponent},
  
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PatientNewRoutingModule { }