import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { HomeComponent } from './home/home.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDsComponent } from './product-ds/product-ds.component';
import { ProductThemComponent } from './product-them/product-them.component';
import { ProductSuaComponent } from './product-sua/product-sua.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DuanDetailComponent } from './duan-detail/duan-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DuAnAdminComponent } from './du-an-admin/du-an-admin.component';
import { NhanVienAdminComponent } from './nhan-vien-admin/nhan-vien-admin.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoipassComponent } from './doipass/doipass.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    DuanListComponent,
    DuanThemComponent,
    DuanSuaComponent,
    TaskListComponent,
    TaskThemComponent,
    TaskSuaComponent,
    NvListComponent,
    NvThemComponent,
    NvSuaComponent,
    HomeComponent,
    DangnhapComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductDsComponent,
    ProductThemComponent,
    ProductSuaComponent,
    DuanDetailComponent,
    TaskDetailComponent,
    DuAnAdminComponent,
    NhanVienAdminComponent,
    DangkyComponent,
    DoipassComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
