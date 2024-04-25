import { AfterViewInit, Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

import { CustomIcon, customIcons } from '../custom-icons'
import { ResizeHandlerService } from '../global-services/resize-handler.service';

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
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(
    private resizeHandlerService: ResizeHandlerService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.createIcons();

    resizeHandlerService.get();
  }

  createIcons() {
    customIcons.forEach((icon: CustomIcon) => {
      this.matIconRegistry.addSvgIcon(
        icon.svg,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
