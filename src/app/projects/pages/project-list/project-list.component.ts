import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'page-project-list',
    templateUrl: 'project-list.html',
    styleUrls: ['project-list.scss']
})
export class ProjectListPage {
    @Input() projects;
    @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy() {

    }

}
