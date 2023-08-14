import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  
  constructor(private userservice:UsersService,private snack:MatSnackBar) {}

  public users={
    uname:'',
    uphone:'',
    email:'',
    password:'',

  };

ngOnInit(): void {}
  
  formSubmit()
  {
    console.log(this.users);
    if(this.users.uname==''|| this.users.uname==null){
      this.snack.open('User name is required !!', '',{
        duration:4000,
        
      });
      return;
    }
 
    if(this.users.uphone==''|| this.users.uphone==null){
      this.snack.open('Mobile number is required !!', '',{
        duration:4000,
        
      });
      return;
    }

    if(this.users.email==''|| this.users.email==null){
      this.snack.open('Email is required !!', '',{
        duration:4000,
        
      });
      return;
    }

    if(this.users.password==''|| this.users.password==null){
      this.snack.open('Password is required !!', '',{
        duration:4000,
      
      });
      return;
    }

    this.userservice.addUser(this.users).subscribe(
      (data)=> {
        console.log(data);
        Swal.fire('Successfully','success')
      },
      (error)=>{
        console.log(error);
        this.snack.open('Something went wrong !!', '');
      }
    )

    
    
  }
}
