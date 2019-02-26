import { Component, OnInit } from '@angular/core';
import { QueryResultCitation } from 'src/app/interfaces/query-results';
import { HttpWrapperService } from 'src/app/core/http-wrapper.service';
import { HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/core/config.service';
import { QueryResult } from 'src/app/classes/query-result';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-citation',
    templateUrl: './citation.component.html',
    styleUrls: ['./citation.component.scss']
})
export class CitationComponent implements OnInit {

    value: string;
    uriString: string;
    loading: boolean;
    result: QueryResultCitation;
    papersURI: string;
    expansion: boolean;
    firstRun: boolean;
    citedBy: boolean;
    limit: string;

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor(private http: HttpWrapperService, private config: ConfigService, private snackBar: MatSnackBar) {
        this.loading = false;
        this.firstRun = false;
        this.result = new QueryResult();
        this.expansion = false;
        this.value = '';
        this.citedBy = false;
        this.limit = '';
    }

    /***********************************************************************************************
    public
    ***********************************************************************************************/

    ngOnInit() {
        this.papersURI = this.config.getURI('citationsComplete');
    }

    updateURI() {
        if (this.limit) {
            var params = new HttpParams()
                .set('title', this.value)
                .set('type', this.citedBy ? 'cited_by' : 'cited')
                .set('limit', this.limit);
        }
        else {
            var params = new HttpParams()
                .set('title', this.value)
                .set('type', this.citedBy ? 'cited_by' : 'cited');
        }

        this.uriString = params.toString();
    }

    onSubmit() {
        if (this.value === '') {
            this.snackBar.open('Error - Invalid Query', null, {
                panelClass: ['snack-bar-color-error'],
                duration: 1500
            });
        }
        else {
            this.firstRun = true;
            this.result = new QueryResult();
            this.loading = true;

            this.http.getCitation(this.value, this.citedBy ? 'cited_by' : 'cited', this.limit || null)
                .subscribe(
                    (data: QueryResultCitation) => {
                        this.result = data;
                        this.loading = false;
                    },
                    err => {
                        this.loading = false;
                        if (!this.result['error-message']) this.firstRun = false;
                        
                        this.snackBar.open('Error', null, {
                            panelClass: ['snack-bar-color-error'],
                            duration: 1500
                        });

                        console.log(err);
                    }
                );
        }
    }
}
