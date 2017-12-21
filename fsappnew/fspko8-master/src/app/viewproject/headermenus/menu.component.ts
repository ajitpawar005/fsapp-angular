import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
    selector: 'fs-menu',
    templateUrl:'./menu.component.html',
    styleUrls:['./menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {
    
    ngOnInit(){

    }
    @Output() notify:EventEmitter<any> = new EventEmitter<any>();
    showAll():void{
        this.notify.emit(" Component called");
    }
    @Output() showasidemenu:EventEmitter<any> = new EventEmitter<any>();
    aside_show():void{
        this.showasidemenu.emit(true);
    }

    @Output() extraLargeEvt:EventEmitter<any> = new EventEmitter<any>();
    extraLarge():void{
        this.extraLargeEvt.emit();
    }
    
    @Output() closeLargeEvt:EventEmitter<any> = new EventEmitter<any>();
    closeLarge():void{
        console.log("Close");
        this.closeLargeEvt.emit();
    }
}