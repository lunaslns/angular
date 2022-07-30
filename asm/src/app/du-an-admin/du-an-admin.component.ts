import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-du-an-admin',
  templateUrl: './du-an-admin.component.html',
  styleUrls: ['./du-an-admin.component.css']
})
export class DuAnAdminComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listDuAn:any;
  ngOnInit(): void {
    this.listDuAn = this.d.getDuAn().subscribe(data=>this.listDuAn = data);
  }
  xoaDuAn(id:number){
    if(confirm('Bạn có chắc chắn muốn xóa không?')==true){
      this.d.deleteDuAn(id).subscribe(data => alert('Xóa thành công'))
    }
  }
  @Output() chonDA = new EventEmitter();
  suaDA(da:any){
    console.log(da);
    this.chonDA.emit(da);
  }
  da:any;
  ganDA(da:any){
    this.da=da;
    console.log(this.da);
}
}
