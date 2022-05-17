import { Component, Input, OnInit } from '@angular/core';
import { ISanpham } from '../isanpham';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() sp:ISanpham={
    id:0, 
    tensp:'', 
    code:'', 
    giasp:0, 
    mota:'', 
    urlImage:'', 
    ngay:'', 
    starRate:0
  }
}
