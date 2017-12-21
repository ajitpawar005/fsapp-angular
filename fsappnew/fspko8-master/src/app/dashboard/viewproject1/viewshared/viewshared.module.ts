import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HeadermenusComponent, SidebarmenusComponent } from 'app/dashboard/viewproject1/viewshared';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    HeadermenusComponent,
    SidebarmenusComponent
  ],
  exports: [
    HeadermenusComponent,
    SidebarmenusComponent
  ]
})
export class ViewSharedModule {}


