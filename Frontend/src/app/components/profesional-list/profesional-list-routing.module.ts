import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfesionalListComponent } from './profesional-list.component';


const routes: Routes = [
    { path: "", component: ProfesionalListComponent},
  
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ProfesionalListRoutingModule { }