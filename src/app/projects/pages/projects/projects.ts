import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
// Store
import { AppState } from '../../../app-store';
import { ProjectStore } from '../../store';
import { AuthActions } from '../../store/auth.actions';
// Pages
import { HomePage } from '../../../core/pages/home/home';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage implements OnInit, OnDestroy {
  private items = [];
  private $items;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<AppState>,
    private projectStore: ProjectStore
  ) {}

  ngOnInit() {
    this.projectStore.store.dispatch(this.projectStore.actions.loadAll());
    this.$items = this.projectStore.store.select(this.projectStore.selectors.getEntities);

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

  ngOnDestroy() {

  }

  navigate(item) {
    // switch (item.id) {
    //   case 'PAGE2':
    //     this.navCtrl.push(Page2Page)
    //     break;
    //   case 'EXIT':
    //     this.platform.exitApp();
    //     break;
    // }
  }

}
