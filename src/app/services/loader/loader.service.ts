import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoaderService {
	/**
	 * @description Defines property loader type of `boolean`.
	 * @property {boolean} loader
	 */
	private loader: boolean;

	/**
	 * @description Defines property change type of `EventEmitter<boolean>`.
	 * @Output @property {EventEmitter<boolean>} change
	 */
	@Output()
	change: EventEmitter<boolean> = new EventEmitter();

	/**
	 * @constructs LoaderService
	 */
	constructor() {
		this.loader = false;
	}

	/**
	 * @method loading
	 * @returns {void}
	 */
	loading(): void {
		this.loader = true;
		this.change.emit(this.loader);
	}

	/**
	 * @method loaded
	 * @param {string} nameLoader
	 * @returns {void}
	 */
	loaded(): void {
		this.loader = false;
		this.change.emit(this.loader);
	}

	/**
	 * @method isReady
	 * @returns {boolean}
	 */
	isReady(): boolean {
		return !this.isLoading();
	}

	/**
	 * @method isLoading
	 * @returns {boolean}
	 */
	isLoading(): boolean {
		return this.loader;
	}
}
