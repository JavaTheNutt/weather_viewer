require('../styles/index.scss');
let viewLoader = require('./service/viewLoader');
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
$(document).ready(function () {
//fixme: noting showing when button clicked
$('#homeBtn').click(function () {
	viewLoader.appendHome($('#viewContainer'));
})

});
