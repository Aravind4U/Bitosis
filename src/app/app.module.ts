import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TickerComponent } from './ticker/ticker.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { WebsocketService } from './websocket.service';
import { TickerService }  from './ticker/ticker.service'
  import { from } from 'rxjs';
import { MarketDirectionDirective } from './market-direction.directive';
@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    MarketDirectionDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [WebsocketService , TickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
