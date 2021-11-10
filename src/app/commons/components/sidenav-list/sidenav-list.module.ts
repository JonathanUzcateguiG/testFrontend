import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule
  ],
  exports: [
    SidenavListComponent
  ]
})
export class SidenavListModule { }
