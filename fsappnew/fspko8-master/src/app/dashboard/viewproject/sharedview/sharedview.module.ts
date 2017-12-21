import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeadermenusComponent } from './headermenus/headermenus.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    HeadermenusComponent,
    SidebarComponent
  ],
  exports: [
    CommonModule,
    HeadermenusComponent,
    SidebarComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    TranslateModule
  ]
})
export class SharedviewModule { }
