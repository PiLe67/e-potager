import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: 'plant', component: PlantComponent },
  {path : 'base', component: BaseComponent},
  {path : '', redirectTo: '/base', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
