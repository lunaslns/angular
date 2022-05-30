import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanPham } from '../san-pham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private spService:SanPhamService) { }
  idSP:number = Number(this.route.snapshot.params['id']);
  sp = <SanPham>{};
  ngOnInit(): void {
    if(this.idSP<0) return;
    let kq = this.spService.getSanPhamDetail(this.idSP);
    if(kq==null){
      this.sp = {} as SanPham;
    }else{
      this.sp = kq as SanPham;
    }
  }

}
