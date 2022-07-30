import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {

  constructor(private fbuilder:FormBuilder, private d:DuLieuService) { }
  frm1!:FormGroup;
  ngOnInit(): void {
    this.frm1 = new FormGroup({
      nameDuAn: new FormControl('', [Validators.minLength(10), Validators.maxLength(50)]),
      dateStart: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.min(1000000), Validators.max(1000000000000000)])
    })
  }
  dathem(da:any){
    var id = da.id;
    var nameDuAn = da.nameDuAn;
    var dateStart = da.dateStart;
    var price = da.price;
    var leader = da.leader;
    var member = da.member;
    console.log(id, nameDuAn, dateStart, price, leader, member);
    this.d.addDuAn(da).subscribe(data => alert('Thêm thành công'));
  }
  ngDoCheck(){
    console.log(this.frm1);
  }
}
