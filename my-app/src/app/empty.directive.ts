import { Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({ selector: '[empty]' })

export class EmptyDirective {
  constructor(private el: ElementRef) {

  }
@Input('empty') emptyContent: string;
  ngOnInit() {
    if(!this.emptyContent){
    this.el.nativeElement.innerHTML = 'empty content';
    }
  }
}