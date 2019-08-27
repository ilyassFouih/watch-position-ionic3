import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WatchPositionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WatchPositionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WatchPositionProvider Provider');
  }


  async savePosition(data) {
    return this.http.post("my-api-link",JSON.stringify(data)).toPromise()
  }

}
