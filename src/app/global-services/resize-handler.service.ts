import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable ({providedIn: 'root'})
export class ResizeHandlerService {
  private m_ImTheArr: string[] = [
    Breakpoints.XSmall,
    Breakpoints.Small ,
    Breakpoints.Medium,
    Breakpoints.Large ,
    Breakpoints.XLarge
  ];
  private m_ImTheMap: Map<string, boolean> = 
    new Map<string, boolean>;

  private m_CurrentSize: string = "";
  
  constructor(
    private m_Observer: BreakpointObserver
  ) { 
    for (var key of this.m_ImTheArr) {
      this.m_ImTheMap.set(key, false);
    }
    
    this.m_Observer.observe(this.m_ImTheArr)
      .subscribe(result => {
        for (let key of this.m_ImTheMap.keys()) {
          var val = result.breakpoints[key];
          if (val) this.m_CurrentSize = key; // Update current key
          this.m_ImTheMap.set(key, val);
        }
      });

    console.log(this.m_ImTheMap);
  }

  // Do note, if m_ImTheArr only has 5x elements, then there will be a MAX of 5 entries in ret.
  // If you underprovide 5 elements, you can expect the values in those missing declaration to be
  // null/undefined
  public generateMappedData<T extends any[]>(...tuples: T): Map<string, T> {
    var arr: T[] = [...tuples];
    
    // Check if tuples are same type
    {
      if (arr.length != this.m_ImTheArr.length) {
        throw new Error("generateMappedData: Array should have at least 1 item.");
      }
  
      const tupleType = arr[0];
      for (const tuple of arr) {
        if (!tuple.every((val, idx) => typeof val === typeof tupleType[idx])) {
          throw new Error("generateMappedData: Tuples in array are not all of same type.");
        }
      }
    }
    
    var ret = new Map<string, T>;
    for (var i = 0; i < this.m_ImTheArr.length; ++i) {
      ret.set(this.m_ImTheArr[i], arr[i]);
    }
    return ret;
  }

  public get XS() { return this.m_ImTheMap.get(Breakpoints.XSmall); }
  public get S()  { return this.m_ImTheMap.get(Breakpoints.Small ); }
  public get M()  { return this.m_ImTheMap.get(Breakpoints.Medium); }
  public get L()  { return this.m_ImTheMap.get(Breakpoints.Large ); }
  public get XL() { return this.m_ImTheMap.get(Breakpoints.XLarge); }

  public get CurrentSize() { return this.m_CurrentSize; }
}
