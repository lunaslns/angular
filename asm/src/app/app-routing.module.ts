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
import { DuanDetailComponent } from './duan-detail/duan-detail.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { DuAnAdminComponent } from './du-an-admin/du-an-admin.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NhanVienAdminComponent } from './nhan-vien-admin/nhan-vien-admin.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoipassComponent } from './doipass/doipass.component';
import { BaoveGuard } from './baove.guard';
import { DownloadComponent } from './download/download.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'duan', component:DuanListComponent},
  {path:'admin/duan', component:DuAnAdminComponent},
  {path:'admin/addduan', component:DuanThemComponent},
  {path:'admin/editduan/:id', component:DuanSuaComponent},
  {path:'nv', component:NvListComponent},
  {path:'admin/nv', component:NhanVienAdminComponent},
  {path:'admin/themnv', component:NvThemComponent},
  {path:'admin/suanv/:id', component:NvSuaComponent},
  {path:'sanpham', component:ProductListComponent},
  {path:'sanpham/:id', component:ProductDetailComponent},
  {path:'task', component:TaskListComponent},
  {path:'dangnhap', component:DangnhapComponent},
  {path:'dangky', component:DangkyComponent},
  {path:'doipass',
    component:DoipassComponent,
    canActivate:[BaoveGuard],
  },
  {path:'download',
    component:DownloadComponent,
    canActivate:[BaoveGuard],
  },
  {path:'admin/sp', component:ProductDsComponent},
  {path:'admin/task', component:TaskListComponent},
  {path:'admin/themsp', component:ProductThemComponent},
  {path:'admin/suasp/:id', component:ProductSuaComponent},
  {path: 'admin/themtask', component:TaskThemComponent},
  {path: 'duan/:id', component:DuanDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
