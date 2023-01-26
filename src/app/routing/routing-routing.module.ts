import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentA } from '../component-a';
import { ComponentB } from '../component-b';

const routes: Routes = [
  { path: "", redirectTo: "First", pathMatch: "full" },
  {
    path: "First",
    component: ComponentA,
    data: {
      reuse: true,
    },
  },
  {
    path: "Second",
    component: ComponentB,
    data: {
      reuse: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
