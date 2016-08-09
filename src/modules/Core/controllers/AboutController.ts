
import { IDataService } from '../services/DataService';

export class AboutController {

    private about: Array<any> = null;

    static $inject = ['Core.DataService'];

    constructor(private dataService: IDataService) {
        this.onInit();
    }

    onInit() {
      this.dataService.getAbout().then((response) => {
          this.about = response.data;
      });
    }
}