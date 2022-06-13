import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuAn } from '../du-an';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-duan-detail',
  templateUrl: './duan-detail.component.html',
  styleUrls: ['./duan-detail.component.css']
})
export class DuanDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private spService:SanPhamService) { }
  idDA:number = Number(this.route.snapshot.params['id']);
  da = <DuAn>{};
  ngOnInit(): void {
    if(this.idDA<0) return;
    // let kq = this.spService.getTaskDetail(this.idDA);
    // if(kq == null){
    //   this.da = {} as DuAn;
    // }else{
    //   this.da = kq as DuAn;
    // }
  }

}
