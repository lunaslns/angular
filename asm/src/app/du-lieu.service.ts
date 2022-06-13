import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor(private h:HttpClient) { }
  getDuAn(){
    return this.h.get('http://localhost:3000/duan');
  }
  addDuAn(da:any){
    return this.h.post('http://localhost:3000/duan', da);
  }
  deleteDuAn(id:number){
    return this.h.delete('http://localhost:3000/duan/' + id);
  }
  editDuAn(da:any){
    return this.h.put('http://localhost:3000/duan/' + da.id, da);
  }
  getNhanVien(){
    return this.h.get('http://localhost:3000/nhanvien');
  }
  addNhanVien(nv:any){
    return this.h.post('http://localhost:3000/nhanvien', nv);
  }
  deleteNhanVien(id:number){
    return this.h.delete('http://localhost:3000/nhanvien/' + id);
  }
  editNhanVien(nv:any){
    return this.h.put('http://localhost:3000/nhanvien/' + nv.id, nv);
  }
}
