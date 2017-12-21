import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthGuard, SharedModule } from '../../shared';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { Viewproject1Component } from 'app/dashboard/viewproject1/viewproject1.component';

import { ViewprojectRouting } from 'app/dashboard/viewproject1/viewproject1.routing';
import { ViewSharedModule } from 'app/dashboard/viewproject1/viewshared';

@NgModule({
  imports: [
    ViewSharedModule,
    ViewprojectRouting
  ],
  declarations: [
    DashboardComponent,
    Viewproject1Component
  ],
  providers: [],
  exports: [
    Viewproject1Component
  ]
})
export class ViewprojectModule {}




