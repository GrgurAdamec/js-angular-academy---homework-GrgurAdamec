import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';
import { ShowsContainerModule } from './components/shows-container/shows-container.module';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { ShowsService } from './services/show-services/shows.service';
import { AllShowsModule } from './pages/all-shows/all-shows.module';
import { TopRatedShowsModule } from './pages/top-rated-shows/top-rated-shows.module';
import { ShowDetailModule } from './pages/show-detail/show-detail.module';

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
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
