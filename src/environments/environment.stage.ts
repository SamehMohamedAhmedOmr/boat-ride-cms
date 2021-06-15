export const environment = {
	production: false,
	apisVersion: "v1" ,
	baseUrl: 'http://163.172.8.204:8017',
	debug: window["env"]["debug"] || false,

	url : function url (version: string = null) {
		return environment.baseUrl + '/api/' + ((version) ? version+'/' : '');
	}

};
