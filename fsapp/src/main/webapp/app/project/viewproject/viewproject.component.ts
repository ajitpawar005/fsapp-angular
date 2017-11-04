import { Component  } from '@angular/core';
@Component({
    templateUrl: './viewproject.component.html',
    // styleUrls:['./viewproject.component.css']
})
export class ViewprojectComponent {
    constructor() {}   
    test(): void{
        console.log("OnSelect category");
    }
}