import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.frm1 = new FormGroup({
      ho: new FormControl('', [Validators.required, Validators.maxLength(7)]),
      ten: new FormControl('', [Validators.required, Validators.maxLength(7)]),
      ngaysinh: new FormControl('', [Validators.required]),
      phai: new FormControl('', [Validators.required]),
      khuvuc: new FormControl('', [Validators.minLength(4), Validators.maxLength(20)]),
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
