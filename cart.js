let shopping=document.querySelector('.shopping');
let cartt=document.getElementById('carty1');

let Basket = JSON.parse(localStorage.getItem('DATA')) || [];



let calculate= ()=>{
    let count=document.querySelector('.count');
    count.innerHTML= Basket.map((x)=> x.item).reduce((x,y) => x + y, 0);

}
calculate();

let Generate = () =>{
    if(Basket.length !== 0){
        return cartt.innerHTML= Basket.map((x)=>{
            // console.log(x)
            let { id, item }= x;
            let searchit= shoppingCart.find((y)=> y.id === id) || []
            return `
        <div class="cart-shop">
            <img  width="110"src="${searchit.image}" alt="image" class="img-bag"/>
           <div class="details">
            <div class="detaile">
                <h5 class="amount1">
                <p>${searchit.name}</p>
                <p>$${searchit.price}</p>
                </h5>
                <button onclick="removeItem(${id})">&</button>
            </div>
            <div class="buttons">
                        <button onclick="increase(${id})">+</button>
                        <h6 id=${id}>${item}</h6>
                        <button  onclick="decrease(${id})" class="decrease">-</button>        
            </div>
            <h3>$${item * searchit.price}</h3>
            </div>   
        </div>       
            `
        }).join(""); 
    }
    else{
       cartt.innerHTML=``
       shopping.innerHTML=`
       <h2>Cart is Empty</h2>
        <a href="index.html">
      <button class="shopping-2">Back to Home</button></a>
       `
    }
}
Generate();




let increase =(id)=>{
    let pickItem = id;
   let search= Basket.find((z)=>z.id === pickItem.id)
    if(search === undefined)
    {Basket.push({id:pickItem.id,
   item:1
   })
}else search.item += 1;
Generate();

   update(pickItem.id)
   localStorage.setItem('DATA',JSON.stringify(Basket))
}

// increase()
let decrease =(id)=>{
let pickItem=id
let search= Basket.find((z)=>z.id === pickItem.id)
if(search === undefined )return;
else if(search.item === 0)return;
else {search.item -= 1;}
update(pickItem.id)
Basket=Basket.filter((x)=> x.item !== 0);
Generate();

localStorage.setItem('DATA',JSON.stringify(Basket))
}

let update =(id)=>{
let search= Basket.find((x) => x.id === id)
// console.log(search.item)
document.getElementById(id).innerHTML=search.item
calculate()
sumup();
}
 let removeItem=(id)=>{
    let itemSelected= id;
    console.log(itemSelected.id)
    let filterit= Basket.filter((x) => x.id !== itemSelected.id)
    //  Cart= Basket.filter((x) => x.id !== itemSelected.id)
    
     Generate();
     sumup();
   
     localStorage.setItem('DATA',JSON.stringify(filterit))
    
 };

 let clearCart=()=>{
    Basket=[]
    Generate();
    calculate();
    localStorage.setItem('DATA',JSON.stringify(Basket))
 }

 let sumup=(id)=>{
   if(Basket !== id){
    let sumit = Basket.map((x)=>{
        let {item, id}=x;
        let amount= shoppingCart.find((y)=> y.id === id) || []
        return item * amount.price
    }).reduce((x,y)=> x+y, 0);
 
    shopping.innerHTML=`
    <H4>Total price: ${sumit}</h4>
    <div>
    <button>load</button>
    <button onclick="clearCart()">clear cart</button>
    </div>
    `

   }
   else return;
 }
 sumup();
