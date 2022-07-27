import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	declarations: [NavigationComponent],
	imports: [CommonModule, RouterModule, MatSidenavModule],
	exports: [NavigationComponent],
})
export class NavigationModule {}
