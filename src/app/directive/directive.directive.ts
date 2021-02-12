import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(public elReff: ElementRef) {
    var eleRef = this.elReff.nativeElement;
    eleRef.addEventListener("click", (event: any) => {
      let menuReff = document.querySelectorAll('.menu > a');
      for (let i = 0; i < menuReff.length; i++) {
        menuReff[i].classList.remove('menuActive');
      }
      event.target.classList.add('menuActive')
    })
  }

}
