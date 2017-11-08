import { Component, AfterViewInit, Renderer, ElementRef, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { componentStateService } from '../../shared/service/shared.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private stateCheck: boolean;
    constructor(private _route: ActivatedRoute,
        private _router: Router) {
            
    }
    
    ngOnInit(){
        // this.stateCheck._componentVisible$ = false;
    }
    
    onLogin(): void {
        this._router.navigate(['/dashboard']);
    }


}
