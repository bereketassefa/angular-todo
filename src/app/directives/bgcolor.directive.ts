import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective   {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = "red"
  }
  @HostListener('click')
  log(){
    console.log("button clicked")
  }

}
