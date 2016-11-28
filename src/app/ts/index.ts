import {GetFromApi} from "./GetFromApi";
//declare var require : any;

require('../styles/index.scss');

/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
$(document).ready(function () {
	let getFromApi = new GetFromApi("this is a test part three");
	$('body').append(`
<div class="container">
	<h1 class="text-center">` + getFromApi.getResponse() + `</h1>
	<button class="btn btn-success" type="button" id="testBtn"><i class="fa fa-random"></i>Click Me</button>
</div>`
	);
	$('#testBtn').click(() => {alert('test')});
});
