import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UploadInput, UploadOutput, UploadFile, humanizeBytes } from 'ngx-uploader';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {
  // Url Api
  private url: string = "http://localhost:3000/photos"

  constructor(private http: Http) { }

  addPhoto(photo, haveFile, upload){
    if (haveFile) { 
    	const event: UploadInput = {
  			type: 'uploadAll',
  			url: this.url,
  			method: 'POST',
  			data: {data: ""}
  		};
  		event.data.data = JSON.stringify(photo);
  		upload.emit(event);
    } else {
    	return this.http.post(this.url, {'photo': photo})
      		.map(res => res.json());
    }
  }

}

