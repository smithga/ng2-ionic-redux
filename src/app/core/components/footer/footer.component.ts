import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

// Store
import { Store } from '@ngrx/store';
import { AppState } from '../../app.store';
import { AuthActions } from '../../auth/store';

@Component({
    selector: 'cwx-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() { }

}
