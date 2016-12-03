"use strict";

let Handlebars = require('hbsfy/runtime'),
	addTemplate = require("../templates/addtoy.hbs"),
	listTemplate = require("../templates/listToys.hbs"),
	viewTemplate = require("../templates/viewToy.hbs");
  // now a function because it is compiled in the background. when we call that function we will pass in the data we want to bind to our template.

//registering partials
Handlebars.registerPartial("navbar", require('../templates/partials/navBar.hbs'));





let DOM = {};


DOM.listToys = (inventory)=>{
  console.log("listTemplate(inventory)", listTemplate(inventory));
  // Grab the div we want to apppend the cards to
  let cards = $("#inventory-cards");
  let cardDiv = document.createElement("div"); 
  cardDiv.innerHTML = (listTemplate(inventory));
  console.log("cardDiv", cardDiv);
  cards.append(cardDiv);//appends our rendered html. carTemplate(inventory) returns rendered html
  

  // Now that the DOM is loaded, establish all the event listeners needed
  // eventStuff();
};

module.exports = DOM;