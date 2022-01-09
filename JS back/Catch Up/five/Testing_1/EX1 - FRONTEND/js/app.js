/**
 * @param {*} event
 * @description: This function use to change border color and border radius of box
 * @event name : change 
 */


function getValue(){
    const getcolor = document.querySelector("#color").value;
    console.log(color)
    const raduis = document.querySelector("#raduis").value;
    console.log(raduis)
    
    box.style.border = "3px solid "+ getcolor;
    box.style.borderRadius = raduis + "px";

    
}

const box = document.querySelector(".box");
document.addEventListener("change", getValue);