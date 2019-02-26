import { Paper } from "./paper";
import { Citation } from "./citation";

export interface QueryResult {
    status: {
        success: boolean,
        'error-message': string,
        statistics: {
            received: number,
            issued: number,
            resent: number,
            completed: number
        }
    }
}


export interface QueryResultPaper extends QueryResult {
    result?: Paper[]
}

export interface QueryResultCitation extends QueryResult {
    result?: Citation[]
}
