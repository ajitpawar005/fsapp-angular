import { Injectable } from '@angular/core';

/* Common service to share data in multiple components */

@Injectable()
export class ViewprojectcommonService {
    private enlargeData: any;

    setImageEnlargeData(data: any) {
        this.enlargeData = data;
    }

    getImageEnlargeData() {
        return this.enlargeData;
    }
}
