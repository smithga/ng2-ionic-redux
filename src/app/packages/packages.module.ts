import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
// Modules
import { CoreModule } from '../core/core.module';
//Store
import { PackageStore } from './store';
import { PackageEffects } from './store/package.effects';
import { PackageActions } from './store/package.actions';
// Services
import { PackageService } from './shared/package.service';
// Pages
// import { LoginPage } from './pages/login/login';

@NgModule({
    imports: [
        BrowserModule,
        EffectsModule.run(PackageEffects),
        CoreModule,
        IonicModule
    ],
    declarations: [
        // LoginPage
    ],
    providers: [
        PackageStore,
        PackageService,
        PackageActions
    ],
    entryComponents: [
        // LoginPage
    ]
})
export class PackagesModule { }