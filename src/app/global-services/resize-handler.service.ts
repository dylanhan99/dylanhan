import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable ({providedIn: 'root'})
export class ResizeHandlerService {
  private m_ImTheMap: Map<string, boolean> = 
    new Map<string, boolean> ([
      [Breakpoints.XSmall, false],
      [Breakpoints.Small , false],
      [Breakpoints.Medium, false],
      [Breakpoints.Large , false],
      [Breakpoints.XLarge, false],
    ]);
  
  constructor(
    private m_Observer: BreakpointObserver
  ) { 
    console.log("ay");
    this.m_Observer.observe(Array.from(this.m_ImTheMap.keys()))
        .subscribe(result => {
          console.log(result.breakpoints);
          console.log(result.matches);
            //if (result.matches) {
            //  console.log("screen matches HandsetLandscape");
            //}
        }
      );
  }
  
  public get(){console.log("aaaaa");}
}
