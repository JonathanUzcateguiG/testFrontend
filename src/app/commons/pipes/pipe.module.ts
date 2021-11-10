import { NgModule } from '@angular/core';

import { Age } from './age.pipe';

@NgModule({
	declarations: [
		Age
	],
	exports: [
		Age
	]
})
export class PipeModule {}
