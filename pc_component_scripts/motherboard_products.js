
export const motherboard_products = [
    
    //LGA1200

    {
        socket_type: 'LGA1200',
        name: 'MSI MAG B560M Mortar WiFi + BT',
        price: 7660.00,
        product_id: 10031,
        category: 'Motherboard',
        specifications : {
            tower: 'mATX',
            ram_slot: '4 slots DDR4',
        },

        img_src:'pc_component_images/motherboard/LGA1200/MSIMAGB560M-Mortar.jpg'

    },


    {
        socket_type: 'LGA1200',
        name: 'Asus ROG Strix B560-G Gaming WiFi + BT',
        price: 9050.00,
        product_id: 10032,
        category: 'Motherboard',
        specifications : {
            tower: 'mATX',
            ram_slot: '4 slots DDR4',
        },
        img_src:'pc_component_images/motherboard/LGA1200/AsusROGStrixB560G.jpg'

    },

    


    //LGA1700

    {
        socket_type: 'LGA1700',
        name: 'Asus TUF B660M Plus WiFi DDR4',
        price: 11095.00,
        product_id: 10033,
        category: 'Motherboard',
        specifications : {
            tower: 'mATX',
            ram_slot: '4 slots DDR4',
        },

        img_src:'pc_component_images/motherboard/LGA1700/AsusTUFB660MPlus.jpg'

    },

    {
        socket_type: 'LGA1700',
        name: 'MSI MAG B660M Mortar WiFi DDR4',
        price: 10440.00,
        product_id: 10034,
        category: 'Motherboard',
        specifications : {
            tower: 'mATX',
            ram_slot: '4 slots DDR4',
        },
        img_src:'pc_component_images/motherboard/LGA1700/MSIMAGB660M-Mortar.jpg'
    },


    //AM4

    {
        socket_type: 'AM4',
        name: 'Asus TUF Gaming X570 Plus WiFi',
        price: 11595.00,
        product_id: 10035,
        category: 'Motherboard',
        specifications : {
            tower: 'ATX',
            ram_slot: '4 slots DDR4',
        },
        img_src:'pc_component_images/motherboard/AM4/AsusTUFGamingX570Plus.jpg'
    },

    {
        socket_type: 'AM4',
        name: 'NZXT N7 B550 White',
        price: 12895.00,
        product_id: 10036,
        category: 'Motherboard',
        specifications : {
            tower: 'ATX',
            ram_slot: '4 slots DDR4',
        },
        img_src:'pc_component_images/motherboard/AM4/NZXTN7B550White.jpg'
    },
]

export function displayMotherboard(){


    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let lga1200_header=true;
    let lga1700_header=true;
    let am4_header=true;
    let LGA1200 = '';
    let LGA1700 = '';
    let AM4 = '';

    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="lga1200"></div>');
    document.getElementById('lga1200').insertAdjacentHTML('afterend','<div class="product-row" id="lga1700"></div>');
    parent_element.insertAdjacentHTML('beforeend', '<div class="product-row" id="am4"></div>');

        

        for(let i = 0 ; i < motherboard_products.length ; i++){


            product_id = motherboard_products[i].product_id;
            name = motherboard_products[i].name;
            img_src = motherboard_products[i].img_src;
            description = motherboard_products[i].socket_type + ', ' + motherboard_products[i].specifications.tower +
                ', ' + motherboard_products[i].specifications.ram_slot;
            price = motherboard_products[i].price;

           

            if(motherboard_products[i].socket_type == 'LGA1200'){
                if(lga1200_header){
                    let lga1200_element = document.getElementById('lga1200');
                    lga1200_element.insertAdjacentHTML('beforebegin','<h1>LGA 1200</h1>');
                    lga1200_header=false;
                }
                LGA1200 += product_HTML(product_id,name,img_src,description,price);
            }

            else if(motherboard_products[i].socket_type == 'LGA1700'){
                if(lga1700_header){
                    let lga1700_element = document.getElementById('lga1700');
                    lga1700_element.insertAdjacentHTML('beforebegin','<h1>LGA 1700</h1>');
                    lga1700_header=false;
                }
                LGA1700 += product_HTML(product_id,name,img_src,description,price);

            }
            
            else{
                if(am4_header){
                    let am4_element = document.getElementById('am4');
                    am4_element.insertAdjacentHTML('beforebegin','<h1>AM4</h1>');
                    am4_header=false;
                }

                AM4 += product_HTML(product_id,name,img_src,description,price);
            }
        }
        document.querySelector("#lga1200").innerHTML = LGA1200;
        document.querySelector("#lga1700").innerHTML = LGA1700;
        document.querySelector("#am4").innerHTML = AM4;

    
    
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
