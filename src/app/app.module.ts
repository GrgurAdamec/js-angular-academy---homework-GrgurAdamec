import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerModule } from './components/shows-container/shows-container.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { AllShowsModule } from './pages/all-shows/all-shows.module';
import { TopRatedShowsModule } from './pages/top-rated-shows/top-rated-shows.module';
import { ShowDetailModule } from './pages/show-detail/show-detail.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ShowsContainerModule,
		MainLayoutModule,
		AllShowsModule,
		TopRatedShowsModule,
		ShowDetailModule,
		AuthLayoutModule,
		LoginModule,
		RegisterModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
