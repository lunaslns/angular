import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
  frm1!:FormGroup;

  ngOnInit(): void {
    this.frm1 = new FormGroup({
      username: new FormControl('teonv'),
      password: new FormControl('123'),
    });
  }

  xulyDN(data:any){
    this.auth.login(data.un, data.pw).subscribe(()=>{
      console.log("Đăng nhập thành công");
      this.router.navigateByUrl('/');
    })
  }


  username:string='';
  password:string='';
  xuly(d:any){
    console.log("Data: ",d);
    console.log("Username=", this.username);
    console.log("Password=", this.password);
  }
}
