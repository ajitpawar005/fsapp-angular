import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared';
import { LauncherComponent } from './launcher/launcher.component';
import { DashboardRouting }  from './dashboard.routing';
import { ProjectComponent }  from './project/project.component';
import { ViewProjectComponent } from './project/component/view-project/view-project.component';
import {
  TopMenuComponent,
  LeftMenuComponent
} from './project/dashboard-shared';
import {
  GotoComponent,
  SendmailComponent,
  DownloadComponent,
  PrinttoolComponent,
  ViewsettingsComponent
} from './project/dashboard-shared/top-menu';
import { TabBarComponent, CustomFilterComponent } from 'app/dashboard/project/dashboard-shared/left-menu';
import { SidebarService } from './project/dashboard-shared/left-menu/sidebar-service/sidebar-service';
import { TestSubprojectComponent } from './project/component/test-subproject/test-subproject.component';


@NgModule({
  imports: [
    NgxPaginationModule,
    SharedModule,
    DashboardRouting
  ],
  declarations: [
    DashboardComponent,
    LauncherComponent,
    ProjectComponent,
    TopMenuComponent,
    LeftMenuComponent,
    ViewProjectComponent,
    TestSubprojectComponent,
    GotoComponent,
    SendmailComponent,
    DownloadComponent,
    PrinttoolComponent,
    ViewsettingsComponent,
    CustomFilterComponent,
    TabBarComponent
    
  ],
  providers: [SidebarService],
  exports: [
  ]
})
export class DashboardModule {}
