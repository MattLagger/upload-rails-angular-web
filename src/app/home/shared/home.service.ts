import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable()
export class HomeService {
  photos: Photo[] = [];

  constructor() { }

  addPhoto(photo: Photo): HomeService{
  	this.photos.push(photo);
  	return this;
  }

  getPhotos(): Photo[]{
  	return this.photos
  }
}
