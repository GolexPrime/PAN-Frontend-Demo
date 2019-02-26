import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    private baseURI: string;
    private papersURI: string;
    private authorsURI: string;
    private citationsURI: string;

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor() {
        this.baseURI = '/api';
        this.papersURI = '/papers';
        this.authorsURI = '/papers';
        this.citationsURI = '/citations';
    }

    /***********************************************************************************************
    private
    ***********************************************************************************************/

    getURI(type:string): string {
        switch (type) {
            case 'base':
                return this.baseURI;

            case 'papers':
                return this.authorsURI;

            case 'authors':
                return this.baseURI;

            case 'citations':
                return this.citationsURI;
            
            case 'papersComplete':
                return this.baseURI + this.papersURI;
            
            case 'authorsComplete':
                return this.baseURI + this.authorsURI;
            
            case 'citationsComplete':
                return this.baseURI + this.citationsURI;
        
            default:
                return this.baseURI;
        }
    }

}


