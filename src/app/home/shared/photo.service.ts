import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {
  // Url Api
  private url: string = "http://localhost:3000/photos"

  constructor(private http: Http) { }

  addPhoto(photo){
    return this.http.post(this.url, {'photo': photo})
      .map(res => res.json());
  }

}

