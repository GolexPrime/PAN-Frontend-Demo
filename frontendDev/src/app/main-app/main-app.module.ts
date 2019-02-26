import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppComponent } from './main-app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from './components/routes/welcome/welcome.component';
import { MaterialModule } from '../shared/material-design/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { TitleComponent } from './components/routes/title/title.component';
import { AuthorComponent } from './components/routes/author/author.component';
import { CitationComponent } from './components/routes/citation/citation.component';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        MainAppRoutingModule,
        FormsModule,
        FlexLayoutModule,
        NgxJsonViewerModule
    ],
    declarations: [
        MainAppComponent,
        SideNavComponent,
        ToolbarComponent,
        WelcomeComponent,
        TitleComponent,
        AuthorComponent,
        CitationComponent
    ]
})

export class MainAppModule { }
