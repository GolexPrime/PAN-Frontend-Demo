import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class HttpWrapperService {

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor(private http: HttpClient, private snackBar: MatSnackBar, private config: ConfigService) {
    }

    /***********************************************************************************************
    public
    ***********************************************************************************************/

    getInfoByTitle(title:string) {
        const params = new HttpParams()
            .set('title', title);

        return this.http.get(this.config.getURI('papersComplete'), { params });
    }

    getAuthor(author: string, from: string, to:string) {
        const params = new HttpParams()
            .set('title', author)
            .set('from', from)
            .set('to', to);

        return this.http.get(this.config.getURI('authorsComplete'), { params });
    }

    getCitation(citation: string, type: string, limit?: string) {
        
        if(limit) {
            var params = new HttpParams()
                .set('title', citation)
                .set('type', type)
                .set('limit', limit);
        }
        else {
            var params = new HttpParams()
                .set('title', citation)
                .set('type', type);
        }

        return this.http.get(this.config.getURI('citationsComplete'), { params });
    }
}