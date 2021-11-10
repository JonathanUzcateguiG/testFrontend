import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { PipeModule } from '../../pipes/pipe.module';

import { TableCharacterComponent } from './table-character.component';

@NgModule({
  declarations: [
    TableCharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipeModule,
  ],
  exports: [
    TableCharacterComponent
  ]
})
export class TableCharacterModule { }
