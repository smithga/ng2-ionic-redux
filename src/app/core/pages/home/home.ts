import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private authenticated$;

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>
  ) {  }


}
