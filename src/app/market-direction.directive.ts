import { Directive, ElementRef ,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMarketDirection]'
})
export class MarketDirectionDirective {

  constructor(private el: ElementRef) { }

  @Input('appMarketDirection') highlightColor: string;

  
  ngAfterViewInit(): void {
    console.log('Values:' + this.highlightColor);
 }
  private highlight(highlightColor: string) {
    this.el.nativeElement.style.backgroundColor = highlightColor;
  }

}
