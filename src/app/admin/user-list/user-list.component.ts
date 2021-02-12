import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { editUsers } from './class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  datalist: any;
  data: any;
  isSpinner: boolean = true;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'password', 'phonenumber', 'email', 'role', 'Edit', 'Delete'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  populaterole: any;
  populatePassword: any;
  username: any;
  oldPswd: any;
  oldPhoneNo: any;
  sucess: string;
  oldRole: any;
  deleteUserDetails: String;
  selectedIndex: any;

  constructor() { }

  ngOnInit(): void {
    var registeredUser: any = localStorage.getItem('objUser');
    this.datalist = JSON.parse(registeredUser)

    this.getuserlist()
  }

  getuserlist(){
    this.dataSource = this.datalist;
    this.isSpinner = false;
  }
  saveChanges(){
  
    for (let i = 0; i < this.datalist.length; i++) {

      if (this.datalist[i].password == this.oldPswd && this.datalist[i].role == this.oldRole) {

        this.datalist[i].password = this.populatePassword;
        this.datalist[i].role = this.populaterole;
        localStorage.setItem('objUser', JSON.stringify(this.datalist))
        this.sucess = "Updated Successfully";
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  }
  openModal(rowData:editUsers) {
  
    this.populatePassword = rowData.password;
    this.populaterole = rowData.role;
  }
  delete(deleteUserName : String) {
    this.deleteUserDetails = deleteUserName
  }

  deleteUser() {
    this.datalist.splice(this.selectedIndex, 1);
    localStorage.setItem('objUser', JSON.stringify(this.datalist))
    this.sucess = "deleted Successfully";
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}
