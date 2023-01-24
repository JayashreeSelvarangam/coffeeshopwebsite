// //  <div class="inc-dec-button">
// // <button class="inc-dec" >
// //     <span class="minus"> <i class="fa-solid fa-minus"></i></span><span>0</span><span class="plus"><i class="fa-solid fa-plus"></i></span>
// //     </button>
// // </div>
// // <div class="add-item-cart">
// // <a href="../../pages/add to cart/addtocart.html"><button class="btn-button" id="btn-4">Add to the cart</button></a>
// </div> 
let row_card;
let image_card;
let image_main_card;
let content_card;
let h3_card;
let p_card;
let p1_card;
let p2_card;
let button_card;
let size_card;
let btn1_card;
let btn2_card;
let btn3_card;
let inc_dec_button_card;
let inc_dec_card;
let minus_card;


row_card=document.createElement("div");
row_card.setAttribute("class","row");
console.log(row_card);

image_card=document.createElement("div")
image_card.setAttribute("class","image")
row_card.append(image_card)

image_main_card=document.createElement("img")
image_main_card.setAttribute("src","../../assets/image/vanila.jpg");
image_card.append(image_main_card)

content_card=document.createElement("div");
content_card.setAttribute("class","content");
row_card.append(content_card);

h3_card=document.createElement("h3");
h3_card.setAttribute("class","heading");
h3_card.innerText="Vanilla Caffe Latte";
content_card.append(h3_card);

p_card=document.createElement("p");
p_card.setAttribute("class","calorie");
p_card.innerText="SHORT(237 ML) .125 kcal";
content_card.append(p_card);


p1_card=document.createElement("p");
p1_card.setAttribute("class","detail");
p1_card.innerText="Our dark, rich espresso balanced with vanilla flavored syrup, steamed milk and a light layer of foam.";
content_card.append(p1_card);

p2_card=document.createElement("p");
p2_card.setAttribute("class","cost");
p2_card.innerText="Rs.244";
content_card.append(p2_card);

button_card=document.createElement("div");
button_card.setAttribute("class","buttons");
content_card.append(button_card);

size_card=document.createElement("div");
size_card.setAttribute("class","size");
button_card.append(size_card);

btn1_card=document.createElement("button");
btn1_card.setAttribute("class","btn-button");
btn1_card.setAttribute("id","btn-1");
btn1_card.innerText="tall"
size_card.append(btn1_card);


btn2_card=document.createElement("button");
btn2_card.setAttribute("class","btn-button");
btn2_card.setAttribute("id","btn-2");
btn2_card.innerText="medium"
size_card.append(btn2_card);

btn3_card=document.createElement("button");
btn3_card.setAttribute("class","btn-button");
btn3_card.setAttribute("id","btn-3");
btn3_card.innerText="short"
size_card.append(btn3_card);

 inc_dec_button_card=document.createElement("div");
 inc_dec_button_card.setAttribute("class","inc-dec-button");
button_card.append(inc_dec_button_card);

inc_dec_card=document.createElement("button");
inc_dec_card.setAttribute("class","inc_dec");
inc_dec_button_card.append(inc_dec_card);

minus_card=document.createElement("span");
minus_card.setAttribute("class","minus");
inc_dec_card.append(minus_card);

i1_card = document.createElement("i");
i1_card.setAttribute("class","fa-solid fa-minus");
minus_card.append(i1_card);

volume_card=document.createElement("span");
volume_card.setAttribute("class","volume");
volume_card.innerText="0";
inc_dec_card.append(volume_card);

plus_card=document.createElement("span");
plus_card.setAttribute("class","plus");
inc_dec_card.append(plus_card); 

i2_card = document.createElement("i");
i2_card.setAttribute("class","fa-solid fa-plus");
plus_card.append(i2_card);


add_item_card=document.createElement("div");
add_item_card.setAttribute("class","add-item-cart");
button_card.append(add_item_card);

a_card=document.createElement("a");
a_card.setAttribute("href","../../pages/add to cart/addtocart.html");
add_item_card.append(a_card);

btn4_card=document.createElement("button");
btn4_card.setAttribute("class","btn-button");
btn4_card.setAttribute("id","btn-4");
btn4_card.innerText="Add to the cart"
a_card.append(btn4_card);

document.querySelector(".about-product").append(row_card);
