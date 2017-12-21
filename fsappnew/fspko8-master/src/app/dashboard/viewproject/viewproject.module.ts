import { ModuleWithProviders, NgModule } from '@angular/core';

import { ViewprojectComponent } from './viewproject.component';

import { AuthGuard, SharedModule } from '../../shared';
// import { GridviewComponent } from './gridview/gridview.component';
import { ViewproLauncherComponent } from './viewlauncher/viewlauncher.component';
import { SharedviewModule } from './sharedview/sharedview.module';
import { ViewprojectRouting } from './viewproject.routing';

@NgModule({
  imports: [
    SharedModule,
    SharedviewModule,
    ViewprojectRouting
  ],
  declarations: [
    ViewprojectComponent,
    ViewproLauncherComponent
  ],
  providers: [],
  exports: []
})
export class ViewprojectModule {}
