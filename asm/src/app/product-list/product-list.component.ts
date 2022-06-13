import { Component, OnInit } from '@angular/core';
import { SanPham } from '../san-pham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private spService:SanPhamService) { }
  listSP:SanPham[] = [];
  ngOnInit(): void {
    this.listSP = this.spService.getSanPham();
  }
}
