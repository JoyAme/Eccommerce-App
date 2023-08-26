let ShopNow=[
    {
        id:0,
        New:"New",
        instock:5,
        name:'Trouser',
        price: 235,
        desc:"Colorful Pattern Shirts",
        image:'shop/img/product-1-1.jpg',
       
        
    },
    {
        id:1,
        New:"recent",
        instock:5,
        name:'wrist watch',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-1-2.jpg',
       
        
    },
    {
        id:2,
        New:"New",
        instock:5,
        name:'Lady wear',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-10-1.jpg',
       
        
    },
    {
        id:3,
        New:"recent",
        instock:12,
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"shop/img/product-10-2.jpg",    
    },
    {
        id:4,
        New:"New",
        instock:5,
        name:'shirt',
        price: 95,
        desc:"color shirt Tee",
        image:'shop/img/product-11-1.jpg',
       
        
    },
    {
        id:5,
        New:"Luxury",
        instock:19,
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-11-2.jpg',
       
        
    },
    {
        id:6,
        New:"recent",
        instock:8,
        name:'Lady wear',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-12-2.jpg',
       
        
    },
    {
        id:7,
        New:"recent",
        instock:5,
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"shop/img/product-13-1.jpg",    
    },
    {
        id:8,
        New:"New",
        instock:20,
        name:'shirt',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-13-2.jpg',
       
        
    },
    {
        id:9,
        New:"luxury",
        instock:26,
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-1.jpg',
       
        
    },
    {
        id:10,
        New:"fashion",
        instock:27,
        name:'Crocs queen',
        price: 100,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-3.jpg',
       
        
    },
    {
        id:11,
        New:"luxury",
        instock:5,
        name:' Wrist Watch',
        price: 445,
        desc:"lorem is good sheat wear",
        image:"shop/img/showcase-img-5.jpg",    
    },
    {
        id:12,
        New:"fashion",
        instock:5,
        name:'Crocs',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-8.jpg',
       
        
    },
    {
        id:13,
        New:"recent",
        instock:15,
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-9.jpg',
       
        
    },
    {
        id:14,
        New:"New",
        instock:5,
        name:'crocs beauty',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-6.jpg',
       
        
    },
    {
        id:15,
        New:"recent",
        instock:15,
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"shop/img/product-7-2.jpg",    
    },
]




let goods= document.querySelector('.card')
let cart= document.querySelector('.class')
const card= document.querySelector('.carrd')
const cartEl= document.querySelector('.cart-L')
let Add=document.querySelector('.Add')
let count=document.querySelector('.count')
let Total=document.querySelector('.Total')


let generateItems = (id) =>{
    ShopNow.forEach((shop)=>{
       
         goods.innerHTML+= ` 
        <div class='card-1' >
        <h4 class="btn-up">${shop.New}</h4>
        <div class='catee'>
        <img src="${shop.image}" alt="cate" class="cate"/>
        </div>
        <h3 class="name-cate">${shop.name}</h3>
        
        <span class="yellow"></span>
        <div class="amount">
            <h3 class="amount1">$${shop.price}</h3>
            <i class="fa fa-cart-plus class" id="class"   onclick="addToCart(${shop.id})"aria-hidden="true"></i>
        </div> 

        </div>`; 
        
        if(shop.New === 'New' ){
            document.querySelector('.btn-up').style.backgroundColor= "green";
        }else if(shop.New === "recent")
        {
            document.querySelector('.btn-up').style.backgroundColor="red"
        }
       
    })
    
}
generateItems()

function upDate(){
    shoppingCart()
    subTotal()
    localStorage.setItem('CART',JSON.stringify(Basket))
   
 }




let Basket= JSON.parse(localStorage.getItem("CART"))|| [];


let addToCart= (id) => {  

    if(Basket.some((items)=> items.id === id)){
        increase("plus", id)
    }else{
        let get= ShopNow.find((shop)=> shop.id === id);
        Basket.push({
            ...get,
            Items:1,
        });
       
           console.log(Basket);
    }
    upDate()
}



let shoppingCart=() =>{
    card.innerHTML=""
    Basket.forEach((item)=>{
        card.innerHTML += ` 
        <div>
        <div class="card2" >
            <div class="images" onclick="removeItem(${item.id})">
            <img src="${item.image}" alt="${item.name}"class="cate1"/>
            </div>

            <div>
            <h2 class="namey1">${item.desc}</h2>
            <div class="amount">
                <h3 class="amount2">$${item.price}</h3>
            </div>
            <div class="buttons">
                <button class="btnn plus" onclick="increase('plus',${item.id})">+</button>
                <h6 class="count">${item.Items}</h6>
                <button class="btnn minus" onclick="increase('minus',${item.id})">-</button>
            </div>
            
        </div>  
       </div>
                
                
        ` 
    })
   
}


 
function increase(action,id){
    Basket = Basket.map((item)=>{

    let Goods=item.Items
       
        if(item.id === id){
            if(action === "plus" && Goods < item.instock){
               Goods++;
               
            }else if(action == "minus" && Goods > 1)
            {

             Goods--;
            
            }
        }
        return{
            ...item,
            Items:Goods,    
        }


   });
   upDate();
   console.log(Basket)
}
        
    
// SUBTOTAL OF ORDER
function subTotal(){
    let totalItem=0,
    TotalCartItem=0

  Basket.forEach((item) => {
       totalItem+= item.price * item.Items
       TotalCartItem+=item.Items
    })


      Total.innerHTML=`<h4>SUBTOTAL: (${TotalCartItem}) :  $${totalItem}</h4>`
 }

  function removeItem(id){
    Basket=Basket.filter((item)=>item.id !==id)
    upDate()
  }









      
     








