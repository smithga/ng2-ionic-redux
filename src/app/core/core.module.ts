import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
// Services
import { ConfigService } from './shared/config.service';
import { StoreBase } from './shared/store-base';
// Pages
import { HomePage } from './pages/home/home';
import { Page2Page } from './pages/page2/page2';
// Components
import { BasicMenuComponent } from './components/basic-menu/basic-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule
    ],
    declarations: [
        HomePage,
        Page2Page,
        BasicMenuComponent,
        FooterComponent
    ],
    exports: [
        BasicMenuComponent,
        FooterComponent
    ],
    providers: [
        ConfigService,
        StoreBase
    ],
    entryComponents: [
        HomePage,
        Page2Page
    ]
})
export class CoreModule { }