import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit {

  constructor(private _http:HttpClient) { }
  listNhanVien:any;
  ngOnInit(): void {
    this._http.get('http://localhost:3000/nhanvien').subscribe(data =>{
      this.listNhanVien = data;
      console.log("Danh sách nhân viên: ", data);
    });
  }
  // listNhanVien:NhanVien[] = [
  //   {id: 1, ho: 'Nguyễn Bá', ten: 'Đạo', ngaysinh: '2001-01-03', phai: true, khuvuc: 'Bắc'},
  //   {id: 2, ho: 'Phạm Kỷ', ten: 'Luật', ngaysinh: '2001-05-06', phai: true, khuvuc: 'Bắc'},
  //   {id: 3, ho: 'Mai Thanh', ten: 'Toán', ngaysinh: '2002-06-15', phai: true, khuvuc: 'Nam'},
  //   {id: 4, ho: 'Cao Thị Chót', ten: 'Vót', ngaysinh: '2002-08-19', phai: false, khuvuc: 'Nam'},
  //   {id: 5, ho: 'Mai Thị Sáu', ten: 'Ngàn', ngaysinh: '2001-02-28', phai: false, khuvuc: 'Trung'} 
  // ]
}
