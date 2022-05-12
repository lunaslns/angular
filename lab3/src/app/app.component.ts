import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  chucNang:string='';
  ghiNhanCN(cn:string=''){
    this.chucNang=cn;
    console.log(cn);
  }
}
