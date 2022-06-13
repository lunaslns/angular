import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asm';
  da:any;
  ganDA(da:any){
    this.da = da;
    console.log(this.da);
  }
  nv:any;
  ganNhanVien(nv:any){
    this.nv = nv;
    console.log(this.nv);
  }
}
