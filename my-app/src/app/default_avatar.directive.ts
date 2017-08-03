import { Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({ selector: '[avatar]' })

export class DefaultAvatarDirective {
  avatar: string
  constructor(private el: ElementRef) {

  }
@Input('avatar') defaultAvatar: string;
  ngOnInit() {
    if(!this.defaultAvatar){
    this.el.nativeElement.innerHTML = '<img src="http://www.jujournals.net.in/img/user.jpg" alt="avatar" class="img-circle">';
    }
  }
}