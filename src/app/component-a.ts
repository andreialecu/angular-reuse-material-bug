import { Component } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  template: `<mat-expansion-panel [expanded]="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <mat-icon>folder</mat-icon>
        <span>My Documents</span>
      </mat-panel-title>
    </mat-expansion-panel-header>

    First
  </mat-expansion-panel>`,
})
export class ComponentA {}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
