import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalUiService } from '../core/global-ui.service';

@Component({
    selector: 'app-main-app',
    templateUrl: './main-app.component.html',
    styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor(private router: Router, private ui: GlobalUiService) {
    }

    /***********************************************************************************************
    public
    ***********************************************************************************************/

    ngOnInit() {
        this.router.events
            .subscribe(val => {
                if (!(val instanceof NavigationEnd)) return;
                let selector = document.querySelector('.mat-drawer-content');
                if (selector) document.querySelector('.mat-drawer-content').scroll({ top: 0, left: 0, behavior: 'smooth' });
            });
    }
}
