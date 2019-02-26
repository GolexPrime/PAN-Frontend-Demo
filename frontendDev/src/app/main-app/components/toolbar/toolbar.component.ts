import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalUiService } from '../../../core/global-ui.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    /***********************************************************************************************
    members
    ***********************************************************************************************/

    @Output() toggleSidenav = new EventEmitter<void>();
    headerTitle: string;

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor(private ui: GlobalUiService) {
        this.headerTitle = 'PAN Search Engine Demo';
    }

    /***********************************************************************************************
    public
    ***********************************************************************************************/

    ngOnInit() {

    }
}