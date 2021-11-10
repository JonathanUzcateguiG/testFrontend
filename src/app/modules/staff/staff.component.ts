import { Component, OnInit } from '@angular/core';

import { StaffService } from 'src/app/services/staff/staff.service';
import { LoaderService } from 'src/app/services/loader';

import { Staff } from 'src/app/commons/models/staff/staff';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';

const HOUSE_OPTIONS: { [key: string]: any } = {
    slytherin : "Slytherin",
    gryffindor : "Gryffindor",
    ravenclaw : "Ravenclaw",
    hufflepuff : "Hufflepuff",
};

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  options: Array<SelectOption> = [];
  staffs: Array<Staff> = [];

	/**
	 * @constructs StaffComponent
	 * @param {StaffService} staffService
	 * @param {LoaderService} loaderService
	 */
  constructor(
    public staffService: StaffService,
    public loaderService: LoaderService
    ) {
    for (let key in HOUSE_OPTIONS) {
      this.options.push({ text: key, value: HOUSE_OPTIONS[key] });
    }
  }

  ngOnInit(): void {
    this.getStaffs()
  }

  /**
   * @method getStaffs
   * @returns {void}
   */
  getStaffs(): void {
    this.loaderService.loading();
    this.staffService.get().subscribe(
      (response: any) => {
        this.loaderService.loaded();
        console.log(response);
        this.staffs = response;
      },
      (error: any) => {
        this.loaderService.loaded();
        console.log(error);
      }
    );
  }

  /**
   * @method isLoading
   * @returns {boolean}
   */
  isLoading(): boolean {
    console.log(this.loaderService.isLoading());

    return this.loaderService.isLoading();
  }
}
