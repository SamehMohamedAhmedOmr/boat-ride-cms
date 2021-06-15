export interface Admin {
	message : string,
	body: {
		id:number,
		email: string ,
		name: string,
		token: string,
		expire_at: string,
	}
}
