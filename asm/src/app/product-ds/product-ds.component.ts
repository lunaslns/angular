import { Component, OnInit } from '@angular/core';
import { SanPham } from '../san-pham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-product-ds',
  templateUrl: './product-ds.component.html',
  styleUrls: ['./product-ds.component.css']
})
export class ProductDsComponent implements OnInit {

  constructor(private spService:SanPhamService) { }
  listSP:SanPham[] = [];
  ngOnInit(): void {
    this.listSP = this.spService.getSanPham();
  }
  xoaSP(id:number=0){
    this.spService.xoaSanPham(id);
    return false;
  }
}
