import { Component, HostListener, OnInit, OnChanges, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { LocalstorageService } from '../../providers/localstorageService/localstorageService';
// import { SessionstorageService } from '../../providers/sessionstorageService/sessionstorageService';
// import { AuthService } from '../../providers/authService/authService';

import { ViewprojectService } from './viewproject.service';
import { ViewprojectcommonService } from './viewproject-common.service';
import { Form } from '@angular/forms/src/directives/form_interface';
import { forEach } from '@angular/router/src/utils/collection';
declare var jQuery: any;

@Component({
    templateUrl: './viewproject.component.html',
    styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {
    response: any;
    projectData: ProjectData = {};
    imageData: object;
    imageDataLenght: number;
    showLoader: boolean;
    checkToggle: boolean = false;
    active_Search: boolean = false;
    toolbarToggle: boolean = false;
    menuBar: string;
    flag: boolean = true;
    aside_Info: boolean = false;
    albumList: object;
    selectedAlbum: number;
    selectedImages: Array<string>;
    selectMultiImage: boolean = false;
    selectRangeImage: boolean = false;
    storeIndex: Array<number>;
    images: any;
    defaultSettings: any;
    imageColumns: string;
    noOfImages: string;
    imagesSize: string;
    currentPageNumber: number = 1;
    totalPages: number;
    divWidth: number;
    selectedImagesLenght: number;
    ind: string;

    constructor(private _route: ActivatedRoute, private _router: Router,
        // private authService : AuthService,
        private viewProjectService: ViewprojectService, 
        // private localStorageSer: LocalstorageService,
        private viewprojectCommonService: ViewprojectcommonService, 
        // private sessionstorageService: SessionstorageService
    ){

        this.showLoader = true;
        this.selectedImages = [];
        this.storeIndex = [];
    }
    ngOnInit() {
        this.selectedImagesLenght = 0;
        jQuery('.selectpicker').selectpicker({
        });
        // if(!this.authService.isAuthorised()){
        //     this._router.navigate(['']);
        //     return false;
        // }

        // this.projectData.project_id = '3247206';
        // this.projectData.id_token = this.localStorageSer.get("id_token", false);
        // this.defaultSettings =   this.localStorageSer.getObj("defaultViewSettings");
        // this.viewProjectService.getProjectData(this.projectData).subscribe(
        //     res => {
        //     this.response = res;
        //         if (this.response.status) {
        //             this.showLoader = false;
        //             this.imageData = this.response.imageData;
        //             this.imageDataLenght = Object.keys(this.imageData).length
        //             this.albumList = this.response.albumData;
        //             this.assignValues(this.defaultSettings);
        //         }
        //     },
        //     error => {
        //         console.log("Project data error --------");
        //     }
        // );
    }

    settingValues(data: any):void{
        // this.defaultSettings = this.localStorageSer.getObj("defaultViewSettings");
        this.assignValues(this.defaultSettings);
    }

    assignValues(values:any){
        // let enlargeImageData = this.localStorageSer.getObj("imagesAllData");
        // if (enlargeImageData) {
        //     let currentPage = Object.values(enlargeImageData)[Object.keys(enlargeImageData).indexOf('currentPage')];
        //         this.currentPageNumber = currentPage;
        // }
        this.imageColumns = values[2].columns;
        this.noOfImages = values[1].noOfImg;
        this.imagesSize = values[0].imageSize;
        if(this.imagesSize === 'Medium'){
            this.resizeImages("200:200");
        }
        else if(this.imagesSize === 'Small'){
            this.resizeImages("125:125");
        }
        else {
            this.resizeImages("300:300");
        }
 this.totalPages = this.imageDataLenght/ parseInt(this.noOfImages);
        switch (this.imageColumns) {
            case "1":
                this.checkImageSize(this.imagesSize, 157, 232, 332);
                break;
            case "2":
                this.checkImageSize(this.imagesSize, 314, 464, 664);
                break;
            case "3":
            this.checkImageSize(this.imagesSize, 471, 696, 996);
                break;
            case "4":
            this.checkImageSize(this.imagesSize, 628, 928,1328);
                break;
            case "5":
            this.checkImageSize(this.imagesSize, 785, 1160, 1660);
                break;
            case "6":
            this.checkImageSize(this.imagesSize, 942, 1392, 1992);
                break;
            case "7":
            this.checkImageSize(this.imagesSize, 1099,1624, 2324);
                break;
            default:
            this.checkImageSize(this.imagesSize,628, 696,664);
        }

    }

    checkImageSize(size: string, smallSize, medidumSize, largeSize) {
        if (size === 'Large') {
            this.divWidth = largeSize;
        }
        else if (size === 'Medium') {
            this.divWidth = medidumSize;
        }
        else {
            this.divWidth = smallSize;
        }
    }

    resizeImages(parameter: any){
        // Object.values(this.imageData).forEach(function (key, value) {
        //     if (key.url.indexOf("300:300") > -1) {
        //         key.url = key.url.replace("300:300", parameter);
        //     }
        //     else if (key.url.indexOf("200:200") > -1) {
        //         key.url = key.url.replace("200:200", parameter);
        //     }
        //     else if (key.url.indexOf("125:125") > -1) {
        //         key.url = key.url.replace("125:125", parameter);
        //     }
        // });
    }

    fistPage(): void {
        this.currentPageNumber = 1;
    }
    lastPage(): void {
        this.currentPageNumber = this.imageDataLenght;
    }

    loadAlbumImages(album: any): void {
        this.projectData.album_id = album.id;
        // this.viewProjectService.getAlbumData(this.projectData).subscribe(
        //     res => {
        //         this.response = res;
        //         if (this.response.status) {
        //             this.imageData = this.response.imageData;
        //         }
        //         else {
        //             alert("Images does not exist ");
        //         }
        //     }
        // )
    }

    selectAlbum(album: any): void {
        this.selectedAlbum = album.id;
    }
    deselectSelectedImages(event): void{
        event.stopPropagation();
        this.selectedImages = [];
    }
    selectImageOnClick(image: any, index: number): boolean {
        if(this.currentPageNumber !== 1){
            index = ( (this.currentPageNumber - 1) * parseInt(this.noOfImages) )+index;
        }
        if (this.selectMultiImage) {
            this.storeIndex[0] = index;
            this.selectedImages.push(image.id);
        }
        else if (this.selectRangeImage) {
            this.storeIndex[1] = index;
            this.selectedImages.splice(0,1);
            this.imageData;
            this.imageDataLenght;
            if (this.storeIndex[0] < this.storeIndex[1]) {
                for (let c = this.storeIndex[0]; c <= this.storeIndex[1]; c++) {
                    this.selectedImages.push(this.imageData[c].id);
                }
            }
            if (this.storeIndex[0] > this.storeIndex[1]) {
                for (let cnt = this.storeIndex[0]; cnt >= this.storeIndex[1]; cnt--) {
                    this.selectedImages.push(this.imageData[cnt].id);
                }
            }
        }
        else {

            this.selectedImages = [];
            this.selectedImages.push(image.id);
            this.storeIndex[0] = index;
        }
        if(this.selectedImages){
            this.selectedImagesLenght = this.selectedImages.length;
        }
        return true;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyEvents(event: KeyboardEvent) {
        if (event.key == 'T' || event.key == 't') {
            let albumData: FormData = new FormData();
            albumData.append("id", this.selectedAlbum.toString());
            albumData.append("imageData[]", "17502382");
            let addAlbum = {
                contentType: "application/x-www-form-urlencoded",
                formData: albumData,
                dataType: 'form'
            }
            // this.viewProjectService.addImagesToAlbum(albumData).subscribe(res => {
            //     this.response = res;
            //     console.log(this.response);
            // });
        }

        if (event.key == 'Control' || event.key == 'control') {
            this.selectMultiImage = true;
        }
        if (event.key == 'Shift' || event.key == 'shift') {
            this.selectRangeImage = true;
        }

        if (event.key == 'Z' || event.key == 'z') {
            if(this.selectedImages.length == 1){}
            this.enlargeView(this.selectedImages[0], this.ind, this.currentPageNumber.toString());   
        }

    }

    @HostListener('document:keyup', ['$event'])
    handleKeyUpEvents(event: KeyboardEvent) {
        this.selectMultiImage = false;
        this.selectRangeImage = false;
    }

    enlargeView(id: string, index: string, currentPage: string): void {
        let imagesAllData = {
            id: id,
            index: index,
            currentPage: currentPage,
            allImagesData: this.imageData
        }
        // this.localStorageSer.setObj("imagesAllData", imagesAllData)
        this._router.navigate(['/enlarge']);
    }

    togglesidebar(): void {
        this.checkToggle = !this.checkToggle;
        this.active_Search = !this.active_Search;
    }

    toggleImgtoolbar(eventaction: any): void {
        this.toolbarToggle = !this.toolbarToggle;
        this.menuBar = '';
    }

    showMenu(id: string): void {
        if (this.menuBar === id) {
            this.menuBar = '';
        }
        else {
            this.menuBar = id;
        }
    }
    aside_show(): void {
        this.aside_Info = true;
    }
    aside_hidee(): void {
        this.aside_Info = false;
    }
}

interface ProjectData {
    project_id?: string,
    id_token?: string,
    album_id?: string
}
