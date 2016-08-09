import 'angular';
import 'angular-route';

// Config
import { routes } from './config/Routes';

// Modules
import './modules/Core';

const app = angular.module('myapp', ['ngRoute', 'Core']);

// Config
app.config(['$routeProvider', routes]);


angular.bootstrap(document, ['myapp']);