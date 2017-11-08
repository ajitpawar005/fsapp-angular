import {Injectable} from '@angular/core';

@Injectable()
export class componentStateService {
  private _componentVisible$: boolean;
  constructor() {
    this._componentVisible$ = false;
  }
}