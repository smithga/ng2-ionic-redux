import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { HomePage } from '../../../core/pages/home/home';
import { AuthStore } from '../../store';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store';
import { AuthActions } from '../../store/auth.actions';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnDestroy {
  private loginGroup: any;

  private processing$: Subscription;
  private processingMessage$: Subscription;
  private authenticated$: Subscription;

  private loadingDialog;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingController: LoadingController,
    private store: Store<AppState>,
    private authActions: AuthActions,
    private authStore: AuthStore
  ) {
    this.loginGroup = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });

    this.processing$ = this.authStore.store.select(this.authStore.selectors.getProcessing).skip(1).subscribe(processing => {
      console.log(processing);
      if (processing) {
        this.loadingDialog = this.loadingController.create({ content: 'Signing In...' });
        this.loadingDialog.present();
      } else {
        this.loadingDialog.dismiss();
      }
    });

    this.processingMessage$ = this.authStore.store.select(this.authStore.selectors.getProcessingMessage).subscribe(processingMessage => {
      if (processingMessage) {
        console.log(processingMessage);
        let error = this.alertCtrl.create({
          title: 'Login Error',
          message: processingMessage,
          buttons: ['Ok']
        });
        error.present();
      }
    });

    this.authenticated$ = this.authStore.store.select(this.authStore.selectors.getAuthenticated).subscribe(authenticated => {
      if (authenticated) {
        this.navCtrl.setRoot(HomePage);
      }
    });

  }

  ngOnDestroy() {
    this.processing$.unsubscribe();
    this.processingMessage$.unsubscribe();
    this.authenticated$.unsubscribe();
  }

  ionViewDidLoad() {

  }

  login() {
    this.store.dispatch(this.authActions.login(this.loginGroup.value));
  }

}
