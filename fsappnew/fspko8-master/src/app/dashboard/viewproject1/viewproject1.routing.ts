import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Viewproject1Component } from 'app/dashboard/viewproject1/viewproject1.component';
const countryRoutes: Routes = [
	{ 
	  path: 'viewproject/:project_id',
      component: Viewproject1Component,
      children: [{
		   path: '',
		   component: Viewproject1Component
		}
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(countryRoutes) ],
  exports: [ RouterModule ]
})
export class ViewprojectRouting{ }
