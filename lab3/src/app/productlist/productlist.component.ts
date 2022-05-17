import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISanpham } from '../isanpham';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products:ISanpham[] = [];

  @Output() capnhatidSP = new EventEmitter();
  xemChiTiet(id:number=0){
    var sp = this.products.find(sp=>sp.id==id);
    this.capnhatidSP.emit(sp);
  }
}
