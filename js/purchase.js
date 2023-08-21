
let total = 0.00;

function clickHandler(target) {

    
    const itemName = target.childNodes[5].innerText;

    const selectedItem = document.getElementById("selected-items");

    

    const count = selectedItem.childElementCount;
    const ol = document.createElement("ol");

    ol.innerText = `${count}. ${itemName}`;
    selectedItem.appendChild(ol);

    

    const itemPrice = target.childNodes[7].innerText.split(" ")[0];
   
    total = parseInt(total.toFixed(2)) + parseInt(itemPrice);

    document.getElementById("total-price").innerText = total.toFixed(2);

    document.getElementById("grand-total").innerText = total.toFixed(2);

        //apply Button enable
        if(total >= 200 ) { 
            document.getElementById('button-apply').disabled = false; 
            }
            else{
             document.getElementById('button-apply').disabled = true; 
            }


            //purchase disable button
        if(total >= 1 ) { 
            document.getElementById('button-purchase').disabled = false; 
            }
            else{
             document.getElementById('button-purchase').disabled = true; 
            }

    }
    


    function applyButton(){
        if(document.getElementById("input-field").value === 'SELL200'){
            const discount = (total*.20).toFixed(2);
            document.getElementById("discount-price").innerText = discount;

            const gTotal = total - discount;
            document.getElementById("grand-total").innerText = gTotal.toFixed(2);
        }

    }

    function goHome(){
        location.reload(document.getElementById('invoice-section'));
    }

    // document.getElementById('go-home').addEventListener('click', function(){
    //     location.reload(document.getElementById('invoice-section'));
    // })

    // function goHome(){
    //     document.getElementById("invoice-section").innerText = ;
    // }


        

    //     const gTotal = document.getElementById("discount-price");
    //     const gTotalFloat = parseFloat(gTotal);
    // const grandTotal = total - gTotalFloat;
    // document.getElementById("grand-total").innerText = grandTotal;
    // console.log(grandTotal);

// button disable
// function purchaseButton() {
//        if(total === 1 ) { 
//            document.getElementById('button-purchase').disabled = false; 
//            }
//            else{
//             document.getElementById('button-purchase').disabled = true; 
//            }
//    }


// function applyButton(){

// }

//discount 


