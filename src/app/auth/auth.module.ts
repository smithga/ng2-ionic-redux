import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
// Modules
import { CoreModule } from '../core/core.module';
//Store
import { AuthStore } from './store';
import { AuthEffects } from './store/auth.effects';
import { AuthActions } from './store/auth.actions';
// Services
import { AuthService } from './shared/auth.service';
// Pages
import { LoginPage } from './pages/login/login';

@NgModule({
    imports: [
        BrowserModule,
        EffectsModule.run(AuthEffects),
        CoreModule,
        IonicModule
    ],
    declarations: [
        LoginPage
    ],
    providers: [
        AuthStore,
        AuthService,
        AuthActions
    ],
    entryComponents: [
        LoginPage
    ]
})
export class AuthModule { }