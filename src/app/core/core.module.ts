import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, SidenavComponent, FooterComponent],
  exports: [HeaderComponent, SidenavComponent, FooterComponent],
})
export class CoreModule {}
