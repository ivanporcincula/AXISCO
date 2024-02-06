export const monitor_products = [


    // 21.5/22" Monitors
    {
        name:'Lenovo D22E-20 LED VA 1080p',
        size:'21.5/22"',
        price: 5720.00,
        product_id: 10111,
        category: 'Monitor',
        refresh_rate:'75Hz', 
        port:'VGA HDMI', 
        img_src:'peripherals_images/monitor/21.5 22” Monitors/Lenovo D22E-20 LED VA 1080p.jpg'

    },

    {
        name:'Acer KA222Q LED IPS',
        size:'21.5/22"',
        price: 6295.00,
        product_id: 10112,
        category: 'Monitor',
        refresh_rate:'FreeSync 75Hz', 
        port:'VGA HDMI', 
        img_src:'peripherals_images/monitor/21.5 22” Monitors/Acer KA222Q LED IPS 75hz.jpg'

    },

    {
        name:' Samsung LF22T350 LED IPS',
        size:'21.5/22"',
        price: 6595.00,
        product_id: 10113,

        category: 'Monitor',
        refresh_rate:'FreeSync 75Hz', 
        port:'VGA HDMI', 
        img_src:'peripherals_images/monitor/21.5 22” Monitors/Samsung LF22T350 LED IPS 75hz.jpg'

    },

    // 23.8/24" Monitors

    {
        name:'LG 24MP400-B LED IPS',
        size:'23.8/24"',
        price: 6999.00,
        product_id: 10114,
        category: 'Monitor',
        refresh_rate:'FreeSync 75Hz', 
        port:'VGA HDMI', 
        img_src:'peripherals_images/monitor/23.8 24” Monitors/LG 24MP400-B LED IPS 75hz.png'

    },

    {
        name:'Acer Nitro VG240Y Sbmiipx LED IPS',
        size:'23.8/24"',
        price: 5720.00,
        product_id: 10115,
        category: 'Monitor',
        refresh_rate:'FreeSync 165Hz', 
        port:'HDMI DP', 
        img_src:'peripherals_images/monitor/23.8 24” Monitors/Acer Nitro VG240Y.png'

    },
    {
        name:'Asus VP249QGR LED IPS',
        size:'23.8/24"',
        price: 9999.00,
        product_id: 10116,
        category: 'Monitor',
        refresh_rate:'FreeSync 144Hz', 
        port:'VGA HDMI DP', 
        img_src:'peripherals_images/monitor/23.8 24” Monitors/Asus VP249QGR.png'

    },


    //27" Monitors

    {
        name:'Viewsonic VA2715-H LED IPS',
        size:'27"',
        price: 8495.00,
        product_id: 10117,
        category: 'Monitor',
        refresh_rate:'FreeSync 75Hz', 
        port:'VGA HDMI', 
        img_src:'peripherals_images/monitor/27” Monitors/Viewsonic VA2715-H LED.jpg'

    },

    {
        name:'Acer Nitro ED270 Xabmiipx Curve LED',
        size:'27"',
        price: 12660.00,
        product_id: 10118,
        category: 'Monitor',
        refresh_rate:'FreeSync 240Hz', 
        port:'HDMI DP', 
        img_src:'peripherals_images/monitor/27” Monitors/Acer Nitro ED270 Xabmiipx Curve.png'

    },

    {
        name:'LG Ultragear 27GN600-B LED IPS HDR10',
        size:'27"',
        price: 14880.00,
        product_id: 10119,
        category: 'Monitor',
        refresh_rate:'GSYNC 144Hz', 
        port:'HDMI DP', 
        img_src:'peripherals_images/monitor/27” Monitors/LG Ultragear 27GN600-B LED.jpg'

    },

]

export function displayMonitor(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let size_21_header=true;
    let size_24_header=true;
    let size_27_header=true;
    let size_21 = '';
    let size_24 = '';
    let size_27 = '';

    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="size-21"></div>');
    document.getElementById('size-21').insertAdjacentHTML('afterend','<div class="product-row" id="size-24"></div>');
    parent_element.insertAdjacentHTML('beforeend', '<div class="product-row" id="size-27"></div>');

        

        for(let i = 0 ; i < monitor_products.length ; i++){


            product_id = monitor_products[i].product_id;
            name = monitor_products[i].name;
            img_src = monitor_products[i].img_src;
            price = monitor_products[i].price;
            description =  
            monitor_products[i].size + ', ' + 
            monitor_products[i].refresh_rate + ', ' + 
            monitor_products[i].port;
            
            if(monitor_products[i].size == '21.5/22"'){
                if(size_21_header){
                    let size_21_element = document.getElementById('size-21');
                    size_21_element.insertAdjacentHTML('beforebegin','<h1>21.5/22"</h1>');
                    size_21_header=false;
                }
                size_21 += product_HTML(product_id,name,img_src,description,price);
            }

            else if(monitor_products[i].size == '23.8/24"'){
                if(size_24_header){
                    let size_24_element = document.getElementById('size-24');
                    size_24_element.insertAdjacentHTML('beforebegin','<h1>23.8/24"</h1>');
                    size_24_header=false;
                }
                size_24 += product_HTML(product_id,name,img_src,description,price);

            }
            
            else{
                if(size_27_header){
                    let size_27_element = document.getElementById('size-27');
                    size_27_element.insertAdjacentHTML('beforebegin','<h1>27"</h1>');
                    size_27_header=false;
                }

                size_27 += product_HTML(product_id,name,img_src,description,price);
            }
        }
        
        document.querySelector("#size-21").innerHTML = size_21;
        document.querySelector("#size-24").innerHTML = size_24;
        document.querySelector("#size-27").innerHTML = size_27;
    
    
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
