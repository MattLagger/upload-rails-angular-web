import { Component, EventEmitter } from '@angular/core';
import { UploadInput, UploadOutput, UploadFile, humanizeBytes } from "ngx-uploader";
import { PhotoService } from './shared/photo.service';
import { Photo } from './shared/photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	formData: FormData;
	files: UploadFile;
	uploadInput: EventEmitter <UploadInput>;
	humanizeBytes: Function;

  	constructor() { 
  		this.files;
  		this.uploadInput = new EventEmitter<UploadInput>();
  		this.humanizeBytes = humanizeBytes;
  	}

  	onUploadOutput(output: UploadOutput): void{
  		if (output.type === 'allAddedToQueue') {
       		const event: UploadInput = {
         		type: 'uploadAll',
         		url: 'http://localhost:3000/photos',
         		method: 'POST',
         		concurrency: 0
       		};
       		this.uploadInput.emit(event);	
  		}
  	}

  	startUpload(): void{
  		const event: UploadInput = {
  			type: 'uploadAll',
  			url: 'http://localhost:3000/photos',
  			method: 'POST',
  		};

  		this.uploadInput.emit(event)
  	}

  	cancelUpload(id: string): void {
    	this.uploadInput.emit({ type: 'cancel', id: id });
  	}
}
