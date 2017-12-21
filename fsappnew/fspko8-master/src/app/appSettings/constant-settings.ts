/**
 * Constant Module 
 * To add constants and strings
 */

import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    ok_label: string;
    cancel_label: string;
    imagesPerPage: string;
    imageSize: string;
    numberOfColumns: string;
    
    constructor() {
        this.ok_label = "Ok";
        this.cancel_label = "Cancel";
        this.imagesPerPage = "20";
        this.imageSize  = "Large";
        this.numberOfColumns = "3";        
    }
}
