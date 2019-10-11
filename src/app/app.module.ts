import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpDataService } from './services/http-data.service';
import { CreateMeetingPage } from './create-meeting/create-meeting.page';
import { CreateMeetingService } from './services/create-meeting.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CreateMeetingPage],
  entryComponents: [CreateMeetingPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule
  ],
  providers: [
    CreateMeetingService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
