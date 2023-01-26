import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { ComponentB } from './component-b';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { NgCacheRouteReuseModule } from 'ng-cache-route-reuse';
import { RootComponent } from 'src/app/root.component';
import { RouterModule } from '@angular/router';
import { MyRoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    RouterModule.forRoot([]),
    NgCacheRouteReuseModule,

    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MyRoutingModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
