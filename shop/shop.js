let ShopNow=[
    {
        id:0,
        name:'Trouser',
        price: 235.53,
        desc:"Colorful Pattern Shirts",
        image:'shop/img/product-1-1.jpg',
       
        
    },
    {
        id:1,
        name:'wrist watch',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-1-2.jpg',
       
        
    },
    {
        id:2,
        name:'Lady wear',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-10-1.jpg',
       
        
    },
    {
        id:3,
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"shop/img/product-10-2.jpg",    
    },
    {
        id:4,
        name:'shirt',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-11-1.jpg',
       
        
    },
    {
        id:5,
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-11-2.jpg',
       
        
    },
    {
        id:6,
        name:'Lady wear',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-12-2.jpg',
       
        
    },
    {
        id:7,
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"shop/img/product-13-1.jpg",    
    },
    {
        id:8,
        name:'shirt',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'shop/img/product-13-2.jpg',
       
        
    },
    {
        id:9,
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-1.jpg',
       
        
    },
    {
        id:10,
        name:'Crocs queen',
        price: 100,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-3.jpg',
       
        
    },
    {
        id:11,
        name:' Wrist Watch',
        price: 445,
        desc:"lorem is good sheat wear",
        image:"shop/img/showcase-img-5.jpg",    
    },
    {
        id:12,
        name:'Crocs',
        price: 95,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-8.jpg',
       
        
    },
    {
        id:13,
        name:'smart shirt',
        price: 145,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-9.jpg',
       
        
    },
    {
        id:14,
        name:'crocs beauty',
        price: 300,
        desc:"lorem is good sheat wear",
        image:'shop/img/showcase-img-6.jpg',
       
        
    },
    {
        id:15,
        name:' Tee shirt',
        price: 245,
        desc:"lorem is good sheat wear",
        image:"shop/img/product-7-2.jpg",    
    },
]




let goods= document.querySelector('.card')
let cart= document.querySelector('.class')
const card= document.querySelector('.shop-cart')
const cartEl= document.querySelector('.cart-L')
let Add=document.querySelector('.Add')
let count=document.querySelector('.count')



let generateItems = (id) =>{
    ShopNow.forEach((shop)=>{
         goods.innerHTML+= ` 
        <div class='card-1' >
        <h4 class="btn-up">New</h4>
        <div class='catee'>
        <img src="${shop.image}" alt="cate" class="cate"/>
        </div>
        <h3 class="name-cate">${shop.name}</h3>
        <h2 class="namey">${shop.desc}</h2>
        <span class="yellow"></span>
        <div class="amount">
            <h3 class="amount1">$${shop.price}</h3>
            <i class="fa fa-cart-plus class" id="class" "  onclick="addToCart(${shop.id})"aria-hidden="true"></i>
        </div> 
   


        </div>`; 
    })

}
generateItems()




//     let update =(id)=>{
//         let search= Basket.find((x) => x.id === id)
//         console.log(search.item)
//         document.getElementById('.cart-L').innerHTML=search.item
        
//     }


let Basket=[]

let addToCart= (id) => {  
    if(Basket.some((items)=> items.id === id)){
        alert('ALREADY IN BASKET')
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


function upDate(){
    shoppingCart()
   
}



// function CountItem (action,id){
//     ShopNow.map((item)=> {
//         if(action === "increase"){
//             item.Items++
//         }else(action === "decrease")
//         {
//             item.Items--
//         }
    
//     })
    
// }



// let cartCount=(id)=>{
//     cartEl.innerHTML="";
//     let get= ShopNow.find((shopy)=> shopy.id === id);
//         Basket.push(get);
//       console.log(Basket)
   
// }


let shoppingCart=() =>{
    card.innerHTML=""
    Basket.forEach((item)=>{
        card.innerHTML += ` 
        <div>
        <div class="card2">
            <div>
            
            <img src="${item.image}" alt="${item.name}"class="cate1"/>
            </div>
            <div>
           
            <h2 class="namey1">${item.desc}</h2>
            <div class="amount">
                <h3 class="amount2">$${item.price}</h3>
            </div>
            <div class="buttons">
                <button class="Add" onclick="increase()">+</button>
                <h6 class="count">${item.Items}</h6>
                <button class="decrease" onclick="decrease()">-</button>
            </div>
            
        </div>
                
                </div>
                
                <h1 class="total">Total : 200000</h1>
        ` 
    })
}
shoppingCart()

// let increase=(id)=>{
//     let searchIt= Basket.find((item)=> item.id === id)
    
//         if(searchIt === id){
//             Basket.push({
            
//             items:1
//           })
//          }else searchIt.items += 1;
        
        
  
//    console.log(searchIt)
// }
// increase()





// let increase =(id)=>{
//     console.log('done')
//     Basket.find((tems)=>{
      
// }
// increase()

    //   let addToCart= function(){
    //      console.log('clciked')
    //      return  card.innerHTML=` 
    //      <div class="card2">
    //          <div>
    //          <h4 id='' class="btn-up1">New</h4>
    //          <img src="img/category-7.jpg" alt="cate" class="cate1"/>
    //          </div>
    //          <div>
            
    //          <h2 class="namey1">Colorful Pattern Shirts</h2>
    //          <span class="yellow"></span>
    //          <div class="amount">
    //              <h3 class="amount2">$234.85</h3>
    //          </div>
    //          <div class="buttons">
    //              <button >+</button>
    //              <h6 class="count">0</h6>
    //              <button class="decrease">-</button>
    //          </div>
    //              </div>
 
    //      ` 
    //   }

      
     








