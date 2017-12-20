import angular from 'angular';
import './index.scss';
import appModule from './example.app.js';

// bootstrap the application
const rootElement = document.getElementById('root');
angular.bootstrap(rootElement, [ appModule.name ]);