import { Component } from '@angular/core';
import {TickerService } from './ticker/ticker.service';

import { tap,filter,map } from 'rxjs/operators';
import { WebsocketService } from "./websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WebsocketService, TickerService]
})
export class AppComponent {
  title = '1';

  private message = {
    command: "subscribe",
    channel: 1002,
  }
  constructor(private tickerserivice : TickerService){
    tickerserivice.messages.subscribe (msg =>{
      console.log("response fom sever"+ JSON.stringify(msg));
    })
  }



  ngOnInit(){
    this.tickerserivice.messages.next(this.message);
  }
  sendMsg() {
    console.log("sent from clinet");
    this.tickerserivice.messages.next(this.message);
  
  }

}
