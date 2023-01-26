import { trigger, transition, style, animate } from "@angular/animations";
import { Component } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { BehaviorSubject } from "rxjs";

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  template: `
  <div *ngIf="ready$ | async"><mat-expansion-panel [expanded]="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <mat-icon>folder</mat-icon>
        <span>My Documents</span>
      </mat-panel-title>
    </mat-expansion-panel-header>
    Second
  </mat-expansion-panel></div>`,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
    
  ]
})
export class ComponentB {
  ready$ = new BehaviorSubject(true);
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
