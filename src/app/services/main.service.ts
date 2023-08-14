import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  
  setUid(uid: string): void {
    localStorage.setItem("id", uid);
  }

  getUid() {
    return localStorage.getItem("id");
  }

}



