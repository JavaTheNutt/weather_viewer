import {GetFromApi} from "./GetFromApi";

/**
 * Created by joewe on 26/11/2016.
 */
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
$(document).ready(function () {
	let getFromApi = new GetFromApi("this is a test");
	alert(getFromApi.getResponse());
});
