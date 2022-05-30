import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { HomeComponent } from './home/home.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDsComponent } from './product-ds/product-ds.component';
import { ProductThemComponent } from './product-them/product-them.component';
import { ProductSuaComponent } from './product-sua/product-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { DuanThemComponent } from './duan-them/duan-them.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'sanpham', component:ProductListComponent},
  {path:'sanpham/:id', component:ProductDetailComponent},
  {path:'duan', component:DuanListComponent},
  {path:'task', component:TaskListComponent},
  {path:'nhanvien', component:NvListComponent},
  {path:'dangnhap', component:DangnhapComponent},
  {path:'admin/sp', component:ProductDsComponent},
  {path:'admin/themsp', component:ProductThemComponent},
  {path:'admin/suasp/:id', component:ProductSuaComponent},
  {path: 'admin/themtask', component:TaskThemComponent},
  {path: 'admin/themduan', component:DuanThemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
