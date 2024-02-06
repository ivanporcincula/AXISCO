export const graphics_card_products = [

    //NVIDIA
    {
        brand: 'NVIDIA',
        variant: 'Gigabyte GTX 1650 OC',
        price: 12160.00,
        product_id: 10050,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/Gigabyte GTX 1650 OC.png'
    },

    {
        brand: 'NVIDIA',
        variant: 'PNY GTX 1660S Super XLR8 Gaming',
        price: 15995.00,
        product_id: 10051,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/PNY GeForce GTX 1660 SUPER 6GB XLR8 Gaming.png'
    },

    {
        brand: 'NVIDIA',
        variant: 'Gigabyte RTX 3050 Eagle OC',
        price: 20660.00,
        product_id: 10052,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/GIGABYTE RTX 3050 GAMING OC 8GB.jpg'
    },

    {
        brand: 'NVIDIA',
        variant: 'Gigabyte RTX 3060 Vision OC LHR',
        price: 28540.00,
        product_id: 10053,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/GIGABYTE RTX 3060 VISION OC 12GB LHR.jpg'
    },

    {
        brand: 'NVIDIA',
        variant: 'MSI RTX 3060 Ti Gaming X LHR',
        price: 31670.00,
        product_id: 10054,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/MSI GeForce RTX 3060 Ti GAMING X 8G LHR.png'
    },

    {
        brand: 'NVIDIA',
        variant: 'Gigabyte RTX 3070 Eagle OC LHR',
        price: 38860.00,
        product_id: 10055,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/GIGABYTE RTX 3070 EAGLE OC LHR 8GB.jpg'
    },

    {
        brand: 'NVIDIA',
        variant: 'Asus RTX 3080 Strix OC LHR',
        price: 58995.00,
        product_id: 10056,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/ASUS ROG STRIX RTX 3080 V2 OC 10GB LHR.png'
    },

    {
        brand: 'NVIDIA',
        variant: 'Asus RTX 3080 Ti Strix OC',
        price: 94995.00,
        product_id: 10057,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/ASUS ROG Strix GeForce RTX 3080 Ti 12GB.png'
    },

    {
        brand: 'NVIDIA',
        variant: 'Asus RTX 3090 Ti TUF OC',
        price: 133395.00,
        product_id: 10058,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/ASUS TUF Gaming GeForce RTX 3090 OC.png'
    },

    {
        brand: 'NVIDIA',
        variant: 'Palit RTX 3070 Ti Gaming Pro',
        price: 39950.00,
        product_id: 10059,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/nvidia/Palit GeForce RTX 3070 Ti GamingPro.png'
    },

    //AMD Radeon

    {
        brand: 'AMD Radeon',
        variant: 'ASRock RX 6600 Challenger D',
        price: 19995.00,
        product_id: 10060,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/radeon/ASROCK Radeon RX 6600 Challenger D 8GB.png'
    },

    {
        brand: 'AMD Radeon',
        variant: 'MSI RX 6600 Mech 2X',
        price: 21995.00,
        product_id: 10061,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/radeon/MSI Radeon RX 6600 MECH 2X 8G.png'
    },

    {
        brand: 'AMD Radeon',
        variant: 'ASRock RX 6700XT Challenger Pro OC',
        price: 31995.00,
        product_id: 10062,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/radeon/ASROCK Radeon RX 6700 XT Challenger Pro 12GB OC.png'
    },


    {
        brand: 'AMD Radeon',
        variant: 'Asus RX 6700XT Dual',
        price: 32995.00,
        product_id: 10063,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/radeon/ASUS Dual Radeon RX 6700 XT OC Edition.jpg'
    },

    {
        brand: 'AMD Radeon',
        variant: 'MSI RX 6700XT',
        price: 33995.00,
        product_id: 10064,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/radeon/MSI Radeon RX 6700 XT GAMING X 12G.png'
    },



    {
        brand: 'AMD Radeon',
        variant: 'Power Color RX 6700XT Red Devil OC',
        price: 34995.00,
        product_id: 10065,
        category: 'Graphics Card',
        img_src: 'pc_component_images/graphics card/radeon/PowerColor Red Devil Radeon RX 6700 XT 12GB.png'
    },


]



export function displayGPU(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let nvidia_header = true;
    let amd_header = true;

    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="nvidia"></div>');
    document.getElementById('nvidia').insertAdjacentHTML('afterend','<div class="product-row" id="amd"></div>');
    

    let nvidiaHTML = '';
    let amdHTML = '';
        

        for(let i = 0 ; i < graphics_card_products.length ; i++){


            product_id = graphics_card_products[i].product_id;
            name = graphics_card_products[i].variant;
            img_src = graphics_card_products[i].img_src;
            description = graphics_card_products[i].brand;
            price = graphics_card_products[i].price;

            if(graphics_card_products[i].brand == 'NVIDIA'){
                if(nvidia_header){
                    let nvidia_element = document.getElementById('nvidia');
                    nvidia_element.insertAdjacentHTML('beforebegin','<h1>NVIDIA</h1>');
                    nvidia_header=false;
                }
                nvidiaHTML += product_HTML(product_id,name,img_src,description,price);
            }
            
            else{
                if(amd_header){
                    let amd_element = document.getElementById('amd');
                    amd_element.insertAdjacentHTML('beforebegin','<h1>AMD Radeon</h1>');
                    amd_header=false;
                }

                amdHTML += product_HTML(product_id,name,img_src,description,price);
            }

            document.querySelector("#nvidia").innerHTML = nvidiaHTML;
            document.querySelector("#amd").innerHTML = amdHTML;

        }
    
    
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