import { Component, OnInit,HostListener, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewprojectcommonService } from "../viewproject-common.service";
// import { AuthService } from '../../../providers/authService/authService';
// import { LocalstorageService } from '../../../providers/localstorageService/localstorageService';
declare var jQuery: any;

@Component({
    templateUrl: './enlarge.component.html',
    styleUrls: ['./enlarge.component.scss']
})

export class EnlargeComponent implements OnInit, OnChanges {
    allData: object;
    currentImageData: object;
    currentImg: number;
    currentPage: string;
    showXlarge: boolean;
    currentImgId: string;
    defaultSettings: any;
    totalImages: number;
    currentPageNumber: number =1;
    checkToggle: boolean = false;
    active_Search: boolean = false;
    toolbarToggle: boolean = false;
    aside_Info: boolean = false;
    constructor(private _router: Router, 
        // private localStorageService: LocalstorageService, 
        // private authService: AuthService
    ){        
        this.showXlarge = false;
        this.currentImg = 1;
    }
    ngOnInit() {
        jQuery('.selectpicker').selectpicker({
        });
        // if(!this.authService.isAuthorised()){
        //     this._router.navigate(['']);
        // }
        this.loadEnlargeData();
    }
    extraLarge(): void {
        this.showXlarge = true;
        // Object.values(this.allData)[Object.keys(this.allData).indexOf("allImagesData")].forEach(function (key, value) {
        //     if (key.url.indexOf("700:700") > -1) {
        //         key.url = key.url.replace("700:700", "1600:1600");
        //     }
        // });
    }

    loadEnlargeData(): void {
    //     this.defaultSettings = this.localStorageService.getObj("defaultViewSettings");
    //     this.allData = this.localStorageService.getObj("imagesAllData");
    //     let currentImgId = Object.values(this.allData)[Object.keys(this.allData).indexOf("id")];
    //     this.totalImages = (Object.values(this.allData)[Object.keys(this.allData).indexOf("allImagesData")].length);
    //     Object.values(this.allData)[Object.keys(this.allData).indexOf("allImagesData")].forEach(function (key, value) {
    //         if (key.id == currentImgId) {
    //             currentImgId = value + 1;
    //         }
    //         if (key.url.indexOf("300:300") > -1) {
    //             key.url = key.url.replace("300:300", "700:700");
    //         }
    //         else if (key.url.indexOf("200:200") > -1) {
    //             key.url = key.url.replace("200:200", "700:700");
    //         }
    //         else if (key.url.indexOf("125:125") > -1) {
    //             key.url = key.url.replace("125:125", "700:700");
    //         }
    //     });
    //     this.currentImg = currentImgId;
        // this.ngOnChanges();
    }

    ngOnChanges(){
        this.defaultSettings[1].noOfImg;
        if(this.currentImg>10){
            this.currentPageNumber = Math.floor(this.totalImages/this.currentImg) -1;

        }
        console.log(" this.currentImg page number", this.currentPageNumber, " ", this.currentImg);
    }
    
    @HostListener('document:keydown', ['$event'])
    handleKeyEvents(event: KeyboardEvent) {
        if(event.key == "ArrowUp"){
            this.extraLarge();
        }
        if(event.key == "ArrowDown"){
            this.closeEnlarge();   
        }
    };

    changedExtraHandler(changes):void{
        console.log(" Changes ", changes);
    }

    fistPage(): void {
        this.currentImg = 1;
    }
    lastPage(): void {

        this.currentImg = this.totalImages;
    }
    togglesidebar(): void {
        this.checkToggle = !this.checkToggle;
        this.active_Search = !this.active_Search;
    }

    aside_show(): void {
        this.aside_Info = true;
    }
    aside_hidee(): void {
        this.aside_Info = false;
    }


    closeEnlarge(): void {
        if (this.showXlarge) {
            this.showXlarge = false;
            this.loadEnlargeData();
        }
        else {
            this._router.navigate(['/viewproject']);
        }
    }
}