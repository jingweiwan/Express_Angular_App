import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {AppService} from './app.service';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailComponent } from './detail/detail.component';
import { DetailTVComponent } from './detail-tv/detail-tv.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import { ListComponent } from './list/list.component';
import { MobilecarouselComponent } from './mobilecarousel/mobilecarousel.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CarouselComponent,
    DetailComponent,
    DetailTVComponent,
    ListComponent,
    MobilecarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
