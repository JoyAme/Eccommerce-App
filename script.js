// const shoppingCart=[
//     {
//         id:'wwrrhbn',
//         name:'shirt',
//         price: 95,
//         desc:"lorem is good sheat wear",
//         image:'images/menshirt.jpg',
       
        
//     },
//     {
//         id:'huscjn',
//         name:'smart shirt',
//         price: 145,
//         desc:"lorem is good sheat wear",
//         image:'images/heels.jpg',
       
        
//     },
//     {
//         id:'obsychbn',
//         name:'Lady wear',
//         price: 300,
//         desc:"lorem is good sheat wear",
//         image:'images/shoe.jpg',
       
        
//     },
//     {
//         id:'wjuvshbn',
//         name:' Tee shirt',
//         price: 245,
//         desc:"lorem is good sheat wear",
//         image:"images/bags.jpg",    
//     },
// ]
let cart= document.getElementById('cart-1');

let Basket= JSON.parse(localStorage.getItem('DATA'))  || []


let generateItems = () =>{
    return cart.innerHTML = shoppingCart.map((z)=>
    {
        let {id,name,price,desc,image}=z
        let search = Basket.find((x) => x.id === id) || [];
        return `<div product-id-${id} class="items">
        <img  width="220"src="${image}" alt="image" class="img-bag"/>
        <div class="details">
            <h2 class="Names">${name}</h2>
            <h4 class="desc">${desc}</h4>
            <div class="amount">
                <h3>$ ${price}</h3>
                <div class="buttons">
                    <button onclick="increase(${id})">+</button>
                    <h6 id=${id}>${search.item=== undefined ? 0 : search.item}</h6>
                    <button  onclick="decrease(${id})" class="decrease">-</button>
                </div>
            </div>
        </div>
        </div> `; 
    }).join("")

}
generateItems()
// ${search.item=== undefined ? 0 : search.item}

 let increase =(id)=>{
         let pickItem = id;
        let search= Basket.find((z)=>z.id === pickItem.id)
         if(search === undefined){
        Basket.push({
        id:pickItem.id,
        item:1
      })
     }else search.item += 1;
  

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


 localStorage.setItem('DATA',JSON.stringify(Basket))
}

let update =(id)=>{
    let search= Basket.find((x) => x.id === id)
    // console.log(search.item)
    document.getElementById(id).innerHTML=search.item
    calculate()
}

let calculate=()=>{
    let count=document.querySelector('.count')
    count.innerHTML= Basket.map((x)=> x.item).reduce((x,y) => x+y,0)
}
calculate()
 