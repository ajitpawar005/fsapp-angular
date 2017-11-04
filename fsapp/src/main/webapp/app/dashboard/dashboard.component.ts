import { Component  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent {
    constructor(private _route: ActivatedRoute,
        private _router: Router ) {
      }   
    onSelectCategory(): void{
        this._router.navigate(['/viewproject']);
    }
}





// @Component({
//     templateUrl: './login.component.html',
//     styleUrls:['./login.component.css']
// })
// export class LoginComponent {

//     onLogin(): void {
//         //console.log("onLogin click");
      
//     }
// }
