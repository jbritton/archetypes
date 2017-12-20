import angular from 'angular';
import ExampleComponent from './example.component.js';
import ExampleService from './example.service.js';

const module = angular.module('example.app', [])
	.service(ExampleService.name, ExampleService)
	.component(ExampleComponent.selector, ExampleComponent);

export default module;

