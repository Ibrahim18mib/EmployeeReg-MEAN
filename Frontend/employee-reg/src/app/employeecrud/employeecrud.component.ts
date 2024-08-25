import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environment';
import { Constants } from '../../constants/constant';

@Component({
  selector: 'app-employeecrud',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.scss',
})
export class EmployeecrudComponent implements OnInit {
  employeeLists: any[] = [];
  currentEmpId: any = '';

  name: string = '';
  address: string = '';
  phone: string = '';

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllEmp();
  }

  getAllEmp() {
    this.http
      .get(environment.base_url + Constants.API_END_POINTS.GETALL)
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.employeeLists = resultData.data;
      });
  }

  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };
    this.http
      .post(environment.base_url + Constants.API_END_POINTS.CREATE, bodyData)
      .subscribe((resultData: any) => {
        try {
          if (resultData.status) {
            alert('Data Added Successfully');
            this.name = '';
            this.address = '';
            this.phone = '';
            this.getAllEmp();
          } else {
            alert('Error while Creating the data');
          }
        } catch (error) {
          alert(error);
        }
      });
  }
  save() {
    if (this.currentEmpId == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  setUpdate(empData: any) {
    this.name = empData.name;
    this.address = empData.address;
    this.phone = empData.phone;

    this.currentEmpId = empData._id;
  }

  UpdateRecords() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    this.http
      .patch(
        environment.base_url +
          Constants.API_END_POINTS.UPDATE +
          '/' +
          this.currentEmpId,
        bodyData
      )
      .subscribe(
        (resultData: any) => {
          if (resultData.status) {
            console.log(resultData);
            alert('Employee Updateddd');
            this.getAllEmp();
            this.name = '';
            this.address = '';
            this.phone = '';
          } else {
            alert('Error while updating in the Server');
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  setDelete(empData: any) {
    this.http
      .delete(
        environment.base_url +
          Constants.API_END_POINTS.DELETE +
          '/' +
          empData._id
      )
      .subscribe((res: any) => {
        try {
          if (res.status) {
            alert('Data has deleted Successfully..');
            this.getAllEmp();
          } else {
            alert('Error while deleting data.');
          }
        } catch (error) {
          alert(error);
        }
      });
  }
}
