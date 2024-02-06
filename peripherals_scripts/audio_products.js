export const audio_products = [

    //SPEAKERS
    {
        name:'Logitech Z120, 2.0',
        category:'Speakers',
        price: 500.00,
        product_id: 10101,
        connection:'USB', 
        img_src: 'peripherals_images/audio/speakers/Logitech Z120.png',
    },

    {
        name:'Edifier M1250',
        category:'Speakers',
        price: 520.00,
        product_id: 10102,
        connection:'USB', 
        img_src: 'peripherals_images/audio/speakers/Edifier M1250.jpg',
    },

    {
        name:'Edifier M101BT',
        category:'Speakers',
        price: 1830.00,
        product_id: 10103,
        connection:'Bluetooth', 
        img_src: 'peripherals_images/audio/speakers/Edifier M101BT.png',
    },

    {
        name:'Edifier G2000',
        category:'Speakers',
        price: 3300.00,
        product_id: 10104,
        connection:'Bluetooth and USB', 
        img_src: 'peripherals_images/audio/speakers/Edifier G2000.png',
    },

    {
        name:'Logitech Z607',
        category:'Speakers',
        price: 4499.00,
        product_id: 10105,
        connection:'Bluetooth', 
        img_src: 'peripherals_images/audio/speakers/Logitech Z607.jpg',
    },

    //HEADSET
    {
        name:'Redragon Mento H270 RGB',
        category:'Headset',
        color: 'Black',
        price: 690.00,
        product_id: 10106,
        connection:'Wired', 
        img_src: 'peripherals_images/audio/headset/Redragon Mento H270 RGB Black.jpg',
    },
    {
        name:'Razer Kraken X',
        category:'Headset',
        color: 'Black',
        price: 2750.00,
        product_id: 10107,
        connection:'Wired', 
        img_src: 'peripherals_images/audio/headset/Razer Kraken X.jfif',
    },
    {
        name:'Asus ROG Strix Cetra Core 2',
        category:'Headset',
        color: 'Black',
        price: 3395.00,
        product_id: 10108,
        connection:'Wired', 
        img_src: 'peripherals_images/audio/headset/Asus ROG Strix Cetra Core 2.png',
    },
    {
        name:'SteelSeries SS Arctis 3',
        category:'Headset',
        color: 'Black',
        price: 3399.00,
        product_id: 10109,
        connection:'Wired', 
        img_src: 'peripherals_images/audio/headset/SteelSeries SS Arctis 3.png',
    },
    {
        name:'HyperX Cloud 2',
        category:'Headset',
        color: 'Pink',
        price: 5480.00,
        product_id: 10110,
        connection:'Wired', 
        img_src: 'peripherals_images/audio/headset/HyperX Cloud 2, pink.jpg',
    }
    

]


export function displayAudio(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;

    let headset_header = true;
    let speakers_header = true;
    
    let speakersHTML = '';
    let headsetHTML = '';

    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="speakers"></div>');
    document.getElementById('speakers').insertAdjacentHTML('afterend','<div class="product-row" id="headset"></div>');
    // parent_element.insertAdjacentHTML('beforeend', '<div class="product-row" id="am4"></div>');

        for(let i = 0 ; i < audio_products.length ; i++){


            product_id = audio_products[i].product_id;
            name = audio_products[i].name;
            img_src = audio_products[i].img_src;
            price = audio_products[i].price;

            if(audio_products[i].category == "Speakers"){
                if(speakers_header){
                    let speakers_element =  document.getElementById('speakers');
                    speakers_element.insertAdjacentHTML('beforebegin','<h1>Speakers</h1>')
                    speakers_header = false;
                }
                
                description =  
                audio_products[i].category + ', ' + 
                audio_products[i].connection;

                speakersHTML += product_HTML(product_id,name,img_src,description,price);

            }

            else{

                if(headset_header){
                    let hdd_element =  document.getElementById('headset');
                    hdd_element.insertAdjacentHTML('beforebegin','<h1>Headset</h1>')
                    headset_header = false;
                }

                description =  
                audio_products[i].category + ', ' + 
                audio_products[i].color + ', ' + 
                audio_products[i].connection;

                headsetHTML += product_HTML(product_id,name,img_src,description,price);

            }

        }

        document.querySelector("#speakers").innerHTML = speakersHTML;
        document.querySelector("#headset").innerHTML = headsetHTML;
    
    
}

function product_HTML(product_id,name,img_src,description,price){
    return '<div class="product-column">\
            <div class="product-card">\
                                    \
                <div class="overlay">\
                    <button class="cart-button" id="'+product_id+'">\
                        <i class="fas fa-shopping-cart" id="'+product_id+'"></i>\
                        <h6 id="'+product_id+'">ADD TO CART</h6>\
                    </button>\
                            \
                </div>      \
                            \
                <div class="product-id">\
                    <p>'+product_id+'</p>\
                </div>\
                \
                <div class="product-img">\
                    <img class="product-image" id="image" src="'+img_src+'">\
                </div>\
                \
                <div class="product-name">\
                    <hr>\
                    <h3>'+name+'</h3>\
                </div>\
                \
                <div class="product-description">\
                    <p>'+description+'</p>\
                </div>\
                \
                <div class="product-price">\
                    <h3>\
                    ₱'+price.toLocaleString()+'.00\
                    </h3>\
                </div>\
            </div>\
        </div>'; 
    }  
