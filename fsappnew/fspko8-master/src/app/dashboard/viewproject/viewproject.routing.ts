import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewprojectComponent} from './viewproject.component'
import { ViewproLauncherComponent }  from './viewlauncher/viewlauncher.component';
// import { GridviewComponent }  from './gridview/gridview.component';
import { AuthGuard} from '../../shared'

const countryRoutes: Routes = [
	{ 
	  path: 'viewproject/:project_id',
      component: ViewprojectComponent,
      children: [{
		   	path: '',
			 	component: ViewproLauncherComponent,
			 	canActivate: [AuthGuard]
		}
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(countryRoutes) ],
  exports: [ RouterModule ]
})
export class ViewprojectRouting{ }
