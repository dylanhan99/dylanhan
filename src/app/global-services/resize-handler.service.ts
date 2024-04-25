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
    this.m_Observer.observe(Array.from(this.m_ImTheMap.keys()))
      .subscribe(result => {
        for (let key of this.m_ImTheMap.keys()) {
          this.m_ImTheMap.set(key, result.breakpoints[key]);
        }
      });
  }
  
  public get(){console.log("aaaaa");}
}
