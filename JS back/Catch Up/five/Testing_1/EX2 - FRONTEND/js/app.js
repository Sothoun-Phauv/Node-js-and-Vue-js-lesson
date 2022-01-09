/**
 * Given the number (integer), return the emoji (string), following the rules
 * @param  number a number (1, 2, 3 or 4)
 * @return the emoji, as a string
 */
  function displayEmojis(emo){
    let emoji = ""
    if (emo == 1){
      emoji = "😊";
    }else if(emo ==2){
      emoji = "🥰";
    }else if(emo==3){
      emoji ="😂";
    }else if (emo==4){
      emoji ="🥱"
    }
    return emoji;
  }
   // return emoji = "😊"
   // return emoji = "🥰";
   // returnemoji = "😂";
   // returnemoji = "🥱";

  function emojis(){
    let count = "";
    for(let item of show) {
      if (item.checked){
        count = item.value;
          }
      }
      message.textContent = displayEmojis(count);
  }
const show = document.querySelectorAll("input");
document.addEventListener("change", emojis);
let message = document.querySelector("#message")
