
/***********************************************************************************************
dummies
***********************************************************************************************/

var dummyResponse = {
    status: {
        success: true,
        'error-message': '',
        statistics: {
            received: 1550935244,
            issued: 1550935253,
            resent: 1550935260,
            completed: 1550935265
        }
    }
}

var dummyCitationResult = {
    title: 'Lala',
    id: '12345',
    authors: ['Rick', 'Morty']
};

var dummyPaperResult = {
    title: "Wubbulubbadubdub - An Anthology",
    lang: 'eng',
    year: '1984',
    authors: [
        {
            name: 'Rock Sanchez',
            org: 'C137'
        }
    ],
    issue: '001',
    publisher: 'Bird Person',
    url: ['https://www.youtube.com/watch?v=hm9gF5Gi9x4'],
    page_start: '1',
    volume: 'The first one',
    id: '8712387126376',
    keywords: ['Schwifty'],
    fos: [],
    n_citation: 1337,
    page_end: '19',
    doi: '',
    doc_type: '',
    venue: 'string',
    references: [''],
    abstract: 'Nobody exists on purpose, nobody belongs anywhere, everybody\'s going to die, come watch TV.'
}

/***********************************************************************************************
routing
***********************************************************************************************/

var routing = app => {

    app.get('/api/papers',
        (req, res) => {
            setTimeout(() => {
                if (req.query.title === 'err') {
                    let response = JSON.parse(JSON.stringify(dummyResponse));
                    response.success = false;
                    response['error-message'] = "An Error Occurred... Whatever ;-)"
                    res.status(200).send(response)
                }
                else {
                    let response = JSON.parse(JSON.stringify(dummyResponse));
                    let result = JSON.parse(JSON.stringify(dummyPaperResult));
                    result.title = req.query.title;
                    response.result = [result, dummyPaperResult];
                    res.status(200).send(response)
                }
            }, 2000);
        }
    );

    app.get('/api/citations',
        (req, res) => {
            setTimeout(() => {
                if (req.query.title === 'err') {
                    let response = JSON.parse(JSON.stringify(dummyResponse));
                    response.success = false;
                    response['error-message'] = "An Error Occurred... Whatever ;-)"
                    res.status(200).send(response)
                }
                else {
                    let response = JSON.parse(JSON.stringify(dummyResponse));
                    let result = JSON.parse(JSON.stringify(dummyCitationResult));
                    result.title = req.query.title;
                    response.result = [result, dummyCitationResult];
                    res.status(200).send(response)
                }
            }, 2000);
        }
    );
};

// =======================================================================================================
// export
// =======================================================================================================

module.exports = routing;