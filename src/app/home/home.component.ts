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
	pic: String;
	formData: FormData;
	files: UploadFile;
	uploadInput: EventEmitter <UploadInput>;
	humanizeBytes: Function;
	photo: Photo = new Photo();
  	constructor(private photoService: PhotoService) { 
  		this.files;
  		this.uploadInput = new EventEmitter<UploadInput>();
  		this.humanizeBytes = humanizeBytes;
  	}

  	onUploadOutput(output: UploadOutput): void{
  	//	if (output.type === 'allAddedToQueue') {
    //   		const event: UploadInput = {
    //     		type: 'uploadAll',
    //     		url: 'http://localhost:3000/photos',
    //     		method: 'POST',
    //     		concurrency: 0
    //   		};
    //   		this.uploadInput.emit(event);	
  	//	}

  	}

  	save(): void{
  			const event: UploadInput = {
  			type: 'uploadAll',
  			url: 'http://localhost:3000/photos',
  			method: 'POST',
  			data: {data: ""}
  		};
  	}

  	removeFile(): void{
  		this.uploadInput.emit({type: 'removeAll'});
  	}

  	cancelUpload(id: string): void {
    	this.uploadInput.emit({ type: 'cancel', id: id });
  	}
}
