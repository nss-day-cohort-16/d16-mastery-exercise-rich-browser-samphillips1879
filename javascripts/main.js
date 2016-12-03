"use strict";

//Customized Modules
let DOM = require("./domHandler.js"),
	db = require("./dbInteraction.js");

//Helpers
// Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);



db.getToys()
	.then((toysArray)=>{
		console.log("toysArray", toysArray);
		DOM.listToys(toysArray);
	});
// db.test();


// The Promises Way puts the callback responsibility on the caller
// carInventory.loadInventory()
// .then(
//   function (inventoryFromLoadInventoryResolve) {
//     populatePage(inventoryFromLoadInventoryResolve);
//     console.log("carPromise", inventoryFromLoadInventoryResolve);
//   },
//   function (reason) {
//     console.error('Something went wrong', reason);
//   });

