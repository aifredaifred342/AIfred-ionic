import { Injectable } from '@angular/core';
import { HttpDataService } from './http-data.service';

@Injectable()
export class CreateMeetingService {

  constructor(private httpDataService: HttpDataService) {}

  save(data) {
    console.log(data);
    
    //this.httpDataService.postForm$()
  }
}
