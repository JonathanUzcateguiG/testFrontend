import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppRoutingModule } from './app.routing';
import { HeaderModule } from './commons/components/header/header.module';
import { SidenavListModule } from './commons/components/sidenav-list/sidenav-list.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
		
		AppRoutingModule,

		DashboardModule,
		HeaderModule,
		SidenavListModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
