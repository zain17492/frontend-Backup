import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLog={
    username:'',
    password:'',
  };


  constructor(private snack:MatSnackBar, private login:LoginService) {}
  ngOnInit():void{}

  formSubmitlog() {
    console.log("Login submit");
    if(this.userLog.username.trim()=='' || this.userLog.username==null)
    {
      this.snack.open('User name is required !!', '',{
        duration:4000,
        
      });
      return;
  }
  if(this.userLog.password.trim()=='' || this.userLog.password==null)
  {
    this.snack.open('Password is required !!', '',{
      duration:4000,
      
    });
    return;
}
//request to server to generate token
this.login.generateToken(this.userLog).subscribe(
  (data:any)=>{
    console.log("done token");
    console.log(data);
  },
  (error)=>{
    console.log("Error");
    console.log(error);
  }
  );
}
}
