import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.setLoginStatus(false);
    localStorage.removeItem('username');
    this.router.navigateByUrl('');
  }

}
