
// Services
import { DataService } from './services/DataService';


// Controllers
import { MainController } from './controllers/MainController';
import { AboutController } from './controllers/AboutController';


const Core = angular.module('Core', []);

Core.service('Core.DataService', DataService);

Core.controller('Core.MainController', MainController)
    .controller('Core.AboutController', AboutController);


