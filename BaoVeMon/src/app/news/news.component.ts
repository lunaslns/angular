import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private d:DataService) { }
  listTin:any;
  ngOnInit(): void {
    this.listTin = this.d.getTin().subscribe(data => this.listTin= data);
  }

}
