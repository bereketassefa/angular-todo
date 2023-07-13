import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailValue = ""
  passwordValue=""
  errorMessage=""
  loading=false
  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  log(){
    this.loading = true
    this.auth.login(this.emailValue , this.passwordValue).subscribe((res)=>{
      if(res === true){
        localStorage.setItem("logged" , "true")
        this.router.navigate(['home'])
      }else{
        this.errorMessage = "please enter valid email or password"
      }
    } , (err: any)=>{console.log(err)} )
  }

}
