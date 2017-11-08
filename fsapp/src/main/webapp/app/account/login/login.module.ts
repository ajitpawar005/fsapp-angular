import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

//const loginRouting: ModuleWithProviders = RouterModule.forChild([]);

@NgModule({
  imports: [
    //loginRouting,
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule {}
