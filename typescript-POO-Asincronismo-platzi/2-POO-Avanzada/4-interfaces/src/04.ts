interface Driver {
	database : string,
	password : string,
	port : number,
	
	connect(): void;
	disconnect(): void;
	isConnected(name: string): boolean;
}
/*
const drive : Drive = {
	database : '',
	password : '',
	port : 23
}
*/
class PostgresDriver implements Driver{
	constructor(
		public database : string,
		public password : string,
		public port : number,
		private host : number
	)
	
	connect(): void {
		//code
	}
	disconnect(): void {
		//code
	}
	isConnected(name: string): boolean {
		//code
	}
}

class OracleDriver implements Driver{
	constructor(
		public database : string,
		public password : string,
		public port : number
	)
	
	connect(): void {
		//code
	}
	disconnect(): void {
		//code
	}
	isConnected(name: string): boolean {
		//code
	}
}
