import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) { }


  ngOnInit(): void {
  }
  logout(){
    this.service.setLoginStatus(false);
    localStorage.removeItem('username');
    this.router.navigateByUrl('');
  }
}
