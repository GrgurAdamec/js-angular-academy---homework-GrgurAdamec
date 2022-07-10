import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';

@NgModule({
	declarations: [AppComponent, ShowsContainerComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
