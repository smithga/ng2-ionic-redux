import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'page-project',
    templateUrl: 'project.html',
    styleUrls: ['project.scss']
})
export class ProjectPage {
    @Input() projects;
    @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy() {

    }

}
