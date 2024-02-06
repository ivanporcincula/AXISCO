export const storage_products = [
    
    //SSD
    {
        
        storage_type: 'SSD',
        name: 'Kingston A400 SATA',
        category: 'Storage',
        size: '240 GB',
        price: 1895.00,
        product_id:10042,
        img_src:'pc_component_images/storage/ssd/KINGSTON A400 SATA 240GB SSD.png'
    },

    {
        
        storage_type: 'SSD',
        name: 'Patriot P310 NVMe Gen3',
        category: 'Storage',
        size: '480 GB',
        price: 2980.00,
        product_id:10043,
        img_src:'pc_component_images/storage/ssd/Patriot P310 480GB M.2 NVMe SSD.jpg'
    },

    {     
        storage_type: 'SSD',
        name: 'Samsung 970 EVO PLUS NVMe Gen3',
        category: 'Storage',
        size: '1 TB',
        price: 7500.00,
        product_id:10044,
        img_src:'pc_component_images/storage/ssd/SAMSUNG 970 EVO Plus M.2 SSD 1TB.jpg'
    },

    {
        storage_type: 'SSD',
        name: 'WD Black SN750SE NVMe PCIe Gen4',
        category: 'Storage',
        size: '500 GB',
        price: 4095.00,
        product_id:10045,
        img_src:'pc_component_images/storage/ssd/WESTERNDIGITALM.2BLACKSN770NVMeGen4_b24a49c7-7c2d-4bf4-922c-54018c64c89d_1024x1024.jpg'
    },

    

    //HDD

    {
        storage_type: 'HDD',
        name: 'Seagate Barracuda, 64mb 7200rpm',
        category: 'Storage',
        size: '1 TB',
        price: 1895.00,
        product_id:10046,
        img_src:'pc_component_images/storage/hdd/SEAGATE 1TB BARRACUDA HDD ST1000LM048.jpg'
    },

    {
        storage_type: 'HDD',
        name: 'WD Black, 64mb 7200rpm',
        category: 'Storage',
        size: '2 TB',
        price: 7230.00,
        product_id:10047,
        img_src:'pc_component_images/storage/hdd/WD BLACK 2TB WD2003FZEX.jpg'
    },

    {
        storage_type: 'HDD',
        name: 'WD Blue, 64mb 5400rpm',
        category: 'Storage',
        size: '14 TB',
        price: 5760.00,
        product_id:10048,
        img_src:'pc_component_images/storage/hdd/WD 4TB Blue HDD WD40EZAZ.jpg'
    },

    {
        storage_type: 'HDD',
        name: 'Seagate Ironwolf, for NAS, 256mb 5400rpm',
        category: 'Storage',
        size: '6 TB',
        price: 10450.00,
        product_id:10049,
        img_src:'pc_component_images/storage/hdd/Seagate IronWolf 6 TB.png'
    }

    
]

export function displayStorage(){

    let productHTML='';
    let product_id = '';
    let name = '';
    let img_src = '';
    let description = '';
    let price = 0;
    let hdd_header = true;
    let ssd_header = true;
    
    let SSD = '';
    let HDD = '';

    document.getElementById('page-product').innerHTML = "";
    let parent_element = document.getElementById('page-product');
    parent_element.insertAdjacentHTML('afterbegin', '<div class="product-row" id="ssd"></div>');
    document.getElementById('ssd').insertAdjacentHTML('afterend','<div class="product-row" id="hdd"></div>');
    // parent_element.insertAdjacentHTML('beforeend', '<div class="product-row" id="am4"></div>');

        for(let i = 0 ; i < storage_products.length ; i++){


            product_id = storage_products[i].product_id;
            name = storage_products[i].name;
            img_src = storage_products[i].img_src;
            description = storage_products[i].storage_type + ', ' + 
            storage_products[i].size;
            price = storage_products[i].price;

            if(storage_products[i].storage_type == 'SSD'){
                if(ssd_header){
                    let ssd_element =  document.getElementById('ssd');
                    ssd_element.insertAdjacentHTML('beforebegin','<h1>SSD</h1>')
                    ssd_header = false;
                }
                SSD += product_HTML(product_id,name,img_src,description,price);
            }
            else{
                if(hdd_header){
                    let hdd_element =  document.getElementById('hdd');
                    hdd_element.insertAdjacentHTML('beforebegin','<h1>HDD</h1>')
                    hdd_header = false;
                }
                HDD += product_HTML(product_id,name,img_src,description,price);
            }


            document.querySelector("#ssd").innerHTML = SSD;
            document.querySelector("#hdd").innerHTML = HDD;
            
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
