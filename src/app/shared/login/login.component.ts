import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  allRegisteredUsers: string;
  username: string;
  error: string;
  password: any;


  constructor(public formBuilder: FormBuilder, public router: Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      Password: ['', Validators.required],
    });

    this.allRegisteredUsers = localStorage.getItem('objUser')

  }

  login() {
    this.username = this.loginForm.get('userName').value;
    this.password = this.loginForm.get('Password').value;

    // direct access for admin username = admin password = admin
 
    if (this.username == 'admin' && this.password == 'admin') {
      this.authservice.setLoginStatus(true);
      this.router.navigateByUrl('/admin/register')
    } else if (this.username != '' && this.password != '') {
      var allRegisteredUsersObj = JSON.parse(this.allRegisteredUsers);
      var isvaliduser = allRegisteredUsersObj.some((obj) => {
        return obj.userName == this.username && obj.password == this.password && obj.role == 'teacher';
      })
      if (isvaliduser) {
        this.authservice.setLoginStatus(true);
        this.router.navigateByUrl('/teacher');
      } else {
        this.authservice.setLoginStatus(true);
        this.router.navigateByUrl('/student');

      }
    } else {
      alert("please check username and password");
    }
  }


}


