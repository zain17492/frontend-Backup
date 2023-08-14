import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private createToken = "http://localhost:8080/admin/gettoken";

  constructor(private http:HttpClient) { }

  //generate token
  public generateToken(userLog:any):Observable<any> {
    return this.http.post<any>(this.createToken,userLog);
  }

 
}
