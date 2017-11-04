import { Component, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent {
    constructor(private _route: ActivatedRoute,
        private _router: Router ) {
      }   
    onLogin(): void {
        //console.log("onLogin click");
        this._router.navigate(['/dashboard']);
    }
}
