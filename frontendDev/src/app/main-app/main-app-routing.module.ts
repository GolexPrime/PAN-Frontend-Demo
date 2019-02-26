import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app.component';
import { WelcomeComponent } from './components/routes/welcome/welcome.component';
import { TitleComponent } from './components/routes/title/title.component';
import { AuthorComponent } from './components/routes/author/author.component';
import { CitationComponent } from './components/routes/citation/citation.component';

const routes: Routes = [
    { 
        path: '', 
        component: MainAppComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'title',
                component: TitleComponent
            },
            {
                path: 'author',
                component: AuthorComponent
            },
            {
                path: 'citation',
                component: CitationComponent
            },
            { 
                path: '**', 
                redirectTo: 'welcome',
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
