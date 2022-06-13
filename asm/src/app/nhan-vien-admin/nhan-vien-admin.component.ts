import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-nhan-vien-admin',
  templateUrl: './nhan-vien-admin.component.html',
  styleUrls: ['./nhan-vien-admin.component.css']
})
export class NhanVienAdminComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listNhanVien:any;
  ngOnInit(): void {
    this.listNhanVien = this.d.getNhanVien().subscribe(data => this.listNhanVien = data);
  }
  xoaNhanVien(id:number){
    if(confirm('Bạn có chắc chắn muốn xóa không?')==true){
      this.d.deleteNhanVien(id).subscribe(data => alert('Xóa thành công'));
    }
  }
  @Output() chonNhanVien = new EventEmitter();
  suaNhanVien(nv:any){
    console.log(nv);
    this.chonNhanVien.emit(nv);
  }
}
