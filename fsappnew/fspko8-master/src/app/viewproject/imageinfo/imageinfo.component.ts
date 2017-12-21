import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
    selector: 'fs-imginfo',
    templateUrl:'./imageinfo.component.html',
    styleUrls:['./imageinfo.component.scss']
})

export class ImageinfoComponent implements OnInit {
    @Input() asideinfoshow: boolean;

    ngOnInit(){
        
    }

    @Output() showaside:EventEmitter<any> = new EventEmitter<any>();
    showAll():void{
       //this.asideinfoshow = !this.asideinfoshow;
        this.showaside.emit(this.asideinfoshow);
    }
}