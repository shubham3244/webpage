import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { MatPaginator, MatTableDataSource } from '@angular/material';
// import { table } from 'console';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  // datas:any
  filename = 'exportcsv'
  data:any
  id: any;
  columns = ["id", "first_name", "last_name", "user_email", "user_role"];
  checkedKey = ["id", "first_name", "last_name", "user_email", "user_role"];

  showedcolumnstoExcel = [];
usersList: any;

  Addform = new FormGroup({
  })
  curpage: number = 1;
  pagesize: number = 5;
  total: any;

  constructor(private user: UserService, private router: Router, private Activated: ActivatedRoute) {
    // this.data = new Array<any>()
  }
  ngOnInit(): void {
    this.user.onget(this.curpage, this.pagesize).subscribe((datas: any) => {
      this.data = datas.response.data;
      this.usersList= datas.response.data;
      this.total = datas.response.totalRecords;
      // console.log(this.total);
    })
  }
  ongetusers(event: any) {
    // console.log(event)
    this.curpage = event
    this.user.onget(event, this.pagesize).subscribe((datas: any) => {
      // console.log(datas);
      this.data = datas.response.data

    })

  }
  onSubmit() {
    this.router.navigate(['adduser'])
  }


  onEditUser(id: any) {
    this.router.navigate(['/edituser', id])

  }
  onDelete(id: any) {
    this.user.ondelete(id).subscribe((data) => {
      this.router.navigate(['userlist'])

      console.log(data);

    })
  }


  onSubmits() {
    this.user.onget(this.curpage, this.pagesize).subscribe((datas: any) => {
      this.id = datas.response.data;
      // this.total=datas.response.totalRecords;
      console.log(datas.response.data)

    })

  }
  
  Selectall(source,event) {
    let checkboxes:any =  document.getElementsByName("try") 
    let parentcheck:any = document.getElementById('try2')
    for(var i=0, n=checkboxes.length;i<n;i++) {
     
      if(event.target.checked){
        checkboxes[i].checked = !source.checked;
      }
      else
      if(!event.target.checked){
        checkboxes[i].checked = source.checked;
      }
    }}
  exportExcel() {
    
    this.filename = "user_details.xlsx"
    const redux = (array: []) => array.map(ob => this.showedcolumnstoExcel.reduce((acc, curr) => {
      acc[curr] = ob[curr];
      return acc;
    }, {}));
    // console.log(this.usersList)
    console.log(redux(this.usersList));
    var excelData = this.usersList;
    if (this.showedcolumnstoExcel.length > 0) {
      this.filename = "selectedColUsers.xlsx"
      excelData = redux(this.usersList);
    }
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excelData)
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'sheet1')
    XLSX.writeFile(wb, this.filename);
  }
 
  onChecked(event, value) {
    if (event.target.checked) {
        this.showedcolumnstoExcel.push(value)
      } else {
        if (this.showedcolumnstoExcel.includes(value)) {
          let index = this.showedcolumnstoExcel.indexOf(value);
          this.showedcolumnstoExcel.splice(index, 1)
        }
      } 
  
    }

}
