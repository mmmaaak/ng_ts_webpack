
export interface IDataService {
    getData(): ng.IHttpPromise<any>,
    getAbout(): ng.IHttpPromise<Array<any>>
}

export class DataService implements  IDataService {

    static $inject = ['$http'];

    constructor(private httpService: ng.IHttpService) {

    }

    getData(): ng.IHttpPromise<any> {
        return this.httpService.get('/data.json');
    }

    getAbout():ng.IHttpPromise<Array<any>> {
        return this.httpService.get('/about.json');
    }
}


