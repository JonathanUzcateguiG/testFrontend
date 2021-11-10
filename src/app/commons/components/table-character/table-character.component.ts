import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Character } from '../../models/character/character';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
	selector: 'app-table-character',
	styleUrls: ['./table-character.component.scss'],
	templateUrl: './table-character.component.html',
})
export class TableCharacterComponent implements AfterViewInit {
	/**
	 * @description property displayedColumns instance of `Array<string>`.
	 * @property {Array<string>} displayedColumns
	 */
	displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
	/**
	 * @description property dataSource instance of `MatTableDataSource<Student>`.
	 * @property {MatTableDataSource<Student>} dataSource
	 */
	dataSource!: MatTableDataSource<Character>;

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
	 * @description Defines an Object characters instance of `Array<Character>`.
	 * @property {Array<Character>} characters
	 */
	@Input()
	public set characters(value: Array<Character>) {
		console.log(value);

		this._characters = value;
		this.dataSource = new MatTableDataSource(this._characters);
	}
	public get characters(): Array<Character> {
		return this._characters;
	}
	private _characters: Array<Character> = [];

	/**
	 * @constructor
	 */
	constructor() {}

	/**
	 * @method ngAfterViewInit
	 * @returns {void}
	 */
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	/**
	 * @method applyFilter
	 * @param {Event} event
	 * @returns {void}
	 */
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
}
