import { Component, OnInit } from '@angular/core';
import { HttpWrapperService } from 'src/app/core/http-wrapper.service';
import { HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/core/config.service';
import { QueryResultPaper } from 'src/app/interfaces/query-results';
import { QueryResult } from 'src/app/classes/query-result';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

    value: string;
    uriString: string;
    loading: boolean;
    result: QueryResultPaper;
    displayedColumns: string[];
    papersURI: string;
    expansion: boolean;
    firstRun: boolean;
    startYear: string;
    endYear: string;

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor(private http: HttpWrapperService, private config: ConfigService, private snackBar: MatSnackBar) {
        this.loading = false;
        this.firstRun = false;
        this.result = new QueryResult();
        this.displayedColumns = ['name'];
        this.expansion = false;
        this.value = '';
        this.startYear = '';
        this.endYear = '';
        this.uriString = '';
    }

    /***********************************************************************************************
    public
    ***********************************************************************************************/

    ngOnInit() {
        this.papersURI = this.config.getURI('authorsComplete');
    }

    updateURI() {
        const params = new HttpParams()
            .set('title', this.value)
            .set('from', this.startYear)
            .set('to', this.endYear);

        this.uriString = params.toString();
    }

    onSubmit() {
        if (this.value === '' || this.startYear === '' || this.endYear === '') {
            this.snackBar.open('Error - Invalid Query', null, {
                panelClass: ['snack-bar-color-error'],
                duration: 1500
            });
        }
        else {
            this.firstRun = true;
            this.result = new QueryResult();
            this.loading = true;

            this.http.getAuthor(this.value, this.startYear, this.endYear)
                .subscribe(
                    (data: QueryResultPaper) => {
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
