
import { IDataService } from '../services/DataService';

export class MainController {

    static $inject = ['Core.DataService'];

    private title: string = '';
    private info: any = null;

    constructor(private dataService: IDataService) {
        this.title = 'Angular Typescript Test';

        this.onInit();
    }

    private onInit() {
        this.dataService.getData().then((response) => {
           this.info = response.data;
        });
    }
}