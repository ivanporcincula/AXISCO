export const pc_case_products = [
    {
        name: 'Tecware Forge M2 Mesh TG',
        price: 1850.00,
        product_id: 10066,
        category: 'PC Case',
        specifications: {
            tower: 'mATX',
            color: 'White',
            fan_slots: '3x120mm',

        },

        img_src: 'pc_component_images/pc case/Tecware Forge M2 Mesh TG white.png',
    },

    {
        name: 'Tecware Forge M aRGB TG',
        price: 2480.00,
        product_id: 10067,
        category: 'PC Case',
        specifications: {
            tower: 'mATX',
            color: 'Black',
            fan_slots: '4x120mm',

        },

        img_src: 'pc_component_images/pc case/Tecware Forge M aRGB TG black.png',
    },

    {
        name: 'NZXT H510 TG',
        price: 3750.00,
        product_id: 10068,
        category: 'PC Case',
        specifications: {
            tower: 'ATX',
            color: 'Matte Black',
            fan_slots: '2x120mm',

        },

        img_src: 'pc_component_images/pc case/NZXT H510 TG.png',
    },


    {
        name: 'Lian li Lancool 205 Mesh TG',
        price: 3820.00,
        product_id: 10069,
        category: 'PC Case',
        specifications: {
            tower: 'ATX',
            color: 'Black',
            fan_slots: '2x140mm',

        },

        img_src: 'pc_component_images/pc case/Lian li Lancool 205 Mesh TG.jpg',
    },

    {
        name: 'Asus TUF GT301 aRGB',
        price: 4895.00,
        product_id: 10070,
        category: 'PC Case',
        specifications: {
            tower: 'ATX',
            color: 'Black',
            fan_slots: '4x120mm',

        },

        img_src: 'pc_component_images/pc case/Asus TUF GT301.png',
    },
]

export function displayPCCase(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;

    let pc_case_header = true;

        
    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="pc-case"></div>');
    

        

        for(let i = 0 ; i < pc_case_products.length ; i++){


            product_id = pc_case_products[i].product_id;
            name = pc_case_products[i].name;
            img_src = pc_case_products[i].img_src;
            description = pc_case_products[i].specifications.tower + ', ' + 
            pc_case_products[i].specifications.color + ', ' + 
            pc_case_products[i].specifications.fan_slots ;
            price = pc_case_products[i].price;

            if(pc_case_header){
                let pc_case_element = document.getElementById('pc-case');
                pc_case_element.insertAdjacentHTML('beforebegin','<h1>PC Case</h1>')
                pc_case_header=false;
            }

            productHTML += product_HTML(product_id,name,img_src,description,price);

        }

        document.querySelector("#pc-case").innerHTML = productHTML;


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

