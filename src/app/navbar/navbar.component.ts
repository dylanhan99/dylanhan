import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

import { CustomIcon, customIcons } from '../custom-icons'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.createIcons();
  }

  createIcons() {
    customIcons.forEach((icon: CustomIcon) => {
      console.log(icon.path);
      this.matIconRegistry.addSvgIcon(
        icon.svg,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }

  ngOnInit() {}
}
