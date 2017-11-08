import './vendor.ts';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { Ng2Webstorage } from 'ng2-webstorage';
// import { appRoute } from './app.route';
import { FsappSharedModule, UserRouteAccessService } from './shared';
import { FsappHomeModule } from './home/home.module';
import { FsappProjectModule } from './project/project.module'
import { FsappAdminModule } from './admin/admin.module';
import { FsappAccountModule } from './account/account.module';
import { FsappEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    LayoutRoutingModule,
    ErrorComponent,
    FooterComponent,
    HeaderComponent
} from './layouts';
import { FsMainComponent } from './main.component';
import { LoginModule } from './account/login/login.module'; 
import { LoginComponent } from './account/login/login.component'; 

import { DashboardModule } from './dashboard/dashboard.module';
import { ViewprojectModule } from './viewproject/viewproject.module';

import { componentStateService } from './shared/service/shared.service';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([{
    path: '',
    component: LoginComponent
  }
], { useHash: true });

@NgModule({
    declarations: [
        FsMainComponent,
        FooterComponent,
        HeaderComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        rootRouting,
        LayoutRoutingModule,
        LoginModule,
        DashboardModule,
        ViewprojectModule,
        //Ng2Webstorage.forRoot(appRoute),
        // RouterModule.forRoot([], {}),
        FsappSharedModule,
        FsappHomeModule,
        FsappProjectModule,
        FsappAdminModule,
        FsappAccountModule,
        FsappEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    providers: [
        componentStateService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,

    ],
    bootstrap: [FsMainComponent]
})
export class FsappAppModule { }
