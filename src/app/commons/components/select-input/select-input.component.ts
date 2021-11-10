import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatSelect, MatSelectChange } from '@angular/material/select';

import { SelectOption } from './select-option.interface';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @ViewChild(MatSelect)
  public matSelect!: MatSelect;

  /**
   * @description Defines an Object options instance of `Array<SelectOption>`.
   * @property {Array<SelectOption>} options
   */
  @Input()
  public set options(value: Array<SelectOption>) {
    console.log(value);
    
    this._options = value;
  }
  public get options(): Array<SelectOption> {
    return this._options;
  }
  private _options: Array<SelectOption> = [];

  /**
   * @description property value instance of `string`.
   * @property {string} value
   */
  value!: string;

  /**
   * @description Defines property changeValue type of `EventEmitter<string>`.
   * @property {EventEmitter<string>} changeValue
   */
  @Output()
  changeValue: EventEmitter<string> = new EventEmitter<string>();

  /**
   * @constructs InputSelectComponent
   */
  constructor() { }

  /**
   * @method ngOnInit
   * @returns {void}
   */
  ngOnInit(): void { }

  /**
   * @method selectionChange
   * @param {MatSelectChange} event
   * @returns {void}
   */
  selectionChange(event: MatSelectChange): void {
    this.value = event.value;
    this.changeValue.emit(this.value);
  }

}
