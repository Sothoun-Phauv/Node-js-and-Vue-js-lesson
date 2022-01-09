
function displayResult(res){
    console.log(res.data.hits);
    const items = res.data.hits;

    for (let item of items){
        console.log(item)
        const contain = document.createElement("div");
        contain.classList.add("row");
        
        const con_3 = document.createElement("div");
        con_3.classList.add("col-3");

        const col_6 = document.createElement("div");
        col_6.classList.add("col-6");

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("mt-4");

        const card_body = document.createElement("div");
        card_body.classList.add("class-body");

        const img = document.createElement("img")
        img.classList.add("img-fluid");
        img.src = item.largeImageURL;
        

        card_body.appendChild(img);
        card.appendChild(card_body);

        const card_footer = document.createElement("div");
        card_footer.classList.add("card-footer");
        card_footer.classList.add("d-flex");
        card_footer.classList.add("justify-content-between");
        card_footer.classList.add("align-items-center");

        const like = document.createElement("span");
        like.textContent = "Likes: " + item.likes;

        const comments = document.createElement("span");
        comments.textContent = "Comments: " + item.comments;

        const view = document.createElement("span");
        view.textContent = "Views: " + item.views;

        card_footer.appendChild(like);
        card_footer.appendChild(comments);
        card_footer.appendChild(view);

        card.appendChild(card_footer)

        col_6.appendChild(card);

        contain.appendChild(con_3);
        contain.appendChild(col_6);

        container.appendChild(contain);
    };

}

function displayError(error){
    confirm("Cannot found axios!!!");
}

// URL 
const key = "14001068-da63091f2a2cb98e1d7cc1d82";
const url = "https://pixabay.com/api/?key="+ key +"&q=food&image_type=photo&pretty=true";

const container = document.querySelector(".container")

axios
    .get(url)
    .then(displayResult)
    .catch(displayError);


