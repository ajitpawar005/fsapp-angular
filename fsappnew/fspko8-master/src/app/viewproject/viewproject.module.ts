import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopoverModule } from "ng2-popover";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ViewprojectComponent } from './viewproject.component';
import { HeaderMenuComponent } from './headermenus/menu.component';
import { WideEditComponent } from './wideedit/wideedit.component';
import { GotoComponent } from './goto/goto.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { DownloadComponent } from './download/download.component';
import { PrinttoolComponent } from './printtool/printtool.component';
import { ViewsettingsComponent } from './viewsettings/viewsettings.component';
import { DeleteComponent } from './delete/delete.component';
import { EnlargeComponent } from './enlarge/enlarge.component';


import { ViewprojectService } from './viewproject.service';
import { ViewprojectcommonService } from './viewproject-common.service';
import { SharedModule } from '../shared/shared.module';

// import { RestService } from '../../providers/restService/restService';
// import { AppSettings } from '../../providers/appSettings/appSettings';
// import { Constants } from '../../providers/appSettings/constant-settings';
// import { LocalstorageService } from '../../providers/localstorageService/localstorageService';
// import { SessionstorageService } from '../../providers/sessionstorageService/sessionstorageService';

import { ImageinfoComponent } from './imageinfo/imageinfo.component';


const projectRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'viewproject', component: ViewprojectComponent },
  { path: 'enlarge', component: EnlargeComponent },
]);

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PopoverModule,
    NgxPaginationModule,
    projectRouting,
    SharedModule,
    NgbModule
  ],
  declarations: [
    ViewprojectComponent,
    HeaderMenuComponent,
    WideEditComponent,
    GotoComponent,
    SendmailComponent,
    DownloadComponent,
    PrinttoolComponent,
    ViewsettingsComponent,
    DeleteComponent,
    ImageinfoComponent,
    EnlargeComponent
  ],
  providers: [ViewprojectService, ViewprojectcommonService, 
    // RestService, AppSettings, Constants, LocalstorageService, 
    ViewprojectcommonService, 
    // SessionstorageService
  ]

})
export class ViewprojectModule { }
