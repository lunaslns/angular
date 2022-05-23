import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ProductDsComponent } from './product-ds/product-ds.component';
import { ProductSuaComponent } from './product-sua/product-sua.component';
import { ProductThemComponent } from './product-them/product-them.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'sanpham', component:ProductlistComponent},
  {path:'sanpham/:id', component:ProductdetailComponent},
  {path:'lienhe', component:LienheComponent},
  {path:'dangnhap', component:DangnhapComponent},
  {path:'admin/sp', component:ProductDsComponent},
  {path:'admin/themSP', component:ProductThemComponent},
  {path:'admin/suaSP/:id', component:ProductSuaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
