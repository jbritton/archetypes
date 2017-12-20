import hello from './hello';

export default class ExampleService {
	static get $inject(){
		return [ '$http' ];
	}

	static get name(){
		return 'ExampleService';
	}

	constructor($http){
		Object.assign(this, { $http });
	}

	sayHello(){
		return hello();
	}
}