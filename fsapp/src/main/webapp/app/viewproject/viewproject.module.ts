import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewprojectComponent } from './viewproject.component';

const projectRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dashboard',
    component: ViewprojectComponent
  }
]);

@NgModule({
  imports: [
    projectRouting,
  ],
  declarations: [
    ViewprojectComponent
  ],
  providers: []
})
export class ViewprojectModule {}
