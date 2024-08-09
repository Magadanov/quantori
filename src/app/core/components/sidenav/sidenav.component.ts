import { Component, EventEmitter, Output } from '@angular/core';
import { LoginButtonComponent } from '../../../shared/components/login-button/login-button.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [LoginButtonComponent, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Output() closeButtonClick = new EventEmitter<void>();
}
