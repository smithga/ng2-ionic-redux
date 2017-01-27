import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cwx-basic-menu',
    templateUrl: 'basic-menu.component.html'
})
export class BasicMenuComponent implements OnInit {
    @Input() items: Array<any>;
    @Output() onNavigate: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    navigate(item) {
        this.onNavigate.emit(item);
    }

}
