function displayEmojis(arr){
    let result = "";
    const output= document.querySelector('p');
    for (let emoji of arr){
        result+= emoji + " ";
    }
    output.textContent = result;
}


function changeNumberToEmoji(arr){
     let emojies = [];
    for (let number of arr){
        if (number===1){
            emojies.push('😇');
        }else if(number ===2){
            emojies.push('🤬');
        }else if(number ===3){
            emojies.push('😷');
        }
    }
    displayEmojis(emojies);
 }

function getValue(){
    let values = [];
    for (let item of checkbox){
        if (item.checked){
            values.push(parseInt(item.value));
        }
    }
    changeNumberToEmoji(values);
}

const checkbox= document.querySelectorAll("input");
document.addEventListener('change',getValue);