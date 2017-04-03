import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {
  private items = [];
  // private authenticated$;

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>,
    private platform: Platform
  ) {  }

  navigate(item) {
    switch (item.id) {
      case 'JOIN_PARTY':
        // this.navCtrl.push(JoinPartyComponent)
        break;
      case 'MY_PARTIES':
        break;
      case 'OPTIONS':
        // this.nav.push(OptionsMainMenuComponent);
        break;
      case 'EXIT':
        this.platform.exitApp();
        break;
    }
  }

}
