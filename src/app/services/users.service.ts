 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/class/users';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private createuser = "http://localhost:8080/user/reg";
  
  constructor(private http: HttpClient, private aut: MainService) {

  }

  public addUser(user: any): Observable<any> {
    return this.http.post<any>(this.createuser, user);
  }
}
