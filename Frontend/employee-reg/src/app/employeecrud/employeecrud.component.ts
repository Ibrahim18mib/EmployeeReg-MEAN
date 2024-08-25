import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environment';
import { constants } from 'buffer';
import { Constants } from '../../constants/constant';

@Component({
  selector: 'app-employeecrud',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.scss'
})
export class EmployeecrudComponent implements OnInit {

  employeeLists:any[] = [];
  currentEmpId:any = ''

  name:string = '';
  address:string = '';
  phone:string = '';

  http = inject(HttpClient)

  ngOnInit(): void {
    this.geAllEmp()
  }

  geAllEmp(){

    this.http.get(environment.base_url + Constants.API_END_POINTS.GETALL)
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.employeeLists = resultData.data;
    });


  }

  save(){

  }

  setUpdate(empData:any){

  }

  setDelete(empData:any){

  }



}
