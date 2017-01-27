import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
// Services
import { ConfigService } from './shared/config.service';
import { StoreBase } from './shared/store-base';
// Pages
import { HomePage } from './pages/home/home';
// Components
import { BasicMenuComponent } from './components/basic-menu/basic-menu.component';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule
    ],
    declarations: [
        HomePage,
        BasicMenuComponent
    ],
    exports: [
        BasicMenuComponent
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