import { laptop_products, displayLaptops } from "./laptop_products.js";
import { processor_products, displayProcessor } from "./pc_component_scripts/processor_products.js";
import { motherboard_products, displayMotherboard } from "./pc_component_scripts/motherboard_products.js";
import { ram_products, displayRAM } from "./pc_component_scripts/ram_products.js";
import { storage_products, displayStorage } from "./pc_component_scripts/storage_products.js";
import { displayGPU, graphics_card_products } from "./pc_component_scripts/graphics_card_products.js";
import { displayPCCase, pc_case_products } from "./pc_component_scripts/pc_case_products.js";
import { displayPSU, psu_products } from "./pc_component_scripts/psu_products.js";
import { cooling_solutions_products, displayCool } from "./pc_component_scripts/cooling_solutions_products.js";
import { displayMK, keyboard_and_mouse_products } from "./peripherals_scripts/keyboard_and_mouse_products.js";
import { audio_products, displayAudio } from "./peripherals_scripts/audio_products.js";
import { displayMonitor, monitor_products } from "./peripherals_scripts/monitor_products.js";


let laptopDropDown = document.getElementById("laptop-drop-down");
let pcDropDown = document.getElementById("pc-comp-drop-down");
let peripheralDropDown = document.getElementById("peripheral-drop-down");

let laptopButton = document.getElementById("laptop");
let pcButton = document.getElementById("pc-comp");
let peripheralsButton = document.getElementById("peripherals");

let id_button_clicked;
let class_button_clicked;
let total = 0;
let counter = 0;
let counter_second=0;
let all_products = 
    laptop_products.concat(processor_products,motherboard_products,ram_products,storage_products,
        graphics_card_products,pc_case_products,psu_products,cooling_solutions_products, 
        keyboard_and_mouse_products,audio_products,monitor_products);

laptopButton.addEventListener("click",laptopMenu);
pcButton.addEventListener("click",pcMenu);
peripheralsButton.addEventListener("click", peripheralMenu);

function laptopMenu(){
    laptopDropDown.classList.toggle("show");
    laptopButton.classList.toggle("clicked");
}

function pcMenu(){
    pcDropDown.classList.toggle("show");
    pcButton.classList.toggle("clicked");
}

function peripheralMenu(){
    peripheralDropDown.classList.toggle("show");
    peripheralsButton.classList.toggle("clicked");

}


window.onclick = function(e){

    if (!e.target.matches('.laptop-btn')){        
        if(laptopDropDown.classList.contains('show')){
            laptopDropDown.classList.remove('show');
            laptopButton.classList.remove("clicked");
        }
              
    }

    if (!e.target.matches('.pc-btn')){        
        if(pcDropDown.classList.contains('show')){
            pcDropDown.classList.remove('show');
            pcButton.classList.remove("clicked");
        }
        
    }


    if (!e.target.matches('.peripheral-btn')){
        if(peripheralDropDown.classList.contains('show')){
            peripheralDropDown.classList.remove('show');
            peripheralsButton.classList.remove("clicked");
        }
    }

}




document.addEventListener('click', function(e){
    //console.log(e.target.className);
    id_button_clicked = e.target.id; 
    class_button_clicked = e.target.className;
    
   //FOR LAPTOP
    if(id_button_clicked == 'acer'){
        displayLaptops(id_button_clicked);
    }
    else if(id_button_clicked == 'asus'){
        displayLaptops(id_button_clicked);
    }

    else if(id_button_clicked == 'dell'){
        displayLaptops(id_button_clicked);
    }

    else if(id_button_clicked == 'gigabyte'){
        displayLaptops(id_button_clicked);
    }

    else if(id_button_clicked == 'msi'){
        displayLaptops(id_button_clicked);
    }

    //PC COMPONENTS
    if(id_button_clicked == 'processor_nav'){
        displayProcessor();
    }

    if(id_button_clicked == 'motherboard_nav'){
        displayMotherboard();
    }
    if(id_button_clicked == 'ram_nav'){
        displayRAM();
    }
    if(id_button_clicked == 'storage_nav'){
        displayStorage();
    }
    if(id_button_clicked == 'gpu_nav'){
        displayGPU();
    }
    if(id_button_clicked == 'pc_case_nav'){
        displayPCCase();
    }
    if(id_button_clicked == 'psu_nav'){
        displayPSU();
    }
    if(id_button_clicked == 'fan_nav'){
        displayCool();
    }

    //PERIPHERALS
    if(id_button_clicked == 'mk_nav'){
        displayMK();
    }

    if(id_button_clicked == 'audio_nav'){
        displayAudio();
    }
    
    if(id_button_clicked == 'monitor_nav'){
        displayMonitor();
    }

    //ADD TO CART
    if(class_button_clicked == 'cart-button' || class_button_clicked == 'fas fa-shopping-cart'){
        addToCart();
    }

    //REMOVE FROM CART
    if(class_button_clicked == 'fa fa-times x-button'){
        removeFromCart();
       
    }



    console.log(id_button_clicked);
    if(id_button_clicked == 'checkout-btn'){
        checkoutBtn();
    }

    if(id_button_clicked == 'proceed'){
        checkoutProceed();
    }

    if(id_button_clicked == 'cancel'){
        checkoutCancel();
    }

    if(id_button_clicked == 'ok'){
        document.getElementById('thank-you-dialogue').classList.toggle("show-dialogue-box");
    }

})


 function addToCart(){
    let id_of_clicked_button = Number(id_button_clicked);
    let name='';
    let img_src='';
    let description='';
    let price=0;
    
    let i = all_products.map(object => object.product_id).indexOf(id_of_clicked_button);
    

    if(all_products[i].category == 'Laptop'){
        //code here
        name = all_products[i].brand + ' ' + all_products[i].variant;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].specifications.os + ', ' + all_products[i].specifications.processor +
                ', ' + all_products[i].specifications.ram + ', ' + all_products[i].specifications.storage + ', ' +
                all_products[i].specifications.graphics;
        
    }
    else if(all_products[i].category == 'Processor'){
        name = all_products[i].brand + ' ' + all_products[i].variant;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].socket;

    }
    else if(all_products[i].category == 'Motherboard'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].socket_type + ', ' + all_products[i].specifications.tower +
                ', ' + all_products[i].specifications.ram_slot;
    }
    else if(all_products[i].category == 'RAM'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].specifications.dram + ', ' + all_products[i].specifications.size +
                ', ' + all_products[i].specifications.frequency;
    }

    else if(all_products[i].category == 'Storage'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].storage_type + ', ' + 
        all_products[i].size;
        
    }

    else if(all_products[i].category == 'Graphics Card'){
        name = all_products[i].brand + ' ' + all_products[i].variant;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].brand;
    }

    else if(all_products[i].category == 'PC Case'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].specifications.tower + ', ' + 
        all_products[i].specifications.color + ', ' + 
        all_products[i].specifications.fan_slots ;
    }


    else if(all_products[i].category == 'Power Supply Unit'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].specifications.watts + ', ' + 
        all_products[i].specifications.efficiency + ', ' + 
        all_products[i].specifications.modular ;
    }

    else if(all_products[i].category == 'Cooling Solutions'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description = all_products[i].size + ', ' + 
        all_products[i].fan_type ;
    }


    else if(all_products[i].category == 'Keyboard' || all_products[i].category == 'Mouse'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        if(all_products[i].category == 'Keyboard'){
            description =  
            all_products[i].specifications.color + ', ' + 
            all_products[i].specifications.switch_color + ', ' + 
            all_products[i].specifications.hot_swap + ', ' +
            all_products[i].specifications.connection;
        }
        else{
            description =  
            all_products[i].specifications.color + ', ' + 
            all_products[i].specifications.connection + ', ' + 
            all_products[i].specifications.dpi;
        }

    }

    else if(all_products[i].category == 'Headset' || all_products[i].category == 'Speakers'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;

        if(all_products[i].category == 'Headset'){
            description =  
            all_products[i].category + ', ' + 
            all_products[i].connection;
        }
        else{
            description =  
            all_products[i].category + ', ' + 
            all_products[i].color + ', ' + 
            all_products[i].connection;
        }
    }

    else if(all_products[i].category == 'Monitor'){
        name = all_products[i].name;
        price = all_products[i].price;
        img_src = all_products[i].img_src;
        description =  
        all_products[i].size + ', ' + 
        all_products[i].refresh_rate + ', ' + 
        all_products[i].port;
    }

    console.log(name);
    total += all_products[i].price;
    
    let checkoutHTML = cartHTML(name,price,img_src,description);
   
    
    if(counter == 0){
        
        document.getElementById('container-overflow').insertAdjacentHTML('afterbegin',checkoutHTML);
        let h4 = document.createElement("h4");
        let newTotal = document.createTextNode('₱'+total.toLocaleString()+'.00');
        h4.appendChild(newTotal);
        let totalText = document.getElementById("total-of-products");
        totalText.replaceChild(h4,totalText.childNodes[1]);
        
    }

    else{

        document.getElementById('checkout'+counter_second).insertAdjacentHTML('afterend',checkoutHTML);
        let h4 = document.createElement("h4");
        let newTotal = document.createTextNode('₱'+total.toLocaleString()+'.00');
        h4.appendChild(newTotal);

        let totalText = document.getElementById("total-of-products");
        totalText.replaceChild(h4,totalText.childNodes[1]);
        counter_second++;

    }

    counter++;
    
 }

 function removeFromCart(){
    
    
    let priceFromHTML = document.getElementById('price'+id_button_clicked);
    
    let newPrice = priceFromHTML.outerHTML.replace(/<\/?[^>]+(>|$)/g, "");   
    newPrice = newPrice.split(".");
    newPrice = newPrice[0]; 
    newPrice = newPrice.replace(/\D/g,"");
    let price = Number(newPrice);
    
    total = total - price;

    let h4 = document.createElement("h4");
    let newTotal = document.createTextNode('₱'+total.toLocaleString()+'.00');
    h4.appendChild(newTotal);

    let totalText = document.getElementById("total-of-products");
    totalText.replaceChild(h4,totalText.childNodes[1]);


    document.getElementById('checkout'+id_button_clicked).innerHTML = "";
    
} 

function checkoutBtn(){

    //DISABLE ALL ELEMENTS IN THE BROWSER AND SHOW DIALOGUE BOX
    document.getElementById('dialogue-price').classList.toggle("show-dialogue-box");
    document.getElementById('checkout-product-card').classList.toggle("checkout-card-unclick");
    document.getElementById('page-product').classList.toggle("checkout-card-unclick");
    document.getElementById('nav-container').classList.toggle("checkout-card-unclick");

    let p = document.createElement("p");
    let newTotal = document.createTextNode('₱'+total.toLocaleString()+'.00');
    p.appendChild(newTotal);

    let totalText = document.getElementById("price-to-pay");
    totalText.replaceChild(p,totalText.childNodes[1]);
}   

function checkoutProceed(){
    //REMOVE DIALOGUE BOX AND ENABLE ALL OTHER ELEMENTS AGAIN
    document.getElementById('dialogue-price').classList.toggle("show-dialogue-box");
    document.getElementById('checkout-product-card').classList.toggle("checkout-card-unclick");
    document.getElementById('page-product').classList.toggle("checkout-card-unclick");
    document.getElementById('nav-container').classList.toggle("checkout-card-unclick");
    document.getElementById('container-overflow').innerHTML = "";
    document.getElementById('thank-you-dialogue').classList.toggle("show-dialogue-box");

    
    total = 0;
    counter=0;
    counter_second=0;

    let h4 = document.createElement("h4");
    let newTotal = document.createTextNode('₱'+total.toLocaleString()+'.00');
    h4.appendChild(newTotal);

    let totalText = document.getElementById("total-of-products");
    totalText.replaceChild(h4,totalText.childNodes[1]);


    
}

function checkoutCancel(){
 //REMOVE DIALOGUE BOX AND ENABLE ALL OTHER ELEMENTS AGAIN
    document.getElementById('dialogue-price').classList.toggle("show-dialogue-box");
    document.getElementById('checkout-product-card').classList.toggle("checkout-card-unclick");
    document.getElementById('page-product').classList.toggle("checkout-card-unclick");
    document.getElementById('nav-container').classList.toggle("checkout-card-unclick");
}

 function cartHTML(name, price, img_src, description){
    return '\
    <div class="checkout-row" id="checkout'+counter+'">\
    <hr>\
        <i class="fa fa-times x-button" aria-hidden="true" id="'+counter+'"></i>\
        <div class="checkout-column c-left">\
          <div class="product-img">\
              <img class="product-image" id="image" src="'+img_src+'">\
          </div>\
        </div>\
        <div class="checkout-column c-right">\
          <div class="product-name">\
              <h3>'+name+'</h3>\
          </div>\
          <div class="product-description">\
              <p>'+description+'</p>\
          </div>\
          <div class="checkout-product-price" >\
              <h4 id="price'+counter+'">\
              ₱'+price.toLocaleString()+'.00\
              </h4>\
          </div>\
        </div>\
    </div>\
    </div>';
}









