let beverage_container;
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
const veg_img = ["../../assets/image/veg.svg"]
// const main_content =[" A decadent mix of cocoa, topped with a playfully crafted Hat..","Dark, Rich in flavour espresso lies in wait under a smoothed...","Hazelnut syrup combined with light cream cheese styled sauce..","Rich Coffee blended with milk, chocolaty chip, caramel syrup....","Pour-over is an accessible way to brew...","Pour-over is a beautifully simple and accessible way to brew...","Black tea infused with cinnamon, clove, and other warming sp...","Receiving plenty of rain during the early spring harvest, th.","Starbucks® Kenya coffee is freshly ground and then steeped f..."]
// const main_names=[" Crunchy Red Hat Mocha","Cappuccino", "Hazelnut Mocha  Frappuccino","Caramel  Frappuccino","Pour over – Christmas Blend","Pour Over - Italian Blend","Chai Tea Latte","Emperor'S Mist Green Tea" ,"Cold Brew Black"]
// const sub_content=[" SHORT(237 ML) .412 Kcal","SHORT(237 ML) .104 Kcal","TALL(354 ML) .491 kcal","TALL(354 ML) .398 kcal","SHORT(237 ML) .- 0 KCAL","SHORT(237 ML) .0 kcal","SHORT(237 ML) .170 kcal","SHORT(237 ML) .0 kcal","TALL() .0 kcal"]
// const link_pages=[ "../../pages/productdetail/productdetail1.html","../../pages/productdetail/product-cappu.html","../../pages/productdetail/product-hazelfrap.html","../../pages/productdetail/product-caramelfrap.html","../../pages/productdetail/product-chris.html","../../pages/productdetail/product-italian.html","../../pages/productdetail/product-chaitea.html"," ../../pages/productdetail/product-emperor.html","../../pages/productdetail/product-coldbrew.html"]
// const cost_items =[ "Rs 404" ," Rs 273","Rs 474","Rs 414","Rs 494","Rs 324","Rs 273","Rs 299","Rs.304"]
const master_list = [ {

    "name": "Crunchy Red Hat Mocha",
    "category": "Espresso",
    "category_description": "Everyone's favorite The Caffine factory put together in a specially curated collection.",
    "description": "A decadent mix of cocoa, topped with a playfully crafted Hat..",
    "quantities":
    {
        "name": " SHORT ",
        "quantity": " 237 ",
        "unit": " ML ",
        "calories": " .104 ",
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "image": {
        "source": "../../assets/image/redhatmocha.jpg",
        "alt": " ",
    },
    "price": 404,
    "currency": "Rs",
    //////////////////////////////
    "main_img": "../../assets/image/redhatmocha.jpg",
    "main_content": " A decadent mix of cocoa, topped with a playfully crafted Hat..",
    "main_names": " Crunchy Red Hat Mocha",
    "sub_content": " SHORT(237 ML) .412 Kcal",
    "link_pages": "../../pages/productdetail/productdetail1.html",
    "cost_items": "Rs 404"
    ////////////////////////
},
{

    "name": "Cappuccino",
    "description": " Dark, Rich in flavour espresso lies in wait under a smoothed...",
    "quantities":
    {
        "name": " SHORT ",
        "quantity": 237,
        "unit": " ML ",
        "calories": .104,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 273,
    "currency": " Rs ",
    "image": {
        "source": " ../../assets/image/cappacino.jpg ",
        "alt": " ",
    },

    "category": "Espresso",
    "category_description": "Everyone's favorite The Caffine factory put together in a specially curated collection.",

    ///////////////////////
    "main_img": "../../assets/image/cappacino.jpg",
    "main_content": "Dark, Rich in flavour espresso lies in wait under a smoothed...",
    "main_names": "Cappuccino",
    "sub_content": "SHORT(237 ML) .104 Kcal",
    "link_pages": "../../pages/productdetail/product-cappu.html",
    "cost_items": " Rs 273"
    /////////////////////
},

{

    "name": "Iced Hazelnut  Latte",
    "description": "Signature espresso  with flavors of hazelnut and lig...",
    "quantities":
    {
        "name": " TALL ",
        "quantity": " 354 ",
        "unit": " ML ",
        "calories": .407,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": " 524 ",
    "currency": " Rs ",
    "category": " Espresso ",
    "category_description": " Everyone's favorite The Caffine factory put together in a specially curated collection. ",
    "image": {
        "source": "../../assets/image/iced.jpg",

    },
    /////////////////////////////////////////////
    "main_img": "../../assets/image/iced.jpg",
    "main_content": "Signature espresso  with flavors of hazelnut and lig...",
    "main_names": "Iced Hazelnut  Latte",
    "sub_content": "TALL(354 ML) .407 kcal",
    "link_pages": "../../pages/productdetail/product-hazel.html",
    "cost_items": "Rs.524"
    ////////////////////////////////////////////
},


{

    "name": "Pumpkin Spice Latte",
    "description": "Our signature espresso and steamed milk with the celebrated ...",
    "quantities":
    {
        "name": " SHORT ",
        "quantity": " 237 ",
        "unit": " ML ",
        "calories": .216,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 484,
    "currency": "Rs",

    "image": {
        "source": "../../assets/image/pumpkin.jpg",

    },

    "category": "Espresso",
    "category_description": "Everyone's favorite The Caffine factory put together in a specially curated collection.",




    /////////////////////////////////////
    "main_img": "../../assets/image/pumpkin.jpg",
    "main_content": "Our signature espresso and steamed milk with the celebrated ...",
    "main_names": "Pumpkin Spice Latte",
    "sub_content": "SHORT(237 ML) .216 kcal",
    "link_pages": "../../pages/productdetail/product-pumpspice.html",
    "cost_items": "Rs 484"
    ///////////////////////////////////
},

{

    "name": "Iced Hazelnut  Latte",
    "description": "Signature espresso  with flavors of hazelnut and lig...",
    "quantities":
    {
        "name": "TALL ",
        "quantity": " 354 ",
        "unit": " ML ",
        "calories": .407,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 524,
    "currency": "Rs",

    "image": {
        "source": "../../assets/image/iced.jpg",

    },

    "category": "Espresso",
    "category_description": "Everyone's favorite The Caffine factory put together in a specially curated collection.",




    /////////////////////////////////////
    "main_img": "../../assets/image/pumpkin.jpg",
    "main_content": "Our signature espresso and steamed milk with the celebrated ...",
    "main_names": "Pumpkin Spice Latte",
    "sub_content": "SHORT(237 ML) .216 kcal",
    "link_pages": "../../pages/productdetail/product-hazel.html",
    "cost_items": "Rs 484"
    ///////////////////////////////////
},
{
    "name": "Vanilla Caffe Latte",
    "description": "Our dark, rich espresso balanced with vanilla flavored syrup...",
    "quantities":
    {
        "name": " SHORT ",
        "quantity": " 237 ",
        "unit": " ML ",
        "calories": .125,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 244,
    "currency": "Rs",




    "image": {
        "source": "../../assets/image/vanila.jpg"

    },

    "category": "Espresso",
    "category_description": "Everyone's favorite The Caffine factory put together in a specially curated collection.",
    ////////////////////////////////
    "main_img": "../../assets/image/vanila.jpg",
    "main_content": "Our dark, rich espresso balanced with vanilla flavored syrup...",
    "main_names": "Vanilla Caffe Latte",
    "sub_content": "SHORT(237 ML) .125 kcal",
    "link_pages": "../../pages/productdetail/product-vanilla.html",
    "cost_items": "Rs.244"
    ///////////////////////////////////
},

{
    "name": "Doppio Espresso",
    "description": "Our smooth signature Espresso Roast and its caramelly sweetn...",
    "quantities":
    {
        "name": " PER-SERVE ",
        "quantity": " 45 ",
        "unit": " ML ",
        "calories": 0,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 365,
    "currency": "Rs",


    "category": "Espresso",
    "category_description": "Everyone's favorite The Caffine factory put together in a specially curated collection.",



    "image": {
        "source": "../../assets/image/doppio.jpg",

    },
    //////////////////////////////
    "main_img": "../../assets/image/doppio.jpg",
    "main_content": "Our smooth signature Espresso Roast and its caramelly sweetn...",
    "main_names": "Doppio Espresso",
    "sub_content": "PER SERVE (45 ML) - 0 Kcal",
    "link_pages": "../../pages/productdetail/product-doppio.html",
    "cost_items": "Rs.365"
    /////////////////////////////
},

// {
//     "main_img":"../../assets/image/chaitea.jpg",
//     "main_content":"Black tea infused with cinnamon, clove, and other warming sp...",
//     "main_names":"Chai Tea Latte",
//      "sub_content":"SHORT(237 ML) .170 kcal",
//      "link_pages":"../../pages/productdetail/product-chaitea.html",
//      "cost_items":"Rs 273"
// },

// {
//     "main_img":"../../assets/image/emperortea.jpg",
//     "main_content":"Receiving plenty of rain during the early spring harvest, th.",
//     "main_names":"Emperor'S Mist Green Tea",
//      "sub_content":"SHORT(237 ML) .0 kcal",
//      "link_pages":" ../../pages/productdetail/product-emperor.html",
//      "cost_items":"Rs 299"
// },

// {
//     "main_img":"../../assets/image/coldcold.jpg",
//     "main_content":"Starbucks® Kenya coffee is freshly ground and then steeped f...",
//     "main_names":"Cold Brew Black",
//      "sub_content":"TALL() .0 kcal",
//      "link_pages":"../../assets/image/coldcold.jpg",
//      "cost_items":"Rs 299"
// }]
{
    "name": "Hazelnut Mocha  Frappuccino",
    "description": "Hazelnut syrup combined with light cream cheese styled sauce..",
    "quantities":
    {
        "name": " TALL ",
        "quantity": "354 ",
        "unit": "ML ",
        "calories": .491,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 474,
    "currency": "Rs ",


    "category": "Frappucino",
    "category_description": "The Frappuccino® is a blended beverage unique to The Caffine factory.",



    "image": {
        "source": "../../assets/image/hazelnutmochacheese.jpg",
        "alt": ""
    },

    ///////////////////////////////////
    "main_img": "../../assets/image/hazelnutmochacheese.jpg",
    "main_content": "Hazelnut syrup combined with light cream cheese styled sauce..",
    "main_names": "Hazelnut Mocha  Frappuccino",
    "sub_contnent": "TALL(354 ML) .491 kcal",
    "link_pages": "../../pages/productdetail/product-hazelfrap.html",
    "cost_items": "Rs " + 474
    ////////////////////////////////////
},
{
    "name": "Caramel  Frappuccino",
    "description": "Rich Coffee blended with milk, chocolaty chip, caramel syrup....",
    "quantities":
    {
        "name": " TALL ",
        "quantity": "354 ",
        "unit": " ML",
        "calories": .398,
        "calories_unit": " kcal ",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 414,
    "currency": "Rs ",


    "category": "Frappucino",
    "category_description": "The Frappuccino® is a blended beverage unique to The Caffine factory.",



    "image": {
        "source": "../../assets/image/carameljava.jpg",
        "alt": ""
    },

    ////////////////////////////////////////////
    "main_img": "../../assets/image/carameljava.jpg",
    "main_content": "Rich Coffee blended with milk, chocolaty chip, caramel syrup....",
    "main_names": "Caramel  Frappuccino",
    "sub_content": "TALL(354 ML) .398 kcal",
    "link_pages": "../../pages/productdetail/product-caramelfrap.html",
    "cost_items": "Rs 414"
    ////////////////////////////////////////////////
},
{

    "name": " Javachip  Frappuccino",
    "description": " We blend mocha sauce and Frappuccino® chips with Frappuccino...",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .392,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 351,
    "currency": "Rs",


    "category": "Frappucino",
    "category_description": "The Frappuccino® is a blended beverage unique to The Caffine factory.",



    "image": {
        "source": " ../../assets/image/javachip.jpg",
        "alt": ""
    },

    /////////////////////////////////////////////////////

    "main_img": " ../../assets/image/javachip.jpg",
    "main_content": " We blend mocha sauce and Frappuccino® chips with Frappuccino...",
    "main_names": " Javachip  Frappuccino",
    "sub_content": "TALL(354 ML) .392 kcal ",
    "link_pages": "../../pages/productdetail/product-java.html ",
    "cost_items": " Rs.351"
    /////////////////////////////////////////////////////////
},

{



    "name": " Pumpkin Spice Frappuccino",
    "description": "  Coffee and milk blended with the celebrated flavor combinati...",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .370,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 572,
    "currency": "Rs",


    "category": "Frappucino",
    "category_description": "The Frappuccino® is a blended beverage unique to The Caffine factory.",



    "image": {
        "source": " ../../assets/image/pumpkinfrapp.jpg",
        "alt": ""
    },







    "main_img": " ../../assets/image/pumpkinfrapp.jpg",
    "main_content": " Coffee and milk blended with the celebrated flavor combinati...",
    "main_names": "Pumpkin Spice Frappuccino ",
    "sub_content": "TALL(354 ML) .370 kcal ",
    "link_pages": "../../pages/productdetail/product-pumpfrap.html ",
    "cost_items": "Rs. 572 "
},
{






    "name": "Gingerbread Frappuccino",
    "description": " Feel the gingerbread love in this blended holiday drink of G..",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .329,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 474,
    "currency": "Rs",


    "category": "Frappucino",
    "category_description": "The Frappuccino® is a blended beverage unique to The Caffine factory.",



    "image": {
        "source": "  ../../assets/image/gingerfrap.jpg",
        "alt": ""
    },





    ///////////////////////////////////////

    "main_img": " ../../assets/image/gingerfrap.jpg",
    "main_content": "Feel the gingerbread love in this blended holiday drink of G.. ",
    "main_names": " Gingerbread Frappuccino",
    "sub_content": " TALL(354 ML) .329 Kcal",
    "link_pages": "../../pages/productdetail/product-gingerfrap.html ",
    "cost_items": "Rs.474 "
    ///////////////////////////////////////
},
{


    "name": "Toffee Nut Crunch Frappuccino",
    "description": "A perfect blend of coffee with butter... ",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .352,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 404,
    "currency": "Rs",

    "category": "Frappucino",
    "category_description": "The Frappuccino® is a blended beverage unique to The Caffine factory.",



    "image": {
        "source": "  ../../assets/image/toffee.jpg",
        "alt": ""
    },
    //////////////////////////////////////
    "main_img": "../../assets/image/toffee.jpg ",
    "main_content": "A perfect blend of coffee with butter... ",
    "main_names": " Toffee Nut Crunch Frappuccino",
    "sub_content": "TALL(354 ML) .352 Kcal ",
    "link_pages": "../../pages/productdetail/product-toffee.html ",
    "cost_items": " Rs.404"
    /////////////////////////////////////////////
},
{
    "name": "Pour over – Christmas Blend",
    "description": "Pour-over is an accessible way to brew... ",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "237",
        "unit": "ML",
        "calories": 0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 494,
    "currency": "Rs",

    "category": "Brewedcoffee",
    "category_description": "The Caffine factory brews are made with premium estate coffee to impart a unique flavour..",



    "image": {
        "source": " ../../assets/image/pourover.jpg",
        "alt": ""
    },
    //////////////////////////
    "main_img": "../../assets/image/pourover.jpg",
    "main_content": "Pour-over is an accessible way to brew...",
    "main_names": "Pour over – Christmas Blend",
    "sub_content": "SHORT(237 ML) .- 0 KCAL",
    "link_pages": "../../pages/productdetail/product-chris.html",
    "cost_items": "Rs 494"
    /////////////////////////
},

{

    "name": "Pour Over - Italian Blend",
    "description": "Pour-over is a beautifully simple and accessible way to brew...",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "237",
        "unit": "ML",
        "calories": 0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 494,
    "currency": "Rs",

    "category": "Brewedcoffee",
    "category_description": "The Caffine factory brews are made with premium estate coffee to impart a unique flavour..",



    "image": {
        "source": " ../../assets/image/pourover.jpg",
        "alt": ""
    },
    ////////////////////////////////////////
    "main_img": "../../assets/image/pourover.jpg",
    "main_content": "Pour-over is a beautifully simple and accessible way to brew...",
    "main_names": "Pour Over - Italian Blend",
    "sub_content": "SHORT(237 ML) .0 kcal",
    "link_pages": "../../pages/productdetail/product-italian.html",
    "cost_items": "Rs 324"
    ///////////////////////////////////////
},

{

    "name": "French Press - Kenya",
    "description": "Brewing with a French press retains the precious natural oil...",
    "quantities":
    {
        "name": "PER SERVE ",
        "quantity": "237",
        "unit": "ML",
        "calories": 0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 674,
    "currency": "Rs",

    "category": "Brewedcoffee",
    "category_description": "The Caffine factory brews are made with premium estate coffee to impart a unique flavour..",



    "image": {
        "source": " ../../assets/image/brew.jpg ",
        "alt": ""
    },
    //////////////////////////////////////
    "main_img": "../../assets/image/brew.jpg ",
    "main_content": "Brewing with a French press retains the precious natural oil... ",
    "main_names": " French Press - Kenya",
    "sub_content": " PER SERVE (237 ML) - 0 Kcal",
    "link_pages": " ../../pages/productdetail/product-frenchpour.html",
    "cost_items": " Rs.674"
    //////////////////////////////////////
},

{

    "name": "French Press - India Estates Blend",
    "description": " Brewing with a coffee press retains the precious natural oil... ",
    "quantities":
    {
        "name": "PER SERVE ",
        "quantity": "473",
        "unit": "ML",
        "calories": 0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 476,
    "currency": "Rs",

    "category": "Brewedcoffee",
    "category_description": "The Caffine factory brews are made with premium estate coffee to impart a unique flavour..",



    "image": {
        "source": "  ../../assets/image/estates.jpg ",
        "alt": ""
    },
    //////////////////////////////////////////////////
    "main_img": " ../../assets/image/estates.jpg",
    "main_content": "Brewing with a coffee press retains the precious natural oil... ",
    "main_names": " French Press - India Estates Blend",
    "sub_content": "PER SERVE (473 ML) - 0 Kcal ",
    "link_pages": " ../../pages/productdetail/product-estates.html",
    "cost_items": "Rs.476"
    ///////////////////////////////////////////////
},
{


    "name": "Pour Over - Kenya Blend",
    "description": " Pour-over is a beautifully simple and accessible way to brew...  ",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": 0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 234,
    "currency": "Rs",

    "category": "Brewedcoffee",
    "category_description": "The Caffine factory brews are made with premium estate coffee to impart a unique flavour..",



    "image": {
        "source": "  ../../assets/image/pourover.jpg ",
        "alt": ""
    },

    ///////////////////////////////////////////////////
    "main_img": " ../../assets/image/pourover.jpg",
    "main_content": "Pour-over is a beautifully simple and accessible way to brew... ",
    "main_names": " Pour Over - Kenya Blend",
    "sub_content": "SHORT(237 ML) .0 kcal ",
    "link_pages": " ../../pages/productdetail/product-kenya.html",
    "cost_items": " Rs.234"
    /////////////////////////////////////////////////
},
{

    "name": "Pour Over - Sumatra Blend ",
    "description": " Pour-over is a beautifully simple and accessible way to brew...  ",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": 0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 304,
    "currency": "Rs",

    "category": "Brewedcoffee",
    "category_description": "The Caffine factory brews are made with premium estate coffee to impart a unique flavour..",



    "image": {
        "source": "  ../../assets/image/pourover.jpg ",
        "alt": ""
    },

    //////////////////////////////////////////////////////
    "main_img": "../../assets/image/pourover.jpg ",
    "main_content": "Pour-over is a beautifully simple and accessible way to brew... ",
    "main_names": "Pour Over - Sumatra Blend ",
    "sub_content": "SHORT(237 ML) .0 kcal ",
    "link_pages": "../../pages/productdetail/product-sumtra.html ",
    "cost_items": "Rs.304 "
    /////////////////////////////////////////////////////
},
{

    "name": "Chai Tea Latte ",
    "description": " Black tea infused with cinnamon, clove, and other warming sp...  ",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": .170,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 273,
    "currency": "Rs",

    "category": "Tea",
    "category_description": "An exclusive tea experience championed by  The Caffine factory.",



    "image": {
        "source": " ../../assets/image/chaitea.jpg ",
        "alt": ""
    },


    /////////////////////////////////////////
    "main_img": "../../assets/image/chaitea.jpg",
    "main_content": "Black tea infused with cinnamon, clove, and other warming sp...",
    "main_names": "Chai Tea Latte",
    "sub_content": "SHORT(237 ML) .170 kcal",
    "link_pages": "../../pages/productdetail/product-chaitea.html",
    "cost_items": "Rs 273"
    ///////////////////////////////////////////
},

{


    "name": "Emperor'S Mist Green Tea ",
    "description": " Receiving plenty of rain during the early spring harvest, th.  ",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": .0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 299,
    "currency": "Rs",

    "category": "Tea",
    "category_description": "An exclusive tea experience championed by  The Caffine factory.",



    "image": {
        "source": " ../../assets/image/emperortea.jpg",
        "alt": ""
    },
    ////////////////////////////////////////////////////////
    "main_img": "../../assets/image/emperortea.jpg",
    "main_content": "Receiving plenty of rain during the early spring harvest, th.",
    "main_names": "Emperor'S Mist Green Tea",
    "sub_content": "SHORT(237 ML) .0 kcal",
    "link_pages": " ../../pages/productdetail/product-emperor.html",
    "cost_items": "Rs 299"
    ///////////////////////////////////////////////////////
},

{

    "name": "English Breakfast Black Tea ",
    "description": " A breakfast-style black tea of malty boldness and bright fla...",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": .0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 474,
    "currency": "Rs",

    "category": "Tea",
    "category_description": "An exclusive tea experience championed by  The Caffine factory.",



    "image": {
        "source": " ../../assets/image/englishtea.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////////

    "main_img": " ../../assets/image/englishtea.jpg",
    "main_content": "A breakfast-style black tea of malty boldness and bright fla...",
    "main_names": "English Breakfast Black Tea ",
    "sub_content": "SHORT(237 ML) .0 Kcal ",
    "link_pages": "../../pages/productdetail/product-englishtea.html ",
    "cost_items": " Rs.474"
    /////////////////////////////////////////////////
},

{


    "name": "Hathikuli Tea ",
    "description": " An organic estate- specific Assam black tea with malty sweet...",
    "quantities":
    {
        "name": "PER-SERVE",
        "quantity": "473",
        "unit": "ML",
        "calories": .0,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 406,
    "currency": "Rs",

    "category": "Tea",
    "category_description": "An exclusive tea experience championed by  The Caffine factory.",



    "image": {
        "source": " ../../assets/image/haitea.jpg",
        "alt": ""
    },
    //////////////////////////////////////////////
    "main_img": "../../assets/image/haitea.jpg ",
    "main_content": " An organic estate- specific Assam black tea with malty sweet...",
    "main_names": " Hathikuli Tea",
    "sub_content": " Hathikuli Tea(473 ML).0 Kcal",
    "link_pages": " ../../pages/productdetail/product-haitea.html",
    "cost_items": "Rs.406 "
    ////////////////////////////////////////////////
},
{


    "name": "Iced Green Tea Latte",
    "description": " Smooth and creamy matcha is lightly sweetened and served with steamed milk",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": .412,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 404,
    "currency": "Rs",

    "category": "Tea",
    "category_description": "An exclusive tea experience championed by  The Caffine factory.",



    "image": {
        "source": " ../../assets/image/icedgreen.jpg",
        "alt": ""
    },

    ////////////////////////////////////////
    "main_img": " ../../assets/image/icedgreen.jpg",
    "main_content": " Smooth and creamy matcha is lightly sweetened and served with steamed milk",
    "main_names": "Iced Green Tea Latte ",
    "sub_content": "SHORT(237 ML) .412 Kcal ",
    "link_pages": " ../../pages/productdetail/product-icedgreen.html",
    "cost_items": "Rs.404 "
    ////////////////////////////////////////////
},
{


    "name": " Green Tea Latte",
    "description": "Smooth and creamy matcha is lightly sweetened and served wit..",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": .171,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 309,
    "currency": "Rs",

    "category": "Tea",
    "category_description": "An exclusive tea experience championed by  The Caffine factory.",



    "image": {
        "source": " ../../assets/image/greentea.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    "main_img": " ../../assets/image/greentea.jpg",
    "main_content": " Smooth and creamy matcha is lightly sweetened and served wit..",
    "main_names": " Green Tea Latte ",
    "sub_content": " SHORT(237 ML) .171 kcal",
    "link_pages": "../../pages/productdetail/product-greenlatte.html ",
    "cost_items": " Rs.309"
    //////////////////////////////////////////
},
{


    "name": "Cold Brew Black",
    "description": "Starbucks® Kenya coffee is freshly ground and then steeped f...",
    "quantities":
    {
        "name": "TALL",
        "quantity": "221",
        "unit": "ML",
        "calories": .171,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 299,
    "currency": "Rs",

    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": "../../assets/image/coldcold.jpg",
        "alt": ""
    },
    //////////////////////////////////////////////
    "main_img": "../../assets/image/coldcold.jpg",
    "main_content": "Starbucks® Kenya coffee is freshly ground and then steeped f...",
    "main_names": "Cold Brew Black",
    "sub_content": "TALL() .0 kcal",
    "link_pages": "../../pages/productdetail/product-coldbrew.html",
    "cost_items": "Rs 299"
    ////////////////////////////////////////////
},

{

    "name": "Toffee Nut Crunch Cold Brew",
    "description": "Starbucks signature Cold Brew, balanced by subtle notes of t... ",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .191,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 404,
    "currency": "Rs",

    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": "../../assets/image/toffeecold.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    "main_img": "../../assets/image/toffeecold.jpg ",
    "main_content": "Starbucks signature Cold Brew, balanced by subtle notes of t... ",
    "main_names": " Toffee Nut Crunch Cold Brew",
    "sub_content": "TALL(354 ML) .193 Kcal ",
    "link_pages": "../../pages/productdetail/prodct-toffeecold.html ",
    "cost_items": "Rs.404 "
    ///////////////////////////////////////////
},

{

    "name": "Pumpkin Spice Cream Cold Brew ",
    "description": "Our Cold Brew sweetened with vanilla syrup, topped with a pu... ",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .261,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 584,
    "currency": "Rs",

   
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": " ../../assets/image/pumpkincold.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    "main_img": " ../../assets/image/pumpkincold.jpg",
    "main_content": "Our Cold Brew sweetened with vanilla syrup, topped with a pu... ",
    "main_names": "Pumpkin Spice Cream Cold Brew ",
    "sub_content": "TALL(354 ML) .261 kcal ",
    "link_pages": "../../pages/productdetail/product-pumpkincold.html ",
    "cost_items": " Rs.584"
    //////////////////////////////////////////
},

{

    "name": "Vanilla Sweet Cream Cold Brew ",
    "description": "Cold Brew with Vanilla Sweet Cream is made with Starbucks® C...  ",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .63,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 494,
    "currency": "Rs",

   
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": "../../assets/image/vanillacold.jpg ",
        "alt": ""
    },
    /////////////////////////////////////////////

    "main_img": "../../assets/image/vanillacold.jpg ",
    "main_content": "Cold Brew with Vanilla Sweet Cream is made with Starbucks® C... ",
    "main_names": "Vanilla Sweet Cream Cold Brew ",
    "sub_content": "TALL(354 ML) .63 kcal ",
    "link_pages": "../../pages/productdetail/product-vanillacold.html ",
    "cost_items": "Rs.494 "
    ///////////////////////////////////////////////
},
{

    "name": "Toffee Nut Crunch Nitro Cold Brew",
    "description": "The caffine factory signature Nitro Cold Brew, balanced by subtle note.. ",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "237",
        "unit": "ML",
        "calories": .163,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 439,
    "currency": "Rs",

    
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",


    "image": {
        "source": "../../assets/image/toffeenutcold.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    // "main_img": " ../../assets/image/toffeenutcold.jpg",
    // "main_content": "The caffine factory signature Nitro Cold Brew, balanced by subtle note.. ",
    // "main_names": "Toffee Nut Crunch Nitro Cold Brew",
    // "sub_content": " SHORT(237 ML) .163 Kcal",
    "link_pages": " ../../pages/productdetail/product-toffeenutcold.html",
    // "cost_items": " Rs.439"
},
{

    "name": "White Mocha Caramel Cold Brew",
    "description": "Our slow steeped Cold brew shaken with milk and white chocol... ",
    "quantities":
    {
        "name": "TALL ",
        "quantity": " 354",
        "unit": "ML ",
        "calories": .194,
        "calories_unit": " kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 404,
    "currency": " Rs ",

   
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": "../../assets/image/toffeecold.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    // "main_img": " ../../assets/image/whitecold.jpg",
    // "main_content": " Our slow steeped Cold brew shaken with milk and white chocol...",
    // "main_names": " White Mocha Caramel Cold Brew",
    // "sub_content": "TALL(354 ML) .194 kcal ",
    "link_pages": " ../../pages/productdetail/product-whitecold.html",
    // "cost_items": " Rs.404"
}
]

// array.filter()
const list2_names = master_list.filter(function category(type){
    return type.category ==="Espresso";
}
)
console.log(list2_names);
   


const list3_names =  master_list.filter(function category(type){
    return type.category ==="Frappucino";
}
)
console.log(list3_names);
   


const list4_names =   master_list.filter(function category(type){
    return type.category === "Brewedcoffee";
}
)
console.log(list4_names);

    



const list5_names =    master_list.filter(function category(type){
    return type.category === "Tea";
}
)
console.log(list5_names);




const list6_names = master_list.filter(function category(type){
    return type.category=== "Cold Brew";
}
)
console.log(list6_names);









for (i = 0; i < 6; i++) {

    const container_card = render(list2_names[i])

    document.querySelector(".beverages").append(container_card);

}

for (i = 0; i < 6; i++) {

    const container_card = render(list3_names[i])

    document.querySelector(".beverages1").append(container_card);

}

for (i = 0; i < 6; i++) {
    const container_card = render(list4_names[i])

    document.querySelector(".beverages2").append(container_card);

}

for (i = 0; i < 6; i++) {


    const container_card = render(list5_names[i])

    document.querySelector(".beverages3").append(container_card);

}

for (i = 0; i < 6; i++) {

    const container_card = render(list6_names[i])

    document.querySelector(".beverages4").append(container_card);

}



function render(object) {  // const object = list6_names[i]


    container_card = document.createElement("div");
    container_card.setAttribute("class", "beverage-container");
    console.log(container_card)

    img_content_cost_card = document.createElement("div");
    img_content_cost_card.setAttribute("class", "beverage-img-content-cost");
    container_card.append(img_content_cost_card)

    image_card = document.createElement("div");
    image_card.setAttribute("class", "beverage-image");
    img_content_cost_card.append(image_card);

    img_main_card = document.createElement("img");
    img_main_card.setAttribute("src", object["image"]["source"]);
    img_main_card.setAttribute("alt", object["image"]["alt"])
    image_card.append(img_main_card);

    content_cost_card = document.createElement("div");
    content_cost_card.setAttribute("class", "beverage-content-cost");
    img_content_cost_card.append(content_cost_card);

    content_card = document.createElement("div");
    content_card.setAttribute("class", "beverage-content");
    content_cost_card.append(content_card)

    vegimg_card = document.createElement("div");
    vegimg_card.setAttribute("class", "beverage-vegimg");
    content_card.append(vegimg_card);

    img_veg_card = document.createElement("img");
    img_veg_card.setAttribute("src", veg_img[0]);
    img_veg_card.setAttribute("alt", " ");
    vegimg_card.append(img_veg_card);

    title_card = document.createElement("div");
    title_card.setAttribute("class", "beverage-title");
    content_card.append(title_card);

    h3_card = document.createElement("h3");
    h3_card.innerText = object["name"];
    title_card.append(h3_card);


    message_1_card = document.createElement("div");
    message_1_card.setAttribute("class", "beverage-message-1");
    content_card.append(message_1_card);



    p_1 = document.createElement("p");
    p_1.setAttribute("class", "p-1");
    p_1.innerText = object["quantities"]["name"] +
        object["quantities"]["quantity"] +
        object["quantities"]["unit"] +
        object["quantities"]["calories"] +
        object["quantities"]["calories_unit"];
    message_1_card.append(p_1);



    message_2_card = document.createElement("div");
    message_2_card.setAttribute("class", "beverage-message-2");
    content_card.append(message_2_card);


    p_2 = document.createElement("p");
    p_2.setAttribute("class", "p-2");
    p_2.innerText = object["description"];
    message_2_card.append(p_2);

    costdetail_card = document.createElement("div");
    costdetail_card.setAttribute("class", "beverage-costdetail");
    content_cost_card.append(costdetail_card);

    cost_card = document.createElement("div");
    cost_card.setAttribute("class", "cost");
    cost_card.innerText = object["currency"] + object["price"];
    costdetail_card.append(cost_card);

    add_item_card = document.createElement("div");
    add_item_card.setAttribute("class", "add-item");

    costdetail_card.append(add_item_card);

    a_card = document.createElement("a");
    a_card.setAttribute("href", object["link_pages"]+"?name="+object["name"]);
    add_item_card.append(a_card)

    button_card = document.createElement("button");
    button_card.innerText = "add item";
    a_card.append(button_card);

    // document.querySelector(".beverages4").append(container_card);

    return container_card;


}