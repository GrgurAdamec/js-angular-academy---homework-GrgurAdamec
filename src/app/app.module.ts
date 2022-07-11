import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';
import { ShowsContainerModule } from './components/shows-container/shows-container.module';
import { ShowsListComponent } from './components/shows-list/shows-list.component';

@NgModule({
	declarations: [AppComponent, ShowsContainerComponent, ShowsListComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ShowsContainerModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
