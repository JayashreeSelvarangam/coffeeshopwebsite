
//start//
// function sub() {
//     window.location.href="../../pages/productdetail/productdetail1.html"
    
// }

let container_card;
let img_content_cost_card;
let image_card;
let img_main_card;
let content_cost_card;
let content_card;
let vegimg_card;
let img_veg_card;
let title_card;
let h3_card;
let message_1_card;
let p_1;
let p_star;
let i_card;
let message_2_card;
let p_2;
let costdetail_card;
let cost_card;
let add_item_card;
let a_card;
let button_card;

// const main_img=["../../assets/image/redhatmocha.jpg","../../assets/image/cappacino.jpg","../../assets/image/hazelnutmochacheese.jpg","../../assets/image/carameljava.jpg","../../assets/image/pourover.jpg","../../assets/image/pourover.jpg","../../assets/image/chaitea.jpg","../../assets/image/emperortea.jpg","../../assets/image/coldcold.jpg"]
const veg_img=["../../assets/image/veg.svg"]
// const main_content =[" A decadent mix of cocoa, topped with a playfully crafted Hat..","Dark, Rich in flavour espresso lies in wait under a smoothed...","Hazelnut syrup combined with light cream cheese styled sauce..","Rich Coffee blended with milk, chocolaty chip, caramel syrup....","Pour-over is an accessible way to brew...","Pour-over is a beautifully simple and accessible way to brew...","Black tea infused with cinnamon, clove, and other warming sp...","Receiving plenty of rain during the early spring harvest, th.","Starbucks® Kenya coffee is freshly ground and then steeped f..."]
// const main_names=[" Crunchy Red Hat Mocha","Cappuccino", "Hazelnut Mocha  Frappuccino","Caramel  Frappuccino","Pour over – Christmas Blend","Pour Over - Italian Blend","Chai Tea Latte","Emperor'S Mist Green Tea" ,"Cold Brew Black"]
// const sub_content=[" SHORT(237 ML) .412 Kcal","SHORT(237 ML) .104 Kcal","TALL(354 ML) .491 kcal","TALL(354 ML) .398 kcal","SHORT(237 ML) .- 0 KCAL","SHORT(237 ML) .0 kcal","SHORT(237 ML) .170 kcal","SHORT(237 ML) .0 kcal","TALL() .0 kcal"]
// const link_pages=[ "../../pages/productdetail/productdetail1.html","../../pages/productdetail/product-cappu.html","../../pages/productdetail/product-hazelfrap.html","../../pages/productdetail/product-caramelfrap.html","../../pages/productdetail/product-chris.html","../../pages/productdetail/product-italian.html","../../pages/productdetail/product-chaitea.html"," ../../pages/productdetail/product-emperor.html","../../pages/productdetail/product-coldbrew.html"]
// const cost_items =[ "Rs 404" ," Rs 273","Rs 474","Rs 414","Rs 494","Rs 324","Rs 273","Rs 299","Rs.304"]


const list_names=[
{
    "main_img":"../../assets/image/redhatmocha.jpg",
    "main_content":" A decadent mix of cocoa, topped with a playfully crafted Hat..",
    "main_names":" Crunchy Red Hat Mocha",
     "sub_content":" SHORT(237 ML) .412 Kcal",
     "link_pages": "../../pages/productdetail/productdetail1.html",
     "cost_items":"Rs 404"
},
{
    "main_img":"../../assets/image/cappacino.jpg",
    "main_content":"Dark, Rich in flavour espresso lies in wait under a smoothed...",
    "main_names":"Cappuccino",
     "sub_content":"SHORT(237 ML) .104 Kcal",
     "link_pages":"../../pages/productdetail/product-cappu.html",
     "cost_items":" Rs 273"
},

{
    "main_img":"../../assets/image/hazelnutmochacheese.jpg",
    "main_content":"Hazelnut syrup combined with light cream cheese styled sauce..",
    "main_names":"Hazelnut Mocha  Frappuccino",
     "sub_content":"TALL(354 ML) .491 kcal",
     "link_pages":"../../pages/productdetail/product-hazelfrap.html",
     "cost_items":"Rs 474"
},

{
    "main_img":"../../assets/image/carameljava.jpg",
    "main_content":"Rich Coffee blended with milk, chocolaty chip, caramel syrup....",
    "main_names":"Caramel  Frappuccino",
     "sub_content":"TALL(354 ML) .398 kcal",
     "link_pages":"../../pages/productdetail/product-caramelfrap.html",
     "cost_items":"Rs 414"
},

{
    "main_img":"../../assets/image/pourover.jpg",
    "main_content":"Pour-over is an accessible way to brew...",
    "main_names":"Pour over – Christmas Blend",
     "sub_content":"SHORT(237 ML) .- 0 KCAL",
     "link_pages":"../../pages/productdetail/product-chris.html",
     "cost_items":"Rs 494"
},

{
    "main_img":"../../assets/image/pourover.jpg",
    "main_content":"Pour-over is a beautifully simple and accessible way to brew...",
    "main_names":"Pour Over - Italian Blend",
     "sub_content":"SHORT(237 ML) .0 kcal",
     "link_pages":"../../pages/productdetail/product-italian.html",
     "cost_items":"Rs 324"
},

{
    "main_img":"../../assets/image/chaitea.jpg",
    "main_content":"Black tea infused with cinnamon, clove, and other warming sp...",
    "main_names":"Chai Tea Latte",
     "sub_content":"SHORT(237 ML) .170 kcal",
     "link_pages":"../../pages/productdetail/product-chaitea.html",
     "cost_items":"Rs 273"
},

{
    "main_img":"../../assets/image/emperortea.jpg",
    "main_content":"Receiving plenty of rain during the early spring harvest, th.",
    "main_names":"Emperor'S Mist Green Tea",
     "sub_content":"SHORT(237 ML) .0 kcal",
     "link_pages":" ../../pages/productdetail/product-emperor.html",
     "cost_items":"Rs 299"
},

{
    "main_img":"../../assets/image/coldcold.jpg",
    "main_content":"Starbucks® Kenya coffee is freshly ground and then steeped f...",
    "main_names":"Cold Brew Black",
     "sub_content":"TALL() .0 kcal",
     "link_pages":"../../assets/image/coldcold.jpg",
     "cost_items":"Rs 299"
}
]













for(i=0;i<6;i++){


container_card =document.createElement("div");
container_card.setAttribute("class","beverage-container");
console.log(container_card);

img_content_cost_card =document.createElement("div");
img_content_cost_card.setAttribute("class","beverage-img-content-cost");
container_card.append(img_content_cost_card)

image_card = document.createElement("div");
image_card.setAttribute("class","beverage-image");
img_content_cost_card.append(image_card);

img_main_card = document.createElement("img");
img_main_card.setAttribute("src",list_names[i]["main_img"]);
img_main_card.setAttribute("alt"," ")
image_card.append(img_main_card);

content_cost_card = document.createElement("div");
content_cost_card.setAttribute("class","beverage-content-cost");
img_content_cost_card.append(content_cost_card);

content_card = document.createElement("div");
content_card.setAttribute("class","beverage-content");
content_cost_card.append(content_card)

vegimg_card = document.createElement("div");
vegimg_card.setAttribute("class","beverage-vegimg");
content_card.append(vegimg_card);

img_veg_card = document.createElement("img");
img_veg_card.setAttribute("src",veg_img[0]);
img_veg_card.setAttribute("alt"," ");
vegimg_card.append(img_veg_card);

title_card = document.createElement("div");
title_card.setAttribute("class","beverage-title");
content_card.append(title_card);

h3_card = document.createElement("h3");
h3_card.innerText=list_names[i]["main_names"];
title_card.append(h3_card);


message_1_card= document.createElement("div");
message_1_card.setAttribute("class","beverage-message-1");
content_card.append(message_1_card);



p_1 = document.createElement("p");
p_1.setAttribute("class","p-1");
p_1.innerText=list_names[i]["sub_content"];
message_1_card.append(p_1);

p_star = document.createElement("p");
p_star.setAttribute("class","star");
p_star.innerText="bestseller";
message_1_card.append(p_star);

i_card = document.createElement("i");
i_card.setAttribute("class","fa-solid fa-star");
p_star.append(i_card);

message_2_card = document.createElement("div");
message_2_card.setAttribute("class","beverage-message-2");
content_card.append(message_2_card);


p_2 = document.createElement("p");
p_2.setAttribute("class","p-2");
p_2.innerText=list_names[i]["main_content"];
message_2_card.append(p_2);

costdetail_card = document.createElement("div");
costdetail_card.setAttribute("class","beverage-costdetail");
content_cost_card.append(costdetail_card);

cost_card = document.createElement("div");
cost_card.setAttribute("class","cost");
cost_card.innerText=list_names[i]["cost_items"];
costdetail_card.append(cost_card);

add_item_card = document.createElement("div");
add_item_card.setAttribute("class","add-item");
costdetail_card.append(add_item_card);

a_card = document.createElement("a");
a_card.setAttribute("href",list_names[i]["link_pages"]);
add_item_card.append(a_card)

button_card = document.createElement("button");
button_card.innerText="add item";
a_card.append(button_card);

document.querySelector("div.beverages").append(container_card);

}





