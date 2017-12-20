const ExampleHtml = `
	<div>
		<span>{{vm.label}}</span>
	</div>
`;

class ExampleCtrl {
	static get $inject(){
		return [ '$log', 'ExampleService' ];
	}

	constructor($log, ExampleService){
		this.service = ExampleService;
		this.log = $log;
		this.label = '';
		this.users = [];
	}

	$onInit(){
		this.log.info('initializing...');
		this.label = this.service.sayHello();
	}
}

const ExampleComponent = {
	selector: 'example',
	bindings: {},
	controller: ExampleCtrl,
	controllerAs: 'vm',
	template: ExampleHtml
};

export default ExampleComponent;