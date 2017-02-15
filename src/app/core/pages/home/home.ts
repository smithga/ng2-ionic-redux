import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store';
// Pages
import { ProjectsPage } from '../../../projects/pages/projects/projects';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private items = [];

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>,
    private platform: Platform
  ) {

    this.items = [
      {
        'id': 'PROJECTS',
        'title': 'Projects',
        'icon': 'musical-note',
        'description': 'List all my projects'
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
      case 'PROJECTS':
        this.navCtrl.push(ProjectsPage)
        break;
      case 'EXIT':
        this.platform.exitApp();
        break;
    }
  }

}
