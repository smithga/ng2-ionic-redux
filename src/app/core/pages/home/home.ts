import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private items = [];
  private authenticated$;

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>,
    private platform: Platform
  ) {

    this.items = [
      {
        'id': 'MENU1',
        'title': 'Menu Item 1',
        'icon': 'musical-note',
        'description': 'Menu item 1 description'
      },
      {
        'id': 'EXIT',
        'title': 'Exit',
        'icon': 'exit',
        'description': 'Exit the application.'
      }
    ];
  }

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
