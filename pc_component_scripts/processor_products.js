
export const processor_products = [

    // INTEL
    {
        brand: 'Intel',  
        variant: 'Pentium G6400 2C/4T 4.0ghz 4mb UHD610 58W',
        socket: 'LGA1200',
        product_id: 10018,
        category: 'Processor',
        price: 3595.00,
        img_src:'pc_component_images/processor/intel/IntelPentiumG6400.jpg'
    }
    ,

    {
        brand: 'Intel',  
        variant: 'Pentium Gold G7400 2C/2T 4mb UHD710 46W',
        socket: 'LGA1700',
        product_id: 10019,
        category: 'Processor',
        price: 4495.00,
        img_src:'pc_component_images/processor/intel/IntelPentiumG7400.jpg'
    }
    ,

    {
        brand: 'Intel',  
        variant: 'Core i3 10100 4C/8T 3.6-4.3ghz 6mb UHD630 65W',
        socket: 'LGA1200',
        product_id: 10020,
        category: 'Processor',
        price: 6550.00,
        img_src:'pc_component_images/processor/intel/IntelCorei310100.jpg'
    }
    ,

    {
        brand: 'Intel',  
        variant: 'Core i3 12100 4C/8T 12mb UHD730 125W',
        socket: 'LGA1700',
        product_id: 10021,
        category: 'Processor',
        price: 7550.00,
        img_src:'pc_component_images/processor/intel/IntelCorei312100.jpg'
    }
    ,

    {
        brand: 'Intel',  
        variant: 'Core i5 11400 6C/12T 2.6-4.4ghz 12mb UHD730 65W',
        socket: 'LGA1200',
        product_id: 10022,
        category: 'Processor',
        price: 10500.00,
        img_src:'pc_component_images/processor/intel/IntelCorei511400.jpg'
    }
    ,

    {
        brand: 'Intel',  
        variant: 'Core i5 12600 5C/12T 18mb UHD770 125W',
        socket: 'LGA1700',
        product_id: 10023,
        category: 'Processor',
        price: 13500.00,
        img_src:'pc_component_images/processor/intel/IntelCorei512600.jpg'
    }
    ,

    {
        brand: 'Intel',  
        variant: 'Core i7 11700 8C/16T 2.5-4.9ghz 12mb UHD750 65W',
        socket: 'LGA1200',
        product_id: 10024,
        category: 'Processor',
        price: 18995.00,
        img_src:'pc_component_images/processor/intel/IntelCorei711700.jpg'
    }
    ,

    {
        brand: 'Intel',  
        variant: 'Core i7 12700KF 12C/20T 25mb 125W',
        socket: 'LGA1700',
        product_id: 10025,
        category: 'Processor',
        price: 21995.00,
        img_src:'pc_component_images/processor/intel/IntelCorei712700KF.jpg'
    }
    ,
    {
        brand: 'Intel',  
        variant: 'Core i9 12900KS 16C/24T 30mb 125W',
        socket: 'LGA1700',
        product_id: 10026,
        category: 'Processor',
        price: 40995.00,
        img_src:'pc_component_images/processor/intel/IntelCorei912900KS.jpg'
    }
    ,


    //AMD
    {
        brand: 'AMD',  
        variant: 'Ryzen 3 3200G 4C/4T 3.6-4.0ghz 6mb 65W',
        socket: 'AM4',
        product_id: 10027,
        category: 'Processor',
        price: 7995.00,
        img_src: 'pc_component_images/processor/amd/AMDRyzen33200G.jpg'
    }
    ,

    
    {
        brand: 'AMD',  
        variant: 'Ryzen 5 5600X 6C/12T 3.7-4.6ghz 35mb 65W, Box, Wraith Stealth',
        socket: 'AM4',
        product_id: 10028,
        category: 'Processor',
        price: 12995.00,
        img_src: 'pc_component_images/processor/amd/AMDRyzen55600X.jpg'
    }
    ,

    
    {
        brand: 'AMD',  
        variant: 'Ryzen 7 5800X 8C/16T 3.8-4.7ghz 36mb 105W, Box',
        socket: 'AM4',
        product_id: 10029,
        category: 'Processor',
        price: 18995.00,
        img_src: 'pc_component_images/processor/amd/AMDRyzen75800X.jpg'
    }
    ,

    
    {
        brand: 'AMD',  
        variant: 'Ryzen 9 5950X 16C/32T 3.4-4.9ghz 72mb 105W, Box',
        socket: 'AM4',
        product_id: 10030,
        category: 'Processor',
        price: 32995.00,
        img_src: 'pc_component_images/processor/amd/AMDRyzen95950X.jpg'
    }
    

]  

export function displayProcessor(){

    
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let intel_header = true;
    let amd_header = true;

    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="intel"></div>');
    document.getElementById('intel').insertAdjacentHTML('afterend','<div class="product-row" id="amd"></div>');

   let intelHTML = '';
   let amdHTML = '';
    
        for(let i = 0 ; i < processor_products.length ; i++){


            product_id = processor_products[i].product_id;
            name = processor_products[i].brand + ' ' + processor_products[i].variant;
            img_src = processor_products[i].img_src;
            description = processor_products[i].socket;
            price = processor_products[i].price;


            if(processor_products[i].brand == 'Intel'){
                if(intel_header){
                    let intel_element = document.getElementById('intel');
                    intel_element.insertAdjacentHTML('beforebegin','<h1>Intel</h1>');
                    intel_header=false;
                }
                intelHTML += product_HTML(product_id,name,img_src,description,price);
            }
            
            else{
                if(amd_header){
                    let amd_element = document.getElementById('amd');
                    amd_element.insertAdjacentHTML('beforebegin','<h1>AMD</h1>');
                    amd_header=false;
                }

                amdHTML += product_HTML(product_id,name,img_src,description,price);
            }
        }
        
        document.querySelector("#intel").innerHTML = intelHTML;
        document.querySelector("#amd").innerHTML = amdHTML;
    
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