import { Directive, ElementRef ,HostListener, Input, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appMarketDirection]'
})
export class MarketDirectionDirective {
  @Input('appMarketDirection') public data: any;

  constructor(private el: ElementRef) { 
   
  }

  
  @HostListener('change')  ngOnChanges( ) {
   // console.log('inputTextFilter', this.data);
    
    if(this.data && this.data > 0 ){
      this.el.nativeElement.style.borderColor = 'green';
      this.el.nativeElement.style.transform = 'rotate(-135deg)';
      
      this.el.nativeElement.style.margin = '5px 14px 0px 0px';
    } else if (this.data && this.data < 0 ){
      this.el.nativeElement.style.borderColor = 'red';
      this.el.nativeElement.style.transform = 'rotate(45deg)';
      
      this.el.nativeElement.style.margin = '-5px 14px 0px 0px';
    } else {
      this.el.nativeElement.style.borderColor = 'black';
      this.el.nativeElement.style.transform = 'rotate(45deg)';
      this.el.nativeElement.style.margin = '-5px 14px 0px 0px';
    }
}

  
  
  


}
