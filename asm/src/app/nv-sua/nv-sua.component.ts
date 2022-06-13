import { Component, Input, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {

  constructor(private d:DuLieuService) { }

  ngOnInit(): void {
  }

  @Input() nv:any;
  nvEdit(nv:any){
    this.d.editNhanVien(nv).subscribe(data =>{
      alert('Sửa thành công');
      console.log("Sửa", data);
      
    })
  }
}
