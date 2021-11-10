import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoaderComponent } from './loader.component';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
