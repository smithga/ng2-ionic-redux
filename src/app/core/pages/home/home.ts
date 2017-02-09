import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store';
// Pages
import { Page2Page } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private items = [];
  // private authenticated$;

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>,
    private platform: Platform
  ) {

    this.items = [
      {
        'id': 'PAGE2',
        'title': 'Page 2',
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
      case 'PAGE2':
        this.navCtrl.push(Page2Page)
        break;
      case 'EXIT':
        this.platform.exitApp();
        break;
    }
  }

}
