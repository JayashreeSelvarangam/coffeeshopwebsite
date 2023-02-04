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

const product_detail_list =
    [
        {
            "image": {
                "source": "../../assets/image/vanila.jpg ",
                "alt": " "
            },
            "name": " Vanilla Caffe Latte ",
            "description": " Our dark, rich espresso balanced with vanilla flavored syrup, steamed milk and a light layer of foam. ",
            "price": 244,
            "currency": " Rs. ",
            "quantities": {
                "name": " SHORT ",
                "quantity": " 237 ",
                "unit": " ML ",
                "calories": " .125 ",
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    "name": "tall",
                    "quantity": 2
                },
                {
                    "name": "medium",
                    "quantity": 2
                },
                {
                    "name": "small",
                    "quantity": 2
                },
            ]
        },
        {
            "image": {
                "source": "./../assets/image/redhatmocha.jpg",
                "alt": " "
            },
            "name": " CRUNCHY RED HAT MOCHA ",
            "description": " A decadent mix of cocoa, topped with a playfully crafted Hat made with velvety whipped cream, strawberry drizzle and a dollop of chocolate whipped cream completes the “Hat”, topped with graham cracker topping for that awesome crunch. ",
            "price": 404,
            "currency": " Rs. ",
            "quantities": {
                "name": " SHORT ",
                "quantity": " 237 ",
                "unit": " ML ",
                "calories": " .412 ",
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 2
                },
                {
                    name: "medium",
                    quantity: 2
                },
                {
                    name: "small",
                    quantity: 2
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/cappacino.jpg",
                "alt": " "
            },
            "name": " CAPPUCCINO ",
            "description": " Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam. It's truly the height of our baristas' craft. ",
            "price": 244,
            "currency": " Rs. ",
            "quantities": {
                "name": " SHORT ",
                "quantity": " 237 ",
                "unit": " ML ",
                "calories": " .125 ",
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 2
                },
                {
                    name: "medium",
                    quantity: 2
                },
                {
                    name: "small",
                    quantity: 2
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/pumpkin.jpg ",
                "alt": " "
            },
            "name": " PUMPKIN SPICE LATTE ",
            "description": "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Topped with whipped cream and Pumpkin Spice topping.  ",
            "price": 484,
            "currency": " Rs. ",
            "quantities": {
                "name": " SHORT ",
                "quantity": " 237 ",
                "unit": " ML ",
                "calories": " .216",
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 2
                },
                {
                    name: "medium",
                    quantity: 2
                },
                {
                    name: "small",
                    quantity: 2
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/iced.jpg ",
                "alt": " "
            },
            "name": "Iced Hazelnut  Latte ",
            "description": " Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Topped with whipped cream and Pumpkin Spice topping. ",
            "price": 524,
            "currency": " Rs. ",
            "quantities": {
                "name": "TALL ",
                "quantity":  354 ,
                "unit": " ML ",
                "calories":  .407 ,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    "name": "tall",
                    "quantity": 2
                },
                {
                    
                    "name": "medium",
                    "quantity": 2
                },
                {
                    "name": "small",
                    "quantity": 2
                },
            ]
        },
        /////////////////////////////
        // {
        //     "image": {
        //         "source": "../../assets/image/vanila.jpg ",
        //         "alt": " "
        //     },
        //     "name": " Vanilla Caffe Latte ",
        //     "description": " Our dark, rich espresso balanced with vanilla flavored syrup, steamed milk and a light layer of foam. ",
        //     "price": 244,
        //     "currency": " Rs. ",
        //     "quantities": {
        //         "name": " SHORT ",
        //         "quantity": " 237 ",
        //         "unit": " ML ",
        //         "calories": " .125 ",
        //         "calories_unit": " Kcal "
        //     },
        //     "sizes": [

        //         {
        //             name: "tall",
        //             quantity: 2
        //         },
        //         {
        //             name: "medium",
        //             quantity: 2
        //         },
        //         {
        //             name: "small",
        //             quantity: 2
        //         },
        //     ]
        // },
        {
            "image": {
                "source": "../../assets/image/doppio.jpg ",
                "alt": " "
            },
            "name": " DOPPIO ESPRESSO",
            "description": " Our smooth signature Espresso Roast and its caramelly sweetness is at the very heart of everything we do.",
            "price": 484,
            "currency": " Rs. ",
            "quantities": {
                "name": " PER SERVE ",
                "quantity": 45,
                "unit": " ML ",
                "calories": 0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 2
                },
                {
                    name: "medium",
                    quantity: 2
                },
                {
                    name: "small",
                    quantity: 2
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/hazelnutmochacheese.jpg ",
                "alt": " "
            },
            "name": "HAZELNUT MOCHA FRAPPUCCINO",
            "description": " Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Topped with whipped cream and Pumpkin Spice topping.",
            "price": 474,
            "currency": " Rs. ",
            "quantities": {
                "name": " TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .491,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 2
                },
                {
                    name: "medium",
                    quantity: 2
                },
                {
                    name: "small",
                    quantity: 2
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/carameljava.jpg ",
                "alt": " "
            },


            "name": "CARAMEL FRAPPUCCINO",
            "description": " Rich Coffee blended with milk, chocolaty chip, caramel syrup and Ice. Topped with sweetened whipped cream and chocolate drizzle",
            "price": 414,
            "currency": " Rs. ",
            "quantities": {
                "name": " TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .398,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                }
            ]


        },
        {
            "image": {
                "source": " ../../assets/image/javachip.jpg",
                "alt": " "
            },


            "name": "JAVACHIP FRAPPUCCINO",
            "description": " We blend mocha sauce and Frappuccino® chips with Frappuccino® roast coffee and milk and ice, then top with whipped cream and mocha drizzle to bring you endless java joy.",

            "price": 351,
            "currency": " Rs. ",

            "quantities": {
                "name": " TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .392,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        // {
        //     "image":{
        //        "source":" ../../assets/image/javachip.jpg" ,
        //        "alt":" "
        //     },


        //     "name":"JAVACHIP FRAPPUCCINO",
        //     "description":" We blend mocha sauce and Frappuccino® chips with Frappuccino® roast coffee and milk and ice, then top with whipped cream and mocha drizzle to bring you endless java joy.",


        //     "currency":" Rs. ",

        //     "quantities":{
        //         "name": " TALL",
        //         "quantity": 354,
        //         "unit": " ML ",
        //         "calories": .392 ,
        //         "calories_unit":" Kcal "
        //         },
        //     "sizes":[

        //     {name : "tall",
        //     quantity : 50
        //     },
        //     {name : "medium",
        //     quantity : 30
        //        },
        //     {
        //     name : "small",
        //     quantity : 20
        //     },
        // ]
        // }
        {
            "image": {
                "source": " ../../assets/image/gingerfrap.jpg",
                "alt": " "
            },


            "name": "GINGERBREAD FRAPPUCCINO",
            "description": " Feel the gingerbread love in this blended holiday drink of Gingerbread syrup, Frappuccino® Roast coffee, milk and ice, topped with even more love – gingerbread whipped cream and brown sugar drizzle.",
            "price": 474,
            "currency": " Rs. ",

            "quantities": {
                "name": " TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .329,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },

        {
            "image": {
                "source": " ../../assets/image/toffee.jpg",
                "alt": " "
            },


            "name": "TOFFEE NUT CRUNCH FRAPPUCCINO",
            "description": " A perfect blend of coffee and heartwarming flavors of buttery toffee nut balanced by subtle notes of toasted nuts. The crescendo is a whipped cream peak sprinkled in a crunchy toffee nut topping",
            "currency": " Rs. ",

            "quantities": {
                "name": " TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .352,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/pourover.jpg",
                "alt": " "
            },
            "name": "POUR OVER – CHRISTMAS BLEND",
            "description": "Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Christmas Blend.",
            "price": 494,
            "currency": " Rs. ",

            "quantities": {
                "name": " SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": " ../../assets/image/pourover.jpg",
                "alt": " "
            },


            "name": "POUR OVER - ITALIAN BLEND",
            "description": " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Italian Roast",


            "price": 324,
            "currency": " Rs. ",

            "quantities": {
                "name": " SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/brew.jpg",
                "alt": " "
            },


            "name": "FRENCH PRESS - KENYA",
            "description": " Brewing with a French press retains the precious natural oils that paper filters absorb, and extracts the coffee’s full flavour while giving it a consistency that’s thick and rich. Brewed with Kenya Blend",
            "price": 674,
            "currency": " Rs. ",

            "quantities": {
                "name": " PER SERVE",
                "quantity": 273,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": " ../../assets/image/estates.jpg",
                "alt": " "
            },


            "name": "FRENCH PRESS - INDIA ESTATES BLEND",
            "description": " Brewing with a coffee press retains the precious natural oils that paper filters absorb, and extracts the coffee’s full flavor while giving it a consistency that’s thick and Rich in flavour. Brewed with India Estates Blend.",
            "price": 476,
            "currency": " Rs. ",

            "quantities": {
                "name": " PER SERVE",
                "quantity": 473,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": " ../../assets/image/pourover.jpg",
                "alt": " "
            },


            "name": "POUR OVER - KENYA BLEND",
            "description": " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Kenya Roast.",
            "price": 234,
            "currency": " Rs. ",

            "quantities": {
                "name": " SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": " ../../assets/image/pourover.jpg",
                "alt": " "
            },


            "name": "POUR OVER - SUMATRA BLEND",
            "description": " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Sumatra Roast.",
            "price": 304,
            "currency": " Rs. ",

            "quantities": {
                "name": " SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    "name": "tall",
                    "quantity": 50
                },
                {
                    "name": "medium",
                    "quantity": 30
                },
                {
                    "name": "small",
                    "quantity": 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/chaitea.jpg",
                "alt": " "
            },


            "name": "CHAI TEA LATTE",
            "description": " Black tea infused with cinnamon, clove, and other warming spices are combined with milk for the perfect balance of sweet and spicy.",
            "price": 273,
            "currency": " Rs. ",

            "quantities": {
                "name": " SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .170,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": " ../../assets/image/emperortea.jpg",
                "alt": " "
            },


            "name": "EMPEROR'S MIST GREEN TEA",
            "description": " Receiving plenty of rain during the early spring harvest, this is a curly, silver-speckled, leaf-and-bud green tea combination with a lightly floral beginning, a toasty middle body and a softly sweet finish",
            "price": 299,
            "currency": " Rs. ",

            "quantities": {
                "name": " SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": " ../../assets/image/englishtea.jpg",
                "alt": " "
            },


            "name": "ENGLISH BREAKFAST BLACK TEA ",
            "description": "A breakfast-style black tea of malty boldness and bright flavour, invigorating any time of the day.",
            "price": 474,
            "currency": " Rs. ",

            "quantities": {
                "name": " SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/haitea.jpg ",
                "alt": " "
            },


            "name": "HATHIKULI TEA",
            "description": "An organic estate- specific Assam black tea with malty sweetness and a nutty finish. ",
            "price": 406,
            "currency": " Rs. ",

            "quantities": {
                "name": "Hathikuli Tea",
                "quantity": 437,
                "unit": " ML ",
                "calories": .0,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },

        {
            "image": {
                "source": "../../assets/image/icedgreen.jpg ",
                "alt": " "
            },


            "name": "ICED GREEN TEA LATTE",
            "description": "Beautiful layers of green tea, our bold espresso and milk create a smooth, richly textured beverage ",
            "price": 309,
            "currency": " Rs. ",

            "quantities": {
                "name": "SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .412,
                "calories_unit": " Kcal "
            },
            "sizes": [
                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/greentea.jpg ",
                "alt": " "
            },


            "name": "GREEN TEA LATTE",
            "description": "Smooth and creamy matcha is lightly sweetened and served with steamed milk",
            "price": 404,
            "currency": " Rs. ",

            "quantities": {
                "name": "SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .171,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source":"../../assets/image/coldcold.jpg ",
                "alt": " "
            },


            "name": "COLD BREW BLACK",
            "description": "Starbucks® Kenya coffee is freshly ground and then steeped for 48 hours. This artisanal process results in deliciously iced coffee that is served over ice, unsweetened.",
            "price": 299,
            "currency": " Rs. ",

            "quantities": {
                "name": "SHORT",
                "quantity": 221,
                "unit": " ML ",
                "calories": .171,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/toffeecold.jpg ",
                "alt": " "
            },


            "name": "TOFFEE NUT CRUNCH COLD BREW",
            "description": "Starbucks signature Cold Brew, balanced by subtle notes of toasted nuts toffee Nut flavored foam and crunchy toffee nut topping",
            "price": 404,
            "currency": " Rs. ",

            "quantities": {
                "name": "TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .193,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/pumpkincold.jpg" ,
                "alt": " "
            },


            "name": "PUMPKIN SPICE CREAM COLD BREW",
            "description": "Our Cold Brew sweetened with vanilla syrup, topped with a pumpkin spice cold foam topping.",
            "price": 584,
            "currency": " Rs. ",
            "quantities": {
                "name": "TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .261,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/vanillacold.jpg ",
                "alt": " "
            },


            "name": "VANILLA SWEET CREAM COLD BREW",
            "description": "Cold Brew with Vanilla Sweet Cream is made with Starbucks® Cold Brew over ice and topped with a hand crafted vanilla sweet cream, which floats on top of the beverage before slowly cascading down.",
            "price": 494,
            "currency": " Rs. ",

            "quantities": {
                "name": "TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .63,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/toffeenutcold.jpg ",
                "alt": " "
            },


            "name": "TOFFEE NUT CRUNCH NITRO COLD BREW",
            "description": "Starbucks signature Nitro Cold Brew, balanced by subtle notes of toasted nuts toffee Nut flavored foam and crunchy toffee nut topping.",
            "price": 439,
            "currency": " Rs. ",

            "quantities": {
                "name": "SHORT",
                "quantity": 237,
                "unit": " ML ",
                "calories": .163,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        },
        {
            "image": {
                "source": "../../assets/image/whitecold.jpg",
                "alt": " "
            },


            "name": "WHITE MOCHA CARAMEL COLD BREW",
            "description": "Our slow steeped Cold brew shaken with milk and white chocolate to strike the perfect balance of coffee and sweetness.",
            "price": 404,
            "currency": " Rs. ",

            "quantities": {
                "name": "TALL",
                "quantity": 354,
                "unit": " ML ",
                "calories": .194,
                "calories_unit": " Kcal "
            },
            "sizes": [

                {
                    name: "tall",
                    quantity: 50
                },
                {
                    name: "medium",
                    quantity: 30
                },
                {
                    name: "small",
                    quantity: 20
                },
            ]
        }
    ]


row_card = document.createElement("div");
row_card.setAttribute("class", "row");
console.log(row_card);

image_card = document.createElement("div");
image_card.setAttribute("class", "image");
row_card.append(image_card);

image_main_card = document.createElement("img");
image_main_card.setAttribute("src", product_detail_list[0]["image"]["source"]);
image_card.append(image_main_card)

content_card = document.createElement("div");
content_card.setAttribute("class", "content");
row_card.append(content_card);

h3_card = document.createElement("h3");
h3_card.setAttribute("class", "heading");
h3_card.innerText = product_detail_list[0]["name"];
content_card.append(h3_card);

p_card = document.createElement("p");
p_card.setAttribute("class", "calorie");
p_card.innerText = product_detail_list[0]["quantities"]["name"] +
    product_detail_list[0]["quantities"]["quantity"] +
    product_detail_list[0]["quantities"]["unit"] +
    product_detail_list[0]["quantities"]["calories"] +
    product_detail_list[0]["quantities"]["calories_unit"];
;
content_card.append(p_card);


p1_card = document.createElement("p");
p1_card.setAttribute("class", "detail");
p1_card.innerText = product_detail_list[0]["description"];
content_card.append(p1_card);

p2_card = document.createElement("p");
p2_card.setAttribute("class", "cost");
p2_card.innerText = product_detail_list[0]["currency"] + product_detail_list[0]["price"];
content_card.append(p2_card);

button_card = document.createElement("div");
button_card.setAttribute("class", "buttons");
content_card.append(button_card);

size_card = document.createElement("div");
size_card.setAttribute("class", "size");
button_card.append(size_card);

btn1_card = document.createElement("button");
btn1_card.setAttribute("class", "btn-button");
btn1_card.setAttribute("id", "btn-1");
btn1_card.innerText = product_detail_list[0]["sizes"][0]["name"];
size_card.append(btn1_card);


btn2_card = document.createElement("button");
btn2_card.setAttribute("class", "btn-button");
btn2_card.setAttribute("id", "btn-2");
btn2_card.innerText = product_detail_list[0]["sizes"][1]["name"];
size_card.append(btn2_card);

btn3_card = document.createElement("button");
btn3_card.setAttribute("class", "btn-button");
btn3_card.setAttribute("id", "btn-3");
btn3_card.innerText = product_detail_list[0]["sizes"][2]["name"];
size_card.append(btn3_card);

inc_dec_button_card = document.createElement("div");
inc_dec_button_card.setAttribute("class", "inc-dec-button");
button_card.append(inc_dec_button_card);

inc_dec_card = document.createElement("button");
inc_dec_card.setAttribute("class", "inc_dec");
inc_dec_button_card.append(inc_dec_card);

minus_card = document.createElement("span");
minus_card.setAttribute("class", "minus");
inc_dec_card.append(minus_card);

i1_card = document.createElement("i");
i1_card.setAttribute("class", "fa-solid fa-minus");
minus_card.append(i1_card);

volume_card = document.createElement("span");
volume_card.setAttribute("class", "volume");
volume_card.innerText = "0";
inc_dec_card.append(volume_card);

plus_card = document.createElement("span");
plus_card.setAttribute("class", "plus");
inc_dec_card.append(plus_card);

i2_card = document.createElement("i");
i2_card.setAttribute("class", "fa-solid fa-plus");
plus_card.append(i2_card);


add_item_card = document.createElement("div");
add_item_card.setAttribute("class", "add-item-cart");
button_card.append(add_item_card);

a_card = document.createElement("a");
a_card.setAttribute("href", "../../pages/add to cart/addtocart.html");
add_item_card.append(a_card);

btn4_card = document.createElement("button");
btn4_card.setAttribute("class", "btn-button");
btn4_card.setAttribute("id", "btn-4");
btn4_card.innerText = "Add to the cart"
a_card.append(btn4_card);

document.querySelector(".about-product").append(row_card);


