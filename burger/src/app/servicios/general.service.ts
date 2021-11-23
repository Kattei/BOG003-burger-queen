import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public itemListo$=new EventEmitter();
  constructor() { }
}
