import { Component, OnInit } from '@angular/core';
import {TickerService } from './ticker/ticker.service';
import { NgxSpinnerService } from "ngx-spinner"; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: any;
  public serviceEnableCheck;
  private message = {
    command: "subscribe",
    channel: 1002,
  }
  constructor(private tickerserivice : TickerService, private SpinnerService: NgxSpinnerService){
    tickerserivice.messages.subscribe ((msg:any) =>{
      if(msg != null && msg.length > 0){
        this.title = msg[0][4];
        //this.SpinnerService.hide();  
         this.serviceEnableCheck = true;
      }
    })
  }


  ngOnInit(){
    this.SpinnerService.show(); 
    this.serviceEnableCheck = false; 
    setTimeout(() =>{
      this.bitServiceAutoConnect()
    }, 2500);
    
  }

  bitServiceAutoConnect() {
    this.tickerserivice.messages.next(this.message);
  }

}
