export const environment = {
	production: false,
	apisVersion: "v1" ,
	baseUrl: 'http://boats-ride-backend.sameh.store',
	debug: window["env"]["debug"] || false,

	url : function url (version: string = null) {
		return environment.baseUrl + '/api/' + ((version) ? version+'/' : '');
	}

};
