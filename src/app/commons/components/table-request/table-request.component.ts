import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HOUSE_OPTIONS } from '../../constants';

import { Student } from '../../models/student/student';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
	selector: 'app-table-request',
	styleUrls: ['./table-request.component.scss'],
	templateUrl: './table-request.component.html',
})
export class TableRequestComponent implements AfterViewInit {
	/**
	 * @description property displayedColumns instance of `Array<string>`.
	 * @property {Array<string>} displayedColumns
	 */
	displayedColumns: Array<string> = ['name', 'patronus', 'age', 'house'];

	/**
	 * @description property dataSource instance of `MatTableDataSource<Student>`.
	 * @property {MatTableDataSource<Student>} dataSource
	 */
	dataSource!: MatTableDataSource<Student>;

	/**
	 * @description reference of component MatPaginator.
	 * @property {MatPaginator} paginator
	 * @uses MatPaginator
	 */
	@ViewChild(MatPaginator)
	paginator!: MatPaginator;

	/**
	 * @description reference of component MatSort.
	 * @property {MatSort} sort
	 * @uses MatSort 
	 */
	@ViewChild(MatSort)
	sort!: MatSort;

	/**
	 * @description Defines an Object students instance of `Array<Student>`.
	 * @property {Array<Student>} students
	 */
	@Input()
	public set students(value: Array<Student>) {
		console.log(value);

		this._students = value;
		this.dataSource = new MatTableDataSource(this._students);
	}
	public get students(): Array<Student> {
		return this._students;
	}
	private _students: Array<Student> = [];

	/**
	 * @constructor
	 */
	constructor() {}

	/**
	 * @method ngAfterViewInit
	 * @returns {void}
	 */
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	/**
	 * @method applyFilter
	 * @param {Event} event
	 * @returns {void}
	 */
	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	/**
	 * @method getHouse
	 * @param {string} house
	 * @returns {boolean}
	 */
	getHouse(house: string): string {
		return HOUSE_OPTIONS[house];
	}
}
