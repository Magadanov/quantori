import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, SidenavComponent],
  exports: [HeaderComponent, SidenavComponent],
})
export class CoreModule {}
