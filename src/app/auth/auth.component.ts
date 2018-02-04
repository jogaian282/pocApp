import { Component, OnInit , ViewChild , ElementRef , Renderer,AfterViewInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Register } from '../model/register';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[AuthService]
})

export class AuthComponent implements OnInit , AfterViewInit {
  formOnSubmit: boolean;
  isActiveLoginTab:boolean = true;
  isActiveRegistrationTab:boolean;
  signUp:Register = new Register();
  user:User = new User();
  usersList:User[];
  errMsg:string;
  @ViewChild('login') login:ElementRef;
  @ViewChild('register') register:ElementRef;
  @ViewChild('focus') focus:ElementRef;
  @ViewChild('loginFocus') loginFocus:ElementRef;
  @ViewChild('registerForm') registerForm;
  @ViewChild('loginForm') loginForm;

  constructor(private authService:AuthService,private renderer:Renderer,private router:Router) { }

  ngOnInit() {
    this.getUsersList();
  }

  ngAfterViewInit() {
    this.loginFocus.nativeElement.focus();
  }

  auth(eventObject) {
    if(eventObject.target.innerHTML == "LOGIN") {
      this.formOnSubmit = false;
      this.isActiveLoginTab = true;
      this.isActiveRegistrationTab = false;
      if(this.isActiveRegistrationTab == false) {
       this.register.nativeElement.classList.remove('active');
      }
      this.login.nativeElement.classList.add('active');
      eventObject.preventDefault();
    } else {
      const element = this.renderer.selectRootElement(this.focus.nativeElement);
      setTimeout(() => element.focus(), 0);
      this.formOnSubmit = false;
      this.isActiveRegistrationTab = true;
      this.isActiveLoginTab = false;
      if(this.isActiveLoginTab == false) {
        this.login.nativeElement.classList.remove('active');
       }
      this.register.nativeElement.classList.add('active');
      eventObject.preventDefault();
    }
  }

  registration() {
    if(!this.registerForm.valid) {
      this.formOnSubmit = true;
      return false;
    } else {
      this.formOnSubmit = false;
      this.signUp = this.registerForm.value;
      this.authService.registerUser(this.signUp).subscribe(successMsg => {
        alert('User registerd successfully');
        this.registerForm.reset();
        window.location.reload();
      },
      error => {
        alert('Error happened. Please try after sometime');
      })
    }
  }

  getUsersList() {
    this.authService.getUsers().subscribe(usersList => {
      this.usersList = JSON.parse(JSON.stringify(usersList));
    },
    error => {
      alert('Error Occurred');
    });
  }

  validateUser() {
    var loginCredentials = [];
    if(!this.loginForm.valid) {
      this.formOnSubmit = true;
      return false;
    } else {
      this.formOnSubmit = false;
      this.errMsg = '';
      this.user = this.loginForm.value;
      for (const userKey in this.usersList) {
        loginCredentials.push({"username":this.usersList[userKey].userName,"password":this.usersList[userKey].password});
      }
      if(loginCredentials != null) {
        for (const iterator of loginCredentials) {
          if(this.user.userName === iterator.userName && this.user.password === iterator.password) {
            alert("User exists");
            this.formOnSubmit = false;
            this.loginForm.reset();
            this.router.navigate(['/request']);
            break;
          } else {
            this.errMsg = "User not exists";
            this.formOnSubmit = false;
            this.loginForm.reset();
          }
        }
      }
    }
  }

}
