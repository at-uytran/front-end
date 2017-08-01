import { Component, AfterContentInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterContentInit{
 helloName: string;
  node: string;
  constructor(private elementRef:  ElementRef) {
    this.helloName = "Uy";
  }

    ngAfterContentInit(){
    const tmp = document.createElement('div');
    const element = this.elementRef.nativeElement.cloneNode(true);
    tmp.appendChild(element);
    this.node = tmp.innerHTML;
  }
}
