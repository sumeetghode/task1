import { Directive , HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appExample1]'
})
export class Example1Directive {

  constructor() { }

  @HostBinding('class.active') activeVariable
  @HostListener('mouseover') myHover(){
    this.activeVariable=true;
  }


}
