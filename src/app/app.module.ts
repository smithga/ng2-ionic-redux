import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule  } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Modules
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
// Other
import { MyApp } from './app.component';
import { AppReducer } from './app-store';
// Pages
// import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore(AppReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    CoreModule,
    AuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
