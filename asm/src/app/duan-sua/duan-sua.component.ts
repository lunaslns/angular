import { Component, Input, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {

  constructor(private d:DuLieuService) { }

  ngOnInit(): void {
  }

  @Input() da:any;
  daEdit(da:any){
    this.d.editDuAn(da).subscribe(data =>{
      alert('Sửa thành công');
      console.log("Sửa", data);
    })
  }
}
