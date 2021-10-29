export const environment = {
	production: false,
	apisVersion: "v1" ,
	baseUrl: 'https://backend.boatsride.com',
	debug: window["env"]["debug"] || false,

	url : function url (version: string = null) {
		return environment.baseUrl + '/api/' + ((version) ? version+'/' : '');
	}

};
