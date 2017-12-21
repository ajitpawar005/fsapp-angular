import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { SelectControlValueAccessor } from '@angular/forms';

// import { SessionstorageService } from '../../../providers/sessionstorageService/sessionstorageService';
// import { LocalstorageService } from '../../../providers/localstorageService/localstorageService';
// import { Constants } from '../../../providers/appSettings/constant-settings';

@Component({
    selector: 'fs-viewsettings',
    templateUrl:'./viewsettings.component.html',
    styleUrls:['./viewsettings.component.scss']
})

export class ViewsettingsComponent implements OnInit {

    constructor(
        // private sessionstorageService: SessionstorageService,
        // private localsStorageSrc: LocalstorageService, 
        // private constants: Constants
    ){}

    selectedSizes:any;
    selectedImages:any;
    selectedColumns:any;
    test: boolean= false;
    defaultSetting:any;

    dataSizes = [
        { id: 1 , name: 'Large'},
        { id: 2 , name: 'Small'},
        { id: 3 , name: 'Medium'}];

     dataImages = [
        { id: 1 , name: '1'},
        { id: 2 , name: '2'},
        { id: 3 , name: '4'},
        { id: 4 , name: '10'},
        { id: 5 , name: '20'},
        { id: 6 , name: '50'},
        { id: 7 , name: '100'},
        { id: 8 , name: '250'}
     ];
     dataColumns = [
            { id: 1 , name: '1'},
            { id: 2 , name: '2'},
            { id: 3 , name: '3'},
            { id: 4 , name: '4'},
            { id: 5 , name: '5'},
            { id: 6 , name: '6'},
            { id: 7 , name: '7'},
            { id: 8 , name: 'Auto'},
     ];
    ngOnInit(){
        this.test = true;
        // this.defaultSetting =  this.localsStorageSrc.getObj("defaultViewSettings");
        // if(this.defaultSetting == undefined){
        //     let settingData = [ 
        //         { imageSize: "Large" },
        //         { noOfImg: "10" },
        //         { columns: "3" }];
        //     this.localsStorageSrc.setObj("defaultViewSettings", settingData);
        //}
        this.selectedSizes=this.defaultSetting[0].imageSize;
        this.selectedImages= this.defaultSetting[1].noOfImg;
        this.selectedColumns= this.defaultSetting[2].columns;

        // this.selectedSizes="Large";
        // this.selectedImages= "10";
        // this.selectedColumns= "3"

        let settingData = [ 
            { imageSize: this.selectedSizes },
            { noOfImg: this.selectedImages },
            { columns: this.selectedImages }
        ];
       // this.localsStorageSrc.setObj("defaultViewSettings", settingData);
        //this.sessionstorageService.setObj("defaultViewSettings", settingData);       
    }

    @Output() setViewSettingsEvt:EventEmitter<any> = new EventEmitter<any>();
    setViewSettings(size,images,columns):void{
       //localstorage.set("defaultsetting")
        let settingData = [ 
        { imageSize: size },
        { noOfImg: images },
        { columns: columns }];
        console.log("settingData",  settingData);
        // this.localsStorageSrc.setObj("defaultViewSettings", settingData);
        this.setViewSettingsEvt.emit(settingData);
    }
}
