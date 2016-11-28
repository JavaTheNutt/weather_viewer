/**
 * Created by joewe on 26/11/2016.
 */
/// <///<reference path="../../node_modules/@types/jquery/index.d.ts"/>
/**
 * This class will be used to get data from the backend API.
 */
export class GetFromApi {

	private url : string = 'http:my.example.org';

	constructor(private testString: string) {

	}

	getResponse(): string {
		return this.testString;
	}
}


