import { Component , Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FsMainComponent } from '../main.component';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
    
    views: boolean;
    constructor(private _route: ActivatedRoute,
        private _router: Router ) {
      } 

    onSelectCategory(): void{
        this._router.navigate(['/viewproject']);
    }

    ngOnInit(){
        this.views = true;
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
