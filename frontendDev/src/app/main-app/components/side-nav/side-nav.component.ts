import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { GlobalUiService } from '../../../core/global-ui.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    /***********************************************************************************************
    members
    ***********************************************************************************************/

    @Output() showMiniMenuButton: boolean;

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor(private ui: GlobalUiService, private router: Router) {
        this.showMiniMenuButton = false;
    }

    /***********************************************************************************************
    watchers
    ***********************************************************************************************/

    @ViewChild('sidenav') sidenav;

    /***********************************************************************************************
    public
    ***********************************************************************************************/

    ngOnInit() {
        this.router.events.subscribe(() => {
            if (this.isScreenSmall()) this.sidenav.close();
        });
    };

    onClose() {
        if (!this.isScreenSmall()) this.showMiniMenuButton = !this.isScreenSmall();
    };

    onOpen() {
        this.showMiniMenuButton = false;
    };

    openMenu() {
        this.sidenav.open();
        this.showMiniMenuButton = false;
    };

    closeMenu() {
        this.sidenav.close();
        this.showMiniMenuButton = true;
    };

    isScreenSmall(): boolean {
        return this.ui.isScreenSmall();
    };
}