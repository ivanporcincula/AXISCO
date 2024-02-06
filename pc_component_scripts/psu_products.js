export const psu_products = [
    {
        name:'Cooler Master CM MWE 500 v2',

        price: 2670.00,
        product_id: 10071,
        category: 'Power Supply Unit',
        specifications: {
            watts: '500 watts',
            efficiency: '80 Bronze',
            modular: 'Non-modular'
        },

        img_src:'pc_component_images/power supply unit/Cooler Master CM 500watts, PSU, MWE 500.png'

    },

    {
        name:'Seasonic M12II Evo',

        price: 3999.00,
        product_id: 10072,
        category: 'Power Supply Unit',
        specifications: {
            watts: '620 watts',
            efficiency: '80 Bronze',
            modular: 'Fully Modular'
        },

        img_src:'pc_component_images/power supply unit/Seasonic M12II Evo 620watts.png'

    },

    {
        name:'Seasonic Core GC550',
        category: 'Power Supply Unit',
        price: 4110.00,
        product_id: 10073,
        specifications: {
            watts: '550 watts',
            efficiency: '80 gold',
            modular: 'Fully Modular'
        },

        img_src:'pc_component_images/power supply unit/Seasonic Core GC550.png'

    },

    {
        name:'MSI MPG',
        category: 'Power Supply Unit',
        price: 4750.00,
        product_id: 10074,
        specifications: {
            watts: '650 watts',
            efficiency: '80 gold',
            modular: 'Fully Modular'
        },

        img_src:'pc_component_images/power supply unit/MSI MPG 650watts.png'

    },

    {
        name:'Inwin P85',
        category: 'Power Supply Unit',
        price: 4999.00,
        product_id: 10075,
        specifications: {
            watts: '850 watts',
            efficiency: '80 gold',
            modular: 'Fully Modular'
        },

        img_src:'pc_component_images/power supply unit/Inwin P85 850watts.jpg'

    },

    
]
export function displayPSU(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let psu_header = true;

        
    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="psu"></div>');
        
        for(let i = 0 ; i < psu_products.length ; i++){


            product_id = psu_products[i].product_id;
            name = psu_products[i].name;
            img_src = psu_products[i].img_src;
            description = psu_products[i].specifications.watts + ', ' + 
            psu_products[i].specifications.efficiency + ', ' + 
            psu_products[i].specifications.modular ;
            price = psu_products[i].price;

            if(psu_header){
                let psu_element = document.getElementById('psu');
                psu_element.insertAdjacentHTML('beforebegin','<h1>Power Supply Unit</h1>')
                psu_header=false;
            }

            productHTML += product_HTML(product_id,name,img_src,description,price);

        }

        document.querySelector("#psu").innerHTML = productHTML;
    
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



