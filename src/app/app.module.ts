import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { NgxSpinnerModule } from "ngx-spinner";  
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
    NgxSpinnerModule,
    FlexLayoutModule
  ],
  providers: [WebsocketService , TickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
