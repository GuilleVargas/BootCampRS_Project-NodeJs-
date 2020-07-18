import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientListComponent } from './patient-list.component';


const routes: Routes = [
    { path: "", component: PatientListComponent},
  
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PatientListRoutingModule { }