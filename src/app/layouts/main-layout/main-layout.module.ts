import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'app/components/navigation/navigation.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [CommonModule, RouterModule, NavigationModule, MatSidenavModule],
})
export class MainLayoutModule {}
