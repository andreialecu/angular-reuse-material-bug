import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="max-width: 500px">
      <nav mat-tab-nav-bar [tabPanel]="tabPanel">
        <a
          mat-tab-link
          *ngFor="let link of links"
          [routerLink]="link"
          routerLinkActive
          #rla="routerLinkActive"
          [active]="rla.isActive"
        >
          {{ link }}
        </a>
      </nav>
      <mat-tab-nav-panel #tabPanel>
        <router-outlet></router-outlet>
      </mat-tab-nav-panel>
    </div>
  `,
})
export class RootComponent {
  links = ["/First", "/Second"];
}
