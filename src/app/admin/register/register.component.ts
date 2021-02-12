import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isError: boolean = false;
  isSuccess: boolean = false;
  error: string;
  isAdd: boolean = false;
  success: string;


  constructor(public formbuider: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formbuider.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      Username: ['', Validators.required],
      password: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]

    });
  }

  register() {
    const objUser = {
      "firstName": this.registerForm.get('firstname').value,
      "lastName": this.registerForm.get('lastname').value,
      "userName": this.registerForm.get('Username').value,
      "password": this.registerForm.get('password').value,
      "phno": this.registerForm.get('phonenumber').value,
      "email": this.registerForm.get('email').value,
      "role": this.registerForm.get('role').value,
    }

    var susers = localStorage.getItem("objUser")
    var wusers = []
debugger
    if (susers == null) {
      wusers.push(objUser)
      susers = JSON.stringify(wusers);
      localStorage.setItem("objUser", susers);

    } else {
      wusers = JSON.parse(susers);
      var isuserexist = wusers.some((obj) => {
        return obj.userName == objUser.userName
      });
    }

    if (isuserexist == true) {
      this.isSuccess = false
      this.isError = true
      this.error = "Already User exists"
    } else {
      wusers.push(objUser);
      susers = JSON.stringify(wusers);
      localStorage.setItem("objUser", susers);

      this.isError = false
      this.isSuccess = true
      if (this.isAdd)
        this.success = "User created"
      else
        this.success = "registered"

      setTimeout(() => {
          this.router.navigateByUrl('');
      }, 3000);
    }

  }

}
