"use strict";
const GetFromApi_1 = require("./GetFromApi");
$(document).ready(function () {
    let getFromApi = new GetFromApi_1.GetFromApi("this is a test");
    alert(getFromApi.getResponse());
});
//# sourceMappingURL=index.js.map