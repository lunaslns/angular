import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

  constructor(private _http:HttpClient, private d:DuLieuService) { }
  listDuAn:any;
  ngOnInit(): void {
    this.listDuAn = this.d.getDuAn().subscribe(data=>this.listDuAn = data)
  }
  xoaDA(id:number){
    if(confirm('Bạn có chắc chắn muốn xóa không?')==true){
      this.d.deleteDuAn(id).subscribe(data => alert('Xóa thành công'))
    }
  }
  // @Output() chonDuAn = new EventEmitter();
  // suaDA(da:any){
  //   console.log(da);
  //   this.chonDuAn.emit(da);
  // }
  // listDuAn:DuAn[] = [
  //   {id: 1, tenDuAn: 'Quản lý trại heo', ngayStart: '2022-03-01', tien: 67000000, leader: 1, thanhvien: [1,3,4]},
  //   {id: 2, tenDuAn: 'Cây xanh công viên', ngayStart: '2022-04-02', tien: 98500000, leader: 1, thanhvien: [1,3,4]},
  //   {id: 3, tenDuAn: 'Website văn hóa Việt', ngayStart: '2022-04-15', tien: 35000000, leader: 2, thanhvien: [2,4]},
  //   {id: 4, tenDuAn: 'Website du lịch', ngayStart: '2022-04-21', tien: 75500000, leader: 2, thanhvien: [2,4]},
  //   {id: 5, tenDuAn: 'Quản lý nhà thuốc Vĩnh An', ngayStart: '2022-05-02', tien: 97000000, leader: 3, thanhvien: [3,4]},
  //   {id: 6, tenDuAn: 'Chăm sóc thú cưng', ngayStart: '2022-02-11', tien: 18000000, leader: 3, thanhvien: [3,4]}
  // ]
}
