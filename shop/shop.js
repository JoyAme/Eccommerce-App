let ShopNow=[
    {
        id:'111',
        name:'Trouser',
        price: 235.53,
        desc:"Colorful Pattern Shirts",
        image:'img/product-1-1.jpg',
       
        
    },
    {
        id:'huscjn',
        name:'wrist watch',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'img/product-1-2.jpg',
       
        
    },
    {
        id:'obsychbn',
        name:'Lady wear',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'img/product-10-1.jpg',
       
        
    },
    {
        id:'quveshbn',
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"img/product-10-2.jpg",    
    },
    {
        id:'ghirhbn',
        name:'shirt',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'img/product-11-1.jpg',
       
        
    },
    {
        id:'unjk',
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'img/product-11-2.jpg',
       
        
    },
    {
        id:'vdgu',
        name:'Lady wear',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'img/product-12-2.jpg',
       
        
    },
    {
        id:'ernbk',
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"img/product-13-1.jpg",    
    },
    {
        id:'nxjid',
        name:'shirt',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'img/product-13-2.jpg',
       
        
    },
    {
        id:'ojhygy',
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'img/showcase-img-1.jpg',
       
        
    },
    {
        id:'ijajag',
        name:'Crocs queen',
        price: 100,
        desc:"lorem is good sheat wear",
        image:'img/showcase-img-3.jpg',
       
        
    },
    {
        id:'hhbsa',
        name:' Wrist Watch',
        price: 445,
        desc:"lorem is good sheat wear",
        image:"img/showcase-img-5.jpg",    
    },
    {
        id:'etyjm',
        name:'Crocs',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'img/showcase-img-8.jpg',
       
        
    },
    {
        id:'gcgbn',
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'img/showcase-img-9.jpg',
       
        
    },
    {
        id:'jujhjbn',
        name:'crocs beauty',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'img/showcase-img-6.jpg',
       
        
    },
    {
        id:'saffbn',
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"img/product-7-2.jpg",    
    },
]




let goods= document.querySelector('.card')

let Basket=[]

let generateItems = () =>{
    return goods.innerHTML = ShopNow.map((z)=>
    {
        let {id,name,price,desc,image}=z
        let search = Basket.find((x) => x.id === id) || [];
        return ` 
        <div class='card-1' id=${id}>
        <h4 class="btn-up">New</h4>
        <div class='catee'>
        <img src="${image}" alt="cate" class="cate"/>
        </div>
        <h3 class="name-cate">${name}</h3>
        <h2 class="namey">${desc}</h2>
        <span class="yellow"></span>
        <div class="amount">
            <h3 class="amount1">$${price}</h3>

        </div> 
        </div>`; 
    }).join("")

}
generateItems()