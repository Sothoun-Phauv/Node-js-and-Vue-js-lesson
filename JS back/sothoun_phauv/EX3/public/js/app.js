//  READ THE INSTRUCTIONS in PDF FILE
function getPrice(){
    let id = document.querySelector('#productId').value;
    const url ='http://localhost:3000/products?id=' + id;
    axios
        .get(url)
        .then(res=>{
            let procduct =res.data.name;
            let price = res.data.price;
            if (procduct !==null && price !==null){
                result.textContent = "The result is: " + procduct + " (" + "price = "+ price +"dollars)"
            }else{
                result.textContent = "The result is not found";
            }
        })
}



function getbyPrice(){
    min = document.querySelector('#minId').value;
    max = document.querySelector('#maxId').value;
    const url ='http://localhost:3000/filter_products?mix_price=' +max + "&min_price=" + min;
    axios
        .get(url)
        .then(res=>{
            let procduct =res.data.name;
            let price = res.data.price;
            if (procduct !==null && price !==null){
                result2.textContent = "The result is: " + procduct + " (" + "price = "+ price +" dollars)"
                
            }else{
                result2.textContent = "The result is not found";
            }
        })
}




let result2 = document.querySelector('#result2')
let result = document.querySelector('#result1')
const proctname = document.querySelector('#show_name');
proctname.addEventListener('click',getPrice);
let productPrice = document.querySelector('#showname');
productPrice.addEventListener('click',getbyPrice);







