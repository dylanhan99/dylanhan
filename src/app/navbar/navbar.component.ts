import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
