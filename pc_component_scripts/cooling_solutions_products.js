export const cooling_solutions_products = [
    {
        name: 'darkFlash CL12 Rainbow',
        size: '120 mm',
        price: 180.00,
        product_id: 10076,
        fan_type: 'AUX',
        category: 'Cooling Solutions',
        img_src: 'pc_component_images/cooling solutions/darkFlash CL12 Rainbow.jpg',
    },

    {
        name: 'darkFlash C6S RGB Blue frame',
        size: '120 mm',
        price: 180.00,
        product_id: 10077,
        fan_type: 'AUX',
        category: 'Cooling Solutions',
        img_src: 'pc_component_images/cooling solutions/darkFlash C6S RGB.png',
    },

    {
        name: 'darkFlash DR11 Rainbow',
        size: '120 mm',
        price: 180.00,
        product_id: 10078,
        fan_type: 'AUX',
        category: 'Cooling Solutions',
        img_src: 'pc_component_images/cooling solutions/darkFlash DR11 Rainbow.jpg',
    },

    {
        name: 'IDCooling Auraflow AF 240X Snow, RGB Aura sync',
        size: '240 mm',
        price: 3199.00,
        product_id: 10079,
        fan_type: 'AIO LC Cooler',
        category: 'Cooling Solutions',
        img_src: 'pc_component_images/cooling solutions/IDCooling Auraflow AF X240 Snow.jpg',
    },

    {
        name: 'IDCooling Zoomflow ZF 240X, aRGB Aura sync',
        size: '240 mm',
        price: 3199.00,
        product_id: 10080,
        fan_type: 'AIO LC Cooler',
        category: 'Cooling Solutions',
        img_src: 'pc_component_images/cooling solutions/IDCooling Zoomflow ZF 240X.jpg',
    },

    {
        name: 'Tecware Mirage 360, white, aRGB Aura sync',
        size: '360 mm',
        price: 3450.00,
        product_id: 10081,
        fan_type: 'AIO LC Cooler',
        category: 'Cooling Solutions',
        img_src: 'pc_component_images/cooling solutions/Tecware Mirage 360.png',
    },

    {
        name: 'Cooler Master CM ML360L aRGB V2 AIO LC Cooler 360mm',
        size: '360 mm',
        price: 5890.00,
        product_id: 10082,
        fan_type: 'AIO LC Cooler',
        category: 'Cooling Solutions',
        img_src: 'pc_component_images/cooling solutions/Cooler Master CM ML360L v2 white.jpg',
    }

]

export function displayCool(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let cooling_solutions = true;

        
    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="cooling-solutions"></div>');
    
        

        for(let i = 0 ; i < cooling_solutions_products.length ; i++){


            product_id = cooling_solutions_products[i].product_id;
            name = cooling_solutions_products[i].name;
            img_src = cooling_solutions_products[i].img_src;
            description = cooling_solutions_products[i].size + ', ' + 
            cooling_solutions_products[i].fan_type ;
            price = cooling_solutions_products[i].price;

            if(cooling_solutions){
                let cooling_solutions_element = document.getElementById('cooling-solutions');
                cooling_solutions_element.insertAdjacentHTML('beforebegin','<h1>Cooling Solutions</h1>')
                cooling_solutions=false;
            }

            productHTML += product_HTML(product_id,name,img_src,description,price);
            
        }
    
        document.querySelector("#cooling-solutions").innerHTML = productHTML;
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
