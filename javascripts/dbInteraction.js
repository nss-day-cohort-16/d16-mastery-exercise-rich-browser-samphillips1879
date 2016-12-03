"use strict";

let fb = require("./fb-config");
let db = {};

db.getToys = ()=>{
	return new Promise((resolve,reject)=>{
		$.ajax({
			url: `https://toyshopquiz.firebaseio.com/.json`
		}).done((fbToys)=>{
			console.log("fbToys", fbToys);
			resolve(fbToys);
		}).fail((error)=>{
			reject(error);
		});
	});
};



// db.test = ()=>{
// 	console.log("fb", fb);
// };

module.exports = db;