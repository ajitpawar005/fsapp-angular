import { Injectable, Inject } from '@angular/core';
import { Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
//import { Http } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// import { AppSettings } from '../../providers/appSettings/appSettings';
// import { RestService } from '../../providers/restService/restService';
// import { LocalstorageService } from '../../providers/localstorageService/localstorageService';
// import { Constants } from '../../providers/appSettings/constant-settings';

/*
  Generated class for the DbService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ViewprojectService {
    constructor(
        // private restService: RestService, 
        // public locstr: LocalstorageService,
        // private contant: Constants
    ){
    }

    /* Load selected project data */
    getProjectData(data: any){
        // var path = AppSettings.PROJECT_DATA + data.project_id;
        // return this.restService.getCall(path, data, false, null)
        //     .map(res => res.json())
        //     .catch(this.handleError);
    }
    
    // getAlbumData(data: any): Observable<any> {
    //     var path = AppSettings.ALBUM_IMAGES +'/'+ data.project_id +'/'+ data.album_id;
    //     return this.restService.getCall(path, data, false, null)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }

    // addImagesToAlbum(data: any):Observable<any>{
    //     var path = AppSettings.ALBUM_IMAGES;
    //     return this.restService.postCall(path,data,true, null)
    //     .map(res =>res.json()).catch(this.handleError);
    // }
    
    private handleError = (error: Response | any) => {
        if (error && error.status == 401) {
            this.showErrorPopup('Unauthorized');
        } else {
            if (error) {
                var err: any;
                err = error.json();
                if (error && err) {
                    //console.log("in handleerror", error.json());
                    if (error.code == 401) {
                    } else {
                        return Observable.throw(err);
                    }
                    //this.showErrorPopup(err.message);            
                } else {
                    this.showErrorPopup("Server is unreachable");
                    //alert("server unreachable");
                }
            } else {
                this.showErrorPopup("Server is unreachable");
                //alert(error.message);
            }
        }
        return Observable.throw(err);
    }
    public showErrorPopup = (msg: string) => {
        alert(msg);
    }
}
