import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanPham } from '../san-pham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-product-sua',
  templateUrl: './product-sua.component.html',
  styleUrls: ['./product-sua.component.css']
})
export class ProductSuaComponent implements OnInit {

  constructor(private spService:SanPhamService, private router:Router, private activeRoute:ActivatedRoute) { }
  idSP:number = Number(this.activeRoute.snapshot.params['id']);
  sp:SanPham = <SanPham>{};
  ngOnInit(): void {
    let kq = this.spService.getSanPhamDetail(this.idSP);
    this.sp = kq as SanPham;
  }
  capnhatSP(){
    this.spService.capnhatSanPham(this.sp);
    this.router.navigate(['/admin/sp']);
  }
}
