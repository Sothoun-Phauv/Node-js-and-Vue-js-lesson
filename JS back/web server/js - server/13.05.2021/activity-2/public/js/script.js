// ----------------------------------------------------------------------------
// FUNCTIONS

// const { response } = require("express");

// ----------------------------------------------------------------------------
const GET_ITEMS_REQ = "http://192.168.88.17:5000/value";

function refreshAction() {
	
	// Request a GET on  /value path and write the result on  the <P> message
	// TODO
	axios.get(GET_ITEMS_REQ).then((response)=>{
		let value = response.data;
		message.textContent =value;
	})
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let message = document.getElementById("message");
let refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refreshAction);
