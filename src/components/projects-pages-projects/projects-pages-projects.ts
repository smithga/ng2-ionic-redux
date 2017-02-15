import { Component } from '@angular/core';

/*
  Generated class for the ProjectsPagesProjects component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'projects-pages-projects',
  templateUrl: 'projects-pages-projects.html'
})
export class ProjectsPagesProjectsComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectsPagesProjects Component');
    this.text = 'Hello World';
  }

}
