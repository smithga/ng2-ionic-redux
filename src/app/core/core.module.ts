import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
// Services
import { ConfigService } from './shared/config.service';
import { StoreBase } from './shared/store-base';
// Pages
import { HomePage } from './pages/home/home';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule
    ],
    declarations: [
        HomePage
    ],
    providers: [
        ConfigService,
        StoreBase
    ],
    entryComponents: [
        HomePage
    ]
})
export class CoreModule { }