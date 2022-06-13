import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {

  constructor(private fbuilder:FormBuilder) { }
  frm1!:FormGroup;
  ngOnInit(): void {
    this.frm1! = this.fbuilder.group({
      ten: ['', Validators.required],
      mota: ['', Validators.required],
      duan: ['', Validators.required],
      nguoithuchien: ['', Validators.required],
      uutien: ['', Validators.required],
      trangthai: ['', Validators.required]
    })
  }
  ngDoCheck(){
    console.log(this.frm1);
    
  }
}
