import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouting } from './pages-routing';


import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,

  ],
  imports: [
    CommonModule,
    PagesRouting,
    SharedModule
  ]
})
export class PagesModule { }
