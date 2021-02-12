import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.setLoginStatus(false);
    localStorage.removeItem('username');
    this.router.navigateByUrl('');
  }

}
