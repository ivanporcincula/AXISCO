
export const ram_products = [
    {
        name: 'Corsair Vengeance RGB RS, black',
        price: 2470.00,
        product_id: 10037,
        category: 'RAM',
        specifications: {
            dram: 'DDR4',
            size: '8 GB',
            frequency: '3200',
        },

        img_src: 'pc_component_images/ram/CORSAIR VENGEANCE RGB RS 8GB.jpg'
        
    },

    {
        name: 'Corsair Vengeance RGB Pro SL, black',
        price: 4550.00,
        product_id: 10038,
        category: 'RAM',
        specifications: {
            dram: 'DDR4',
            size: '16 GB (dual)',
            frequency: '3200',
        },

        img_src: 'pc_component_images/ram/CORSAIR VENGEANCE RGB PRO SL 16GB DUAL DDR4 3600MHZ.png'
        
    },

    {
        name: 'Corsair Vengeance RGB Pro SL, white',
        price: 4550.00,
        product_id: 10039,
        category: 'RAM',
        specifications: {
            dram: 'DDR4',
            size: '16 GB (dual)',
            frequency: '3200',
        },

        img_src: 'pc_component_images/ram/CORSAIR VENGEANCE RGB PRO SL 16GB (2X8GB) White.jpg'
        
    },

    {
        name: 'Corsair Dominator Platinum RGB, white',
        price: 7380.00,
        product_id: 10040,
        category: 'RAM',
        specifications: {
            dram: 'DDR4',
            size: '16 GB (dual)',
            frequency: '3600',
        },

        img_src: 'pc_component_images/ram/CORSAIR DOMINATOR  PLATINUM RGB 2x16GB.jpg'
        
    },

    {
        name: 'Corsair Dominator Platinum RGB, black',
        price: 7380.00,
        product_id: 10041,
        category: 'RAM',
        specifications: {
            dram: 'DDR4',
            size: '16 GB (dual)',
            frequency: '3600',
        },

        img_src: 'pc_component_images/ram/CORSAIR DOMINATOR PLATINUM RGB 16GB 2X8G 3600MHZ.png'
        
    },
]


export function displayRAM(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let ram_header = true;

        
    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="ram"></div>');
    
        for(let i = 0 ; i < ram_products.length ; i++){


            product_id = ram_products[i].product_id;
            name = ram_products[i].name;
            img_src = ram_products[i].img_src;
            description = ram_products[i].specifications.dram + ', ' + ram_products[i].specifications.size +
                ', ' + ram_products[i].specifications.frequency;
            price = ram_products[i].price;

            if(ram_header){
                let ram_element = document.getElementById('ram');
                ram_element.insertAdjacentHTML('beforebegin','<h1>RAM</h1>')
                ram_header=false;
            }

            productHTML += product_HTML(product_id,name,img_src,description,price);

        }

        document.querySelector("#ram").innerHTML = productHTML;
    
    
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