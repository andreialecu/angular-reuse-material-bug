import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoutingRoutingModule } from "./routing-routing.module";
import { ComponentB } from "../component-b";
import { MaterialExampleModule } from "src/material.module";
import { ComponentA } from "../component-a";

@NgModule({
  declarations: [ComponentA, ComponentB],
  imports: [CommonModule, RoutingRoutingModule, MaterialExampleModule],
})
export class MyRoutingModule {}
