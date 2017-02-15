import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
// Modules
import { CoreModule } from '../core/core.module';
// Services
import { ProjectService } from './shared/project.service';
import { ProjectStore } from './store';
import { ProjectEffects } from './store/project.effects';
// Pages
import { ProjectsPage } from './pages/projects/projects';

@NgModule({
    imports: [ 
        IonicModule,
        EffectsModule.run(ProjectEffects),
        CoreModule
    ],
    declarations: [ 
        ProjectsPage
     ],
     providers: [
         ProjectStore,
         ProjectService
     ],
     entryComponents: [
        ProjectsPage
     ]
})
export class ProjectsModule { }
