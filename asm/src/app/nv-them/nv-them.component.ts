import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {

  constructor(private fbuilder:FormBuilder, private d:DuLieuService) { }
  frm1!:FormGroup;
  ngOnInit(): void {
    this.frm1 = this.fbuilder.group({
      ho: ['', Validators.required],
      ten: ['', Validators.required],
      ngaysinh: ['', Validators.required],
      phai: ['', Validators.required],
      khuvuc: ['', Validators.required],
    })
  }
  ho:string='';
  nvthem(nv:any){
    var ho = nv.ho;
    var ten = nv.ten;
    var ngaysinh = nv.ngaysinh;
    var phai = nv.true || nv.false;
    var khuvuc = nv.khuvuc;
    console.log(ho, ten, ngaysinh, phai, khuvuc);
    this.d.addNhanVien(nv).subscribe(data => alert('Thêm thành công'));
  }
}
