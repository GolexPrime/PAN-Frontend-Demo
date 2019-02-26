export class QueryResult {
    status: {
        success: boolean;
        'error-message': string;
        statistics: {
            received: number;
            issued: number;
            resent: number;
            completed: number;
        }
    }
}
