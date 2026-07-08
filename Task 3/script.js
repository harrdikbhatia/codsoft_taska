// Menu Data

const menuData = [

    {

        id: 1,

        title: 'Paneer Tikka Masala',

        category: 'mains',

        cuisine: 'Indian',

        price: 369.00,

        image: 'images/paneer_tikka_masala.jpg?v=1782681903',

        desc: 'Smoky paneer cubes simmered in a rich tomato and cashew sauce with aromatic spices.',

        isVeg: true,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 2,

        title: 'Veg Hyderabadi Biryani',

        category: 'mains',

        cuisine: 'Indian',

        price: 429.00,

        image: 'images/biryani.png',

        desc: 'Layered basmati rice with saffron, tender lamb, and warm spices for a fragrant feast.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 3,

        title: 'Mango Lassi',

        category: 'beverages',

        cuisine: 'Indian',

        price: 149.00,

        image: 'images/mango_lassi.png',

        desc: 'Creamy mango yogurt drink finished with a hint of cardamom and honey.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 4,

        title: 'Gulab Jamun Cheesecake',

        category: 'desserts',

        cuisine: 'Indian',

        price: 259.00,

        image: 'images/gulab_jamun_cheesecake.jpg?v=2',

        desc: 'A modern twist on a classic dessert, pairing soft syruped dumplings with rich cheesecake.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 5,

        title: 'Spring Onion Soup',

        category: 'starters',

        cuisine: 'Continental',

        price: 189.00,

        image: 'images/soup.png',

        desc: 'Velvety soup with caramelized onions, a splash of sherry, and a crisp herb garnish.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 6,

        title: 'Classic Bruschetta',

        category: 'starters',

        cuisine: 'Italian',

        price: 249.00,

        image: 'images/honey_chili_potato.png',

        desc: 'Toasted artisan bread topped with fresh tomatoes, basil, garlic, and balsamic glaze.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 7,

        title: 'Vegetable Spring Rolls',

        category: 'starters',

        cuisine: 'Chinese',

        price: 229.00,

        image: 'images/spring_rolls.png',

        desc: 'Golden fried rolls filled with crisp vegetables and served with sweet chili sauce.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 8,

        title: 'Mushroom Risotto',

        category: 'mains',

        cuisine: 'Italian',

        price: 389.00,

        image: 'images/mushroom_risotto.jpg?v=2',

        desc: 'Creamy arborio rice cooked with wild mushrooms, parmesan, and white wine.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 9,

        title: 'Tandoori Paneer',

        category: 'mains',

        cuisine: 'Tandoor',

        price: 449.00,

        image: 'images/tandoori_paneer.jpg?v=2',

        desc: 'Juicy chicken marinated in yogurt and spices, roasted in the tandoor until charred.',

        isVeg: true,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 10,

        title: 'Garlic Butter Mushrooms',

        category: 'mains',

        cuisine: 'Continental',

        price: 529.00,

        image: 'images/garlic_butter_mushrooms.jpg?v=2',

        desc: 'Sizzling prawns in garlic butter served with wilted greens and lemon.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 11,

        title: 'Dal Makhani',

        category: 'mains',

        cuisine: 'Indian',

        price: 319.00,

        image: 'images/dal_makhani.jpg?v=2',

        desc: 'Slow-cooked black lentils in a creamy tomato gravy with butter and spices.',

        isVeg: true,

        rating: 4.9,

        tags: []

    },

    {

        id: 12,

        title: 'Paneer Korma',

        category: 'mains',

        cuisine: 'Indian',

        price: 379.00,

        image: 'images/butter_chicken.png',

        desc: 'Tender chicken in a fragrant cashew and cream sauce with cardamom and cinnamon.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 13,

        title: 'Pav Bhaji',

        category: 'starters',

        cuisine: 'Indian',

        price: 239.00,

        image: 'images/pav_bhaji.jpg?v=2',

        desc: 'Butter-toasted buns served with a spiced vegetable mash and tangy onion salad.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 45,

        title: 'Butter Naan',

        category: 'breads',

        cuisine: 'Indian',

        price: 89.00,

        image: 'images/naan_bread.png',

        desc: 'Freshly baked naan brushed with melting butter and served warm.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 46,

        title: 'Garlic Naan',

        category: 'breads',

        cuisine: 'Indian',

        price: 99.00,

        image: 'images/naan_bread.png',

        desc: 'Soft naan tossed with garlic butter and fresh herbs for a fragrant finish.',

        isVeg: true,

        rating: 4.9,

        tags: ['special']

    },

    {

        id: 47,

        title: 'Tandoori Roti',

        category: 'breads',

        cuisine: 'Indian',

        price: 79.00,

        image: 'images/tandoori_roti.jpg?v=2',

        desc: 'Whole wheat roti cooked in the tandoor, with a slightly charred texture.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 48,

        title: 'Laccha Paratha',

        category: 'breads',

        cuisine: 'Indian',

        price: 109.00,

        image: 'images/laccha_paratha.jpg?v=2',

        desc: 'Layered flaky paratha served hot with a crisp buttery finish.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 18,

        title: 'Paneer Lababdar',

        category: 'mains',

        cuisine: 'Indian',

        price: 339.00,

        image: 'images/butter_chicken.png',

        desc: 'Soft paneer cubes in a creamy tomato-onion gravy with fenugreek and spices.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 15,

        title: 'Chole Bhature',

        category: 'mains',

        cuisine: 'Indian',

        price: 299.00,

        image: 'images/chole_bhature.jpg?v=2',

        desc: 'Flavorful chickpea curry served with fluffy fried bread and pickle.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 16,

        title: 'Paneer Curry',

        category: 'mains',

        cuisine: 'Indian',

        price: 429.00,

        image: 'images/butter_chicken.png',

        desc: 'Coastal-style fish cooked in tangy tamarind and coconut gravy.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 17,

        title: 'Szechuan Noodles',

        category: 'mains',

        cuisine: 'Chinese',

        price: 289.00,

        image: 'images/noodles.png',

        desc: 'Stir-fried noodles tossed with vegetables and a bold spicy Szechuan sauce.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 14,

        title: 'Kung Pao Paneer',

        category: 'mains',

        cuisine: 'Chinese',

        price: 359.00,

        image: 'images/butter_chicken.png',

        desc: 'Crispy chicken and peanuts in a sweet-spicy Sichuan glaze.',

        isVeg: true,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 19,

        title: 'Honey Chili Potato',

        category: 'starters',

        cuisine: 'Chinese',

        price: 229.00,

        image: 'images/honey_chili_potato.png',

        desc: 'Crispy potato wedges tossed in honey chili sauce and sesame seeds.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 20,

        title: 'Veg Steamed Dumplings',

        category: 'starters',

        cuisine: 'Chinese',

        price: 249.00,

        image: 'images/dumplings.png',

        desc: 'Delicate pockets filled with pork and greens, served with soy dipping sauce.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 21,

        title: 'Sweet Corn Soup',

        category: 'starters',

        cuisine: 'Chinese',

        price: 199.00,

        image: 'images/soup.png',

        desc: 'Silky soup with sweet corn, tofu, and crunchy vegetable confetti.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 22,

        title: 'Chow Mein',

        category: 'mains',

        cuisine: 'Chinese',

        price: 279.00,

        image: 'images/noodles.png',

        desc: 'Wok-tossed noodles with crunchy vegetables and savory soy glaze.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 23,

        title: 'Honey Garlic Chicken',

        category: 'mains',

        cuisine: 'Chinese',

        price: 339.00,

        image: 'images/honey_garlic_chicken.jpg?v=2',

        desc: 'Tender chicken in a glossy honey garlic sauce with crunchy greens.',

        isVeg: false,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 24,

        title: 'Veg Tom Yum Soup',

        category: 'starters',

        cuisine: 'Chinese',

        price: 249.00,

        image: 'images/soup.png',

        desc: 'Aromatic broth with shrimp, lemongrass, mushrooms, and chili.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 55,

        title: 'Crispy Chilli Paneer',

        category: 'starters',

        cuisine: 'Chinese',

        price: 269.00,

        image: 'images/butter_chicken.png',

        desc: 'Paneer tossed in spicy chili sauce with peppers and sesame seeds.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    

    {

        id: 57,

        title: 'Veg Dan Dan Noodles',

        category: 'mains',

        cuisine: 'Chinese',

        price: 309.00,

        image: 'images/noodles.png',

        desc: 'Spicy Sichuan noodles with minced pork, peanuts, and chili oil.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 25,

        title: 'Margherita Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 349.00,

        image: 'images/margherita_pizza.jpg?v=2',

        desc: 'Wood-fired pizza with San Marzano tomatoes, fresh mozzarella, and basil.',

        isVeg: true,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 26,

        title: 'Mushroom Bolognese',

        category: 'mains',

        cuisine: 'Italian',

        price: 399.00,

        image: 'images/butter_chicken.png',

        desc: 'Classic spaghetti with rich slow-cooked beef ragu and parmesan.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 27,

        title: 'Pesto Gnocchi',

        category: 'mains',

        cuisine: 'Italian',

        price: 419.00,

        image: 'images/pasta_alfredo.png',

        desc: 'Pillowy potato gnocchi tossed with basil pesto and toasted pine nuts.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 28,

        title: 'Caprese Salad',

        category: 'starters',

        cuisine: 'Italian',

        price: 299.00,

        image: 'images/salad.png',

        desc: 'Juicy tomatoes, mozzarella, basil, and balsamic glaze for a light start.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 29,

        title: 'Four Cheese Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 429.00,

        image: 'images/four_cheese_pizza.jpg?v=2',

        desc: 'Creamy blend of mozzarella, gorgonzola, parmesan and ricotta on a crispy crust.',

        isVeg: true,

        rating: 4.9,

        tags: ['special']

    },

    {

        id: 30,

        title: 'Tiramisu',

        category: 'desserts',

        cuisine: 'Italian',

        price: 249.00,

        image: 'images/tiramisu.png',

        desc: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.',

        isVeg: true,

        rating: 4.9,

        tags: ['special']

    },

    {

        id: 49,

        title: 'Arancini di Riso',

        category: 'starters',

        cuisine: 'Italian',

        price: 289.00,

        image: 'images/arancini_di_riso.jpg?v=2',

        desc: 'Golden-fried risotto balls stuffed with cheese and served with marinara dip.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 50,

        title: 'Vegetable Lasagna',

        category: 'mains',

        cuisine: 'Italian',

        price: 449.00,

        image: 'images/vegetable_lasagna.jpg?v=2',

        desc: 'Layered pasta baked with rich ragù, béchamel, and melted mozzarella.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 51,

        title: 'Panna Cotta',

        category: 'desserts',

        cuisine: 'Italian',

        price: 219.00,

        image: 'images/tiramisu.png',

        desc: 'Silky vanilla panna cotta finished with berry compote and roasted almonds.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 31,

        title: 'Ratatouille Tart',

        category: 'starters',

        cuisine: 'Continental',

        price: 299.00,

        image: 'images/ratatouille_tart.jpg?v=2',

        desc: 'Buttery pastry topped with roasted vegetables, herbs, and goat cheese.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 32,

        title: 'Mushroom Wellington',

        category: 'mains',

        cuisine: 'Continental',

        price: 699.00,

        image: 'images/butter_chicken.png',

        desc: 'Succulent beef tenderloin wrapped in mushroom duxelles and puff pastry.',

        isVeg: true,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 33,

        title: 'Caesar Salad',

        category: 'starters',

        cuisine: 'Continental',

        price: 289.00,

        image: 'images/salad.png',

        desc: 'Crisp romaine with parmesan, croutons, and creamy Caesar dressing.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 34,

        title: 'Grilled Portobello Fillet',

        category: 'mains',

        cuisine: 'Continental',

        price: 569.00,

        image: 'images/gourmet_steak.png',

        desc: 'Char-grilled salmon served with lemon thyme butter and roasted potatoes.',

        isVeg: true,

        rating: 4.9,

        tags: ['recommended']

    },

    {

        id: 35,

        title: 'Creamy Mushroom Soup',

        category: 'starters',

        cuisine: 'Continental',

        price: 219.00,

        image: 'images/soup.png',

        desc: 'Silky mushroom soup finished with cream and fresh herbs.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 36,

        title: 'Chocolate Fondant',

        category: 'desserts',

        cuisine: 'Continental',

        price: 329.00,

        image: 'images/chocolate_lava_cake.png',

        desc: 'Decadent molten cake served warm with vanilla bean ice cream.',

        isVeg: true,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 37,

        title: 'Herb Crusted Paneer',

        category: 'mains',

        cuisine: 'Continental',

        price: 449.00,

        image: 'images/butter_chicken.png',

        desc: 'Roasted chicken with a crispy herb crust, side of seasonal vegetables.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 52,

        title: 'Mushroom Confit',

        category: 'mains',

        cuisine: 'Continental',

        price: 689.00,

        image: 'images/butter_chicken.png',

        desc: 'Slow-cooked duck leg served with garlic potatoes and a red wine glaze.',

        isVeg: true,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 53,

        title: 'Veg en Papillote',

        category: 'mains',

        cuisine: 'Continental',

        price: 599.00,

        image: 'images/butter_chicken.png',

        desc: 'Delicate salmon baked in parchment with lemon, herbs, and seasonal vegetables.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 54,

        title: 'Apple Tarte Tatin',

        category: 'desserts',

        cuisine: 'Continental',

        price: 269.00,

        image: 'images/tiramisu.png',

        desc: 'Caramelized apple tart served warm with vanilla ice cream.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 38,

        title: 'Tandoori Paneer Tikka',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 279.00,

        image: 'images/tandoori_paneer_tikka.jpg?v=1782680675',

        desc: 'Paneer cubes marinated in yogurt and spices, charred in the tandoor.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 39,

        title: 'Paneer Kebab Platter',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 339.00,

        image: 'images/paneer_kebab_platter.jpg?v=2',

        desc: 'Spiced minced meat skewers grilled over charcoal and served with chutney.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 40,

        title: 'Tandoori Mushroom Tikka',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 369.00,

        image: 'images/tandoori_mushroom_tikka.jpg?v=1782680850',

        desc: 'Tender fish chunks marinated in zingy spices and roasted to perfection.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 41,

        title: 'Naan Basket',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 159.00,

        image: 'images/naan_basket.jpg?v=1782680675',

        desc: 'Assortment of garlic, butter, and plain naan baked in the tandoor.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 42,

        title: 'Tandoori Mushroom',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 279.00,

        image: 'images/tandoori_mushroom.jpg?v=2',

        desc: 'Wild mushrooms marinated in spiced yogurt and roasted with charred edges.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 43,

        title: 'Paneer Malai Tikka',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 379.00,

        image: 'images/paneer_malai_tikka.jpg?v=2',

        desc: 'Creamy chicken skewers seasoned with cardamom, saffron, and cottage cheese.',

        isVeg: true,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 44,

        title: 'Tandoori Mixed Veg Grill',

        category: 'mains',

        cuisine: 'Tandoor',

        price: 599.00,

        image: 'images/tandoori_mixed_veg_grill.jpg?v=1782680675',

        desc: 'An indulgent platter of tandoori chicken, kebab, fish tikka, and paneer skewers.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 58,

        title: 'Paneer Reshmi Kebab',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 319.00,

        image: 'images/paneer_reshmi_kebab.jpg?v=2',

        desc: 'Silky chicken kebabs marinated in cream, nuts, and aromatic spices.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 59,

        title: 'Tandoori Mushroom Bites',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 369.00,

        image: 'images/tandoori_mushroom_bites.jpg?v=2',

        desc: 'Juicy prawns marinated in tandoori spices and char-grilled to smoky perfection.',

        isVeg: true,

        rating: 4.9,

        tags: []

    },

    {

        id: 60,

        title: 'Tandoori Chaap',

        category: 'mains',

        cuisine: 'Tandoor',

        price: 449.00,

        image: 'images/tandoori_chaap.jpg?v=2',

        desc: 'Spiced soya chaap cooked in the tandoor, served with mint chutney.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 61,

        title: 'Truffle Mushroom Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 479.00,

        image: 'images/truffle_mushroom_pizza.jpg?v=2',

        desc: 'Earthy mushrooms, truffle oil, and fontina cheese on a crisp thin crust.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 62,

        title: 'BBQ Chicken Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 459.00,

        image: 'images/bbq_chicken_pizza.jpg?v=2',

        desc: 'Smoky BBQ chicken, red onions, cilantro, and mozzarella on a hand-stretched pie.',

        isVeg: false,

        rating: 4.7,

        tags: []

    },

    {

        id: 63,

        title: 'Classic Smash Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 349.00,

        image: 'images/classic_smash_burger.jpg?v=2',

        desc: 'Juicy beef patty smashed on the griddle, with cheddar, pickles, and secret sauce.',

        isVeg: false,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 64,

        title: 'Spicy Paneer Burger',

        category: 'burgers',

        cuisine: 'Indian',

        price: 329.00,

        image: 'images/spicy_paneer_burger.jpg?v=2',

        desc: 'Grilled paneer patty with spicy chutney, onions, lettuce, and a soft brioche bun.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 65,

        title: 'Truffle Wagyu Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 599.00,

        image: 'images/truffle_wagyu_burger.jpg?v=2',

        desc: 'Premium wagyu beef with truffle aioli, gruyere cheese, and caramelized onions.',

        isVeg: false,

        rating: 4.9,

        tags: ['special']

    },

    

    {

        id: 67,

        title: 'Lemon Cheesecake',

        category: 'desserts',

        cuisine: 'Continental',

        price: 269.00,

        image: 'images/tiramisu.png',

        desc: 'Zesty lemon cheesecake with a buttery graham crust and fresh berry drizzle.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 68,

        title: 'Roomali Roti',

        category: 'breads',

        cuisine: 'Indian',

        price: 89.00,

        image: 'images/roomali_roti.jpg?v=2',

        desc: 'Paper-thin handkerchief roti cooked over a hot griddle and folded for softness.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 69,

        title: 'Cheese Kulcha',

        category: 'breads',

        cuisine: 'Indian',

        price: 119.00,

        image: 'images/naan_bread.png',

        desc: 'Fluffy kulcha stuffed with melted cheese and baked until golden brown.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 70,

        title: 'Masala Chai',

        category: 'beverages',

        cuisine: 'Indian',

        price: 119.00,

        image: 'images/masala_chai.jpg?v=2',

        desc: 'Fragrant tea brewed with spices, milk, and a touch of sweet honey.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 71,

        title: 'Iced Matcha Latte',

        category: 'beverages',

        cuisine: 'Continental',

        price: 179.00,

        image: 'images/iced_matcha_latte.jpg?v=2',

        desc: 'Smooth matcha latte served over ice with oat milk and a subtle vanilla finish.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 72,

        title: 'Cold Brew Coffee',

        category: 'beverages',

        cuisine: 'Continental',

        price: 159.00,

        image: 'images/coffee_tea.png',

        desc: 'Rich cold brew coffee served chilled over ice with a hint of chocolate and cream.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 73,

        title: 'Roasted Vegetable Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 389.00,

        image: 'images/roasted_vegetable_pizza.jpg?v=2',

        desc: 'Seasonal roasted vegetables, ricotta, and basil on a garlic-infused crust.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 74,

        title: 'Pepperoni Overload Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 459.00,

        image: 'images/pepperoni_overload_pizza.jpg?v=2',

        desc: 'Loaded with pepperoni, mozzarella, and spicy tomato sauce on a chewy crust.',

        isVeg: false,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 75,

        title: 'Blue Cheese Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 389.00,

        image: 'images/blue_cheese_burger.jpg?v=2',

        desc: 'Beef patty topped with blue cheese, caramelized onions, and arugula.',

        isVeg: false,

        rating: 4.8,

        tags: []

    },

    {

        id: 76,

        title: 'Avocado Chickpea Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 329.00,

        image: 'images/avocado_chickpea_burger.jpg?v=2',

        desc: 'Creamy avocado and chickpea patty with lettuce, tomato, and lemon mayo.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 77,

        title: 'Chocolate Lava Cake',

        category: 'desserts',

        cuisine: 'Continental',

        price: 289.00,

        image: 'images/chocolate_lava_cake.png',

        desc: 'Warm molten chocolate cake served with vanilla ice cream.',

        isVeg: true,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 78,

        title: 'Raspberry Mille-Feuille',

        category: 'desserts',

        cuisine: 'Continental',

        price: 289.00,

        image: 'images/tiramisu.png',

        desc: 'Layers of crisp puff pastry, vanilla cream, and fresh raspberries.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 79,

        title: 'Onion Kulcha',

        category: 'breads',

        cuisine: 'Indian',

        price: 109.00,

        image: 'images/naan_bread.png',

        desc: 'Soft kulcha stuffed with sweet caramelized onions and baked until golden.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 80,

        title: 'Paneer Paratha',

        category: 'breads',

        cuisine: 'Indian',

        price: 129.00,

        image: 'images/paneer_paratha.jpg?v=1782681005',

        desc: 'Flaky wheat paratha stuffed with spiced paneer and grilled to perfection.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 81,

        title: 'Sparkling Elderflower Lemonade',

        category: 'beverages',

        cuisine: 'Continental',

        price: 179.00,

        image: 'images/cold_drinks.png',

        desc: 'Light sparkling lemonade infused with elderflower and fresh mint.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 82,

        title: 'Coconut Cold Brew',

        category: 'beverages',

        cuisine: 'Continental',

        price: 189.00,

        image: 'images/coffee_tea.png',

        desc: 'Smooth cold brew coffee blended with creamy coconut milk.',

        isVeg: true,

        rating: 4.7,

        tags: ['special']

    },

    {

        id: 83,

        title: 'Samosa Trio',

        category: 'starters',

        cuisine: 'Indian',

        price: 199.00,

        image: 'images/samosa_trio.jpg?v=2',

        desc: 'Crispy golden-fried pastries filled with spiced potato, peas, and herbs. Served with tamarind chutney.',

        isVeg: true,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 84,

        title: 'Onion Bhaji',

        category: 'starters',

        cuisine: 'Indian',

        price: 179.00,

        image: 'images/onion_bhaji.jpg?v=2',

        desc: 'Crispy fritters made with thinly sliced onions in a spiced gram flour batter, fried until golden.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 85,

        title: 'Chicken 65',

        category: 'starters',

        cuisine: 'Indian',

        price: 249.00,

        image: 'images/butter_chicken.png',

        desc: 'Tender chicken pieces marinated in spices and yogurt, deep-fried until crispy and served with curry leaves.',

        isVeg: false,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 86,

        title: 'Paneer Pakora',

        category: 'starters',

        cuisine: 'Indian',

        price: 219.00,

        image: 'images/paneer_pakora.jpg?v=2',

        desc: 'Soft paneer cubes coated in spiced gram flour batter and deep-fried until golden. Served with mint chutney.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 87,

        title: 'Seekh Kebab (3 Pieces)',

        category: 'starters',

        cuisine: 'Indian',

        price: 259.00,

        image: 'images/seekh_kebab_3_pieces.jpg?v=2',

        desc: 'Minced lamb wrapped around skewers with herbs and spices, grilled in the tandoor. Served with lemon and onion.',

        isVeg: false,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 88,

        title: 'Shrimp Koliwada',

        category: 'starters',

        cuisine: 'Indian',

        price: 289.00,

        image: 'images/grilled_salmon.png',

        desc: 'Succulent shrimp coated in coconut and chili paste, deep-fried until crispy. A coastal Indian delicacy.',

        isVeg: false,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 89,

        title: 'Hara Bhara Kebab',

        category: 'starters',

        cuisine: 'Indian',

        price: 189.00,

        image: 'images/hara_bhara_kebab.jpg?v=2',

        desc: 'Green vegetable patties made with spinach, peas, and herbs, pan-fried until crispy. A healthy, flavorful starter.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 90,

        title: 'Fish Pakora',

        category: 'starters',

        cuisine: 'Indian',

        price: 269.00,

        image: 'images/fish_pakora.jpg?v=2',

        desc: 'Fresh fish pieces marinated and coated in spiced gram flour batter, deep-fried until crispy and golden.',

        isVeg: false,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 91,

        title: 'Steamed Vegetable Momos',

        category: 'starters',

        cuisine: 'Indian',

        price: 189.00,

        image: 'images/dumplings.png',

        desc: 'Delicate steamed dumplings filled with fresh vegetables, ginger, and garlic. Served with spicy red chili sauce.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 92,

        title: 'Chicken Momos',

        category: 'starters',

        cuisine: 'Indian',

        price: 219.00,

        image: 'images/dumplings.png',

        desc: 'Tender chicken momos with ginger and scallions, steamed to perfection. Paired with our house chili sauce.',

        isVeg: false,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 93,

        title: 'Paneer & Corn Momos',

        category: 'starters',

        cuisine: 'Indian',

        price: 229.00,

        image: 'images/dumplings.png',

        desc: 'Creamy paneer and sweet corn dumplings, steamed until tender. A delightful vegetarian option.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 94,

        title: 'Fried Spicy Chicken Momos',

        category: 'starters',

        cuisine: 'Indian',

        price: 249.00,

        image: 'images/dumplings.png',

        desc: 'Crispy fried chicken momos tossed in a fiery chili and garlic sauce. For the adventurous palate.',

        isVeg: false,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 95,

        title: 'Mixed Vegetable Fried Momos',

        category: 'starters',

        cuisine: 'Indian',

        price: 199.00,

        image: 'images/dumplings.png',

        desc: 'Golden-fried dumplings filled with mixed vegetables and spices. Served with sweet and sour sauce.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 96,

        title: 'Jeera Rice',

        category: 'mains',

        cuisine: 'Indian',

        price: 159.00,

        image: 'images/biryani.png',

        desc: 'Aromatic basmati rice cooked with cumin seeds and ghee, perfect with curries and gravies.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 97,

        title: 'Vegetable Pulao',

        category: 'mains',

        cuisine: 'Indian',

        price: 219.00,

        image: 'images/biryani.png',

        desc: 'Fragrant rice simmered with mixed vegetables, whole spices and fresh herbs for a comforting meal.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 98,

        title: 'Vegetable Fried Rice',

        category: 'mains',

        cuisine: 'Chinese',

        price: 249.00,

        image: 'images/biryani.png',

        desc: 'Wok-tossed rice with shredded chicken, eggs, vegetables and soy-infused flavors.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 99,

        title: 'Crispy Cantonese Tofu',

        category: 'mains',

        cuisine: 'Chinese',

        price: 339.00,

        image: 'images/butter_chicken.png',

        desc: 'Golden battered chicken tossed in a sweet and savory Cantonese glaze.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 100,

        title: 'Shanghai Vegetable Dumplings',

        category: 'starters',

        cuisine: 'Chinese',

        price: 219.00,

        image: 'images/dumplings.png',

        desc: 'Steamed dumplings filled with mixed vegetables, ginger, and sesame oil.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 101,

        title: 'Ma Po Tofu',

        category: 'mains',

        cuisine: 'Chinese',

        price: 259.00,

        image: 'images/ma_po_tofu.jpg?v=2',

        desc: 'Silken tofu simmered in a spicy Sichuan chili sauce with minced vegetables.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 102,

        title: 'Sesame Chicken',

        category: 'mains',

        cuisine: 'Chinese',

        price: 329.00,

        image: 'images/butter_chicken.png',

        desc: 'Crispy chicken pieces coated in a toasted sesame and honey glaze.',

        isVeg: false,

        rating: 4.7,

        tags: []

    },

    {

        id: 103,

        title: 'Szechuan Tofu Stir Fry',

        category: 'starters',

        cuisine: 'Chinese',

        price: 239.00,

        image: 'images/butter_chicken.png',

        desc: 'Tofu cubes tossed with bell peppers in a bold Szechuan sauce.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 104,

        title: 'Wonton Soup',

        category: 'starters',

        cuisine: 'Chinese',

        price: 189.00,

        image: 'images/soup.png',

        desc: 'Warm broth with tender wontons filled with pork and shrimp.',

        isVeg: false,

        rating: 4.6,

        tags: []

    },

    {

        id: 105,

        title: 'Singapore Noodles',

        category: 'mains',

        cuisine: 'Chinese',

        price: 269.00,

        image: 'images/noodles.png',

        desc: 'Thin rice noodles stir-fried with prawns, veggies, and curry-spiced sauce.',

        isVeg: false,

        rating: 4.7,

        tags: []

    },

    {

        id: 106,

        title: 'Ginger Garlic Fish',

        category: 'mains',

        cuisine: 'Chinese',

        price: 339.00,

        image: 'images/grilled_salmon.png',

        desc: 'Pan-seared fish fillet glazed with ginger, garlic, and spring onions.',

        isVeg: false,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 107,

        title: 'Honey Chili Cauliflower',

        category: 'starters',

        cuisine: 'Chinese',

        price: 219.00,

        image: 'images/honey_chili_potato.png',

        desc: 'Crispy cauliflower florets tossed in a sweet and spicy chili sauce.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 108,

        title: 'Chicken Lettuce Wraps',

        category: 'starters',

        cuisine: 'Chinese',

        price: 239.00,

        image: 'images/butter_chicken.png',

        desc: 'Savory minced chicken served in crisp lettuce cups with hoisin sauce.',

        isVeg: false,

        rating: 4.7,

        tags: []

    },

    {

        id: 109,

        title: 'Crispy Plum Pork Ribs',

        category: 'mains',

        cuisine: 'Chinese',

        price: 359.00,

        image: 'images/gourmet_steak.png',

        desc: 'Tender pork ribs glazed in a tangy plum sauce and finished with sesame seeds.',

        isVeg: false,

        rating: 4.8,

        tags: []

    },

    

    {

        id: 112,

        title: 'Chicken Parmesan',

        category: 'mains',

        cuisine: 'Italian',

        price: 429.00,

        image: 'images/butter_chicken.png',

        desc: 'Breaded chicken breast topped with marinara, mozzarella, and parmesan cheese.',

        isVeg: false,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 113,

        title: 'Fettuccine Alfredo',

        category: 'mains',

        cuisine: 'Italian',

        price: 379.00,

        image: 'images/pasta_alfredo.png',

        desc: 'Creamy fettuccine tossed with parmesan, butter, and cracked black pepper.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 114,

        title: 'Pesto Ravioli',

        category: 'mains',

        cuisine: 'Italian',

        price: 349.00,

        image: 'images/pasta_alfredo.png',

        desc: 'Ricotta-filled ravioli smothered in fresh basil pesto and toasted pine nuts.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 115,

        title: 'Sicilian Eggplant Parmigiana',

        category: 'mains',

        cuisine: 'Italian',

        price: 319.00,

        image: 'images/pasta_alfredo.png',

        desc: 'Layers of roasted eggplant, tomato sauce, and parmesan baked until bubbly.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 116,

        title: 'Lemon Risotto',

        category: 'mains',

        cuisine: 'Italian',

        price: 359.00,

        image: 'images/lemon_risotto.jpg?v=2',

        desc: 'Creamy arborio rice cooked with lemon zest, white wine, and parmesan.',

        isVeg: true,

        rating: 4.7,

        tags: ['special']

    },

    {

        id: 117,

        title: 'Burrata Caprese',

        category: 'starters',

        cuisine: 'Italian',

        price: 279.00,

        image: 'images/salad.png',

        desc: 'Creamy burrata served with heirloom tomatoes, basil, balsamic glaze, and olive oil.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 118,

        title: 'Garlic Rosemary Focaccia',

        category: 'starters',

        cuisine: 'Italian',

        price: 199.00,

        image: 'images/butter_chicken.png',

        desc: 'Warm focaccia bread with garlic, rosemary, and sea salt, perfect for sharing.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 119,

        title: 'Meatball Parmigiana',

        category: 'mains',

        cuisine: 'Italian',

        price: 399.00,

        image: 'images/pasta_alfredo.png',

        desc: 'Juicy meatballs simmered in tomato sauce and topped with melted mozzarella.',

        isVeg: false,

        rating: 4.7,

        tags: ['special']

    },

    {

        id: 120,

        title: 'Polenta Fries with Truffle Aioli',

        category: 'starters',

        cuisine: 'Italian',

        price: 249.00,

        image: 'images/honey_chili_potato.png',

        desc: 'Crunchy golden polenta fries served with creamy truffle aioli.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 121,

        title: 'Achari Paneer Tikka',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 289.00,

        image: 'images/achari_paneer_tikka.jpg?v=2',

        desc: 'Paneer cubes marinated in tangy achari spices and charred in the tandoor.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 122,

        title: 'Tandoori Lamb Chops',

        category: 'mains',

        cuisine: 'Tandoor',

        price: 559.00,

        image: 'images/tandoori_lamb_chops.jpg?v=2',

        desc: 'Succulent lamb chops marinated in aromatic spices and roasted over charcoal.',

        isVeg: false,

        rating: 4.9,

        tags: ['bestseller']

    },

    {

        id: 123,

        title: 'Tandoori Broccoli',

        category: 'starters',

        cuisine: 'Tandoor',

        price: 229.00,

        image: 'images/tandoori_broccoli.jpg?v=2',

        desc: 'Broccoli florets marinated with yogurt and spices, grilled until tender.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 124,

        title: 'Tandoori Butter Chicken',

        category: 'mains',

        cuisine: 'Tandoor',

        price: 499.00,

        image: 'images/tandoori_butter_chicken.jpg?v=2',

        desc: 'Rich butter chicken with smoky tandoori flavor, served with a creamy tomato gravy.',

        isVeg: false,

        rating: 4.9,

        tags: ['special']

    },

    {

        id: 125,

        title: 'Cheese Garlic Naan',

        category: 'breads',

        cuisine: 'Indian',

        price: 119.00,

        image: 'images/naan_bread.png',

        desc: 'Soft naan brushed with garlic butter and topped with melted cheese.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 126,

        title: 'Peshawari Naan',

        category: 'breads',

        cuisine: 'Indian',

        price: 129.00,

        image: 'images/naan_bread.png',

        desc: 'Sweet and nutty naan stuffed with dried fruits and nuts for a rich accompaniment.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 127,

        title: 'Paneer Kulcha',

        category: 'breads',

        cuisine: 'Indian',

        price: 139.00,

        image: 'images/naan_bread.png',

        desc: 'Fluffy kulcha stuffed with spiced paneer and charred to golden perfection.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 128,

        title: 'Ajwain Naan',

        category: 'breads',

        cuisine: 'Indian',

        price: 99.00,

        image: 'images/naan_bread.png',

        desc: 'Aromatic flatbread flavored with carom seeds and served warm with curries.',

        isVeg: true,

        rating: 4.5,

        tags: []

    },

    {

        id: 129,

        title: 'Multigrain Roti',

        category: 'breads',

        cuisine: 'Indian',

        price: 109.00,

        image: 'images/naan_bread.png',

        desc: 'Healthy multigrain roti served hot, packed with fiber and subtle spices.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 130,

        title: 'Stuffed Aloo Paratha',

        category: 'breads',

        cuisine: 'Indian',

        price: 119.00,

        image: 'images/naan_bread.png',

        desc: 'Layered paratha filled with spiced mashed potato and served with butter.',

        isVeg: true,

        rating: 4.8,

        tags: ['bestseller']

    },

    {

        id: 131,

        title: 'Jowar Bhakri',

        category: 'breads',

        cuisine: 'Indian',

        price: 109.00,

        image: 'images/naan_bread.png',

        desc: 'Rustic jowar flatbread with a hearty texture and earthy flavor.',

        isVeg: true,

        rating: 4.5,

        tags: []

    },

    {

        id: 132,

        title: 'Mediterranean Veg Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 399.00,

        image: 'images/mediterranean_veg_pizza.jpg?v=2',

        desc: 'Crisp pizza topped with olives, artichokes, bell peppers, and feta.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 133,

        title: 'Neapolitan Margherita',

        category: 'pizza',

        cuisine: 'Italian',

        price: 329.00,

        image: 'images/neapolitan_margherita.jpg?v=1782680850',

        desc: 'Classic wood-fired pizza with tomato, mozzarella, basil, and olive oil.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 134,

        title: 'Chicken Tikka Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 429.00,

        image: 'images/chicken_tikka_pizza.jpg?v=2',

        desc: 'Spiced chicken tikka, onions, and peppers on a cheesy pizza base.',

        isVeg: false,

        rating: 4.7,

        tags: ['special']

    },

    {

        id: 135,

        title: 'Veggie Delight Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 379.00,

        image: 'images/veggie_delight_pizza.jpg?v=1782680675',

        desc: 'Loaded with zucchini, mushrooms, bell peppers, olives, and tomatoes.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 136,

        title: 'Spinach Ricotta Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 389.00,

        image: 'images/spinach_ricotta_pizza.jpg?v=1782681005',

        desc: 'Creamy ricotta and spinach with a garlic-infused crust.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 137,

        title: 'Prawn Pesto Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 449.00,

        image: 'images/prawn_pesto_pizza.jpg?v=2',

        desc: 'Prawns, pesto sauce, cherry tomatoes, and mozzarella on a crisp base.',

        isVeg: false,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 138,

        title: 'Mushroom Truffle Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 429.00,

        image: 'images/mushroom_truffle_pizza.jpg?v=2',

        desc: 'Sautéed mushrooms, truffle oil, and fontina cheese on a thin crust.',

        isVeg: true,

        rating: 4.9,

        tags: ['special']

    },

    {

        id: 139,

        title: 'Buffalo Chicken Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 439.00,

        image: 'images/buffalo_chicken_pizza.jpg?v=2',

        desc: 'Spicy buffalo chicken, blue cheese, and celery on a crunchy crust.',

        isVeg: false,

        rating: 4.7,

        tags: []

    },

    {

        id: 140,

        title: 'Caramelized Onion Pizza',

        category: 'pizza',

        cuisine: 'Italian',

        price: 379.00,

        image: 'images/caramelized_onion_pizza.jpg?v=2',

        desc: 'Sweet caramelized onions, goat cheese, and arugula on a golden crust.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 141,

        title: 'Spicy Chicken Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 329.00,

        image: 'images/spicy_chicken_burger.jpg?v=2',

        desc: 'Zesty chicken patty with jalapeño slaw, cheese, and chipotle mayo.',

        isVeg: false,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 142,

        title: 'Fish Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 319.00,

        image: 'images/fish_burger.jpg?v=2',

        desc: 'Crispy fish fillet with tartar sauce, lettuce, and pickled onions.',

        isVeg: false,

        rating: 4.6,

        tags: []

    },

    {

        id: 143,

        title: 'Paneer Tikka Burger',

        category: 'burgers',

        cuisine: 'Indian',

        price: 299.00,

        image: 'images/paneer_tikka_burger.jpg?v=2',

        desc: 'Grilled paneer tikka with mint chutney, onions, and spicy mayo.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 144,

        title: 'Mushroom Swiss Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 349.00,

        image: 'images/mushroom_swiss_burger.jpg?v=2',

        desc: 'Sautéed mushrooms, Swiss cheese, and caramelized onions on a soft brioche bun.',

        isVeg: false,

        rating: 4.7,

        tags: []

    },

    {

        id: 145,

        title: 'BBQ Bacon Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 379.00,

        image: 'images/bbq_bacon_burger.jpg?v=2',

        desc: 'Smoky bacon, BBQ sauce, cheddar, and crispy onion rings.',

        isVeg: false,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 146,

        title: 'Grilled Veggie Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 289.00,

        image: 'images/grilled_veggie_burger.jpg?v=2',

        desc: 'House-made veggie patty with avocado, lettuce, tomato, and herb mayo.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 147,

        title: 'Loaded Cheese Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 369.00,

        image: 'images/loaded_cheese_burger.jpg?v=1782681226',

        desc: 'Double cheddar, melted onions, and smoky sauce on a juicy beef patty.',

        isVeg: false,

        rating: 4.7,

        tags: ['bestseller']

    },

    {

        id: 148,

        title: 'Falafel Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 299.00,

        image: 'images/falafel_burger.jpg?v=2',

        desc: 'Crispy falafel patty with tahini sauce, pickled veggies, and greens.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 149,

        title: 'Chicken Kebab Burger',

        category: 'burgers',

        cuisine: 'Indian',

        price: 339.00,

        image: 'images/chicken_kebab_burger.jpg?v=2',

        desc: 'Spiced chicken kebab layered with onions, chutney, and fresh greens.',

        isVeg: false,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 150,

        title: 'Lamb Burger',

        category: 'burgers',

        cuisine: 'Continental',

        price: 389.00,

        image: 'images/lamb_burger.jpg?v=2',

        desc: 'Juicy lamb patty with mint yogurt, cucumber, and roasted pepper relish.',

        isVeg: false,

        rating: 4.7,

        tags: ['special']

    },

    {

        id: 151,

        title: 'Rasmalai',

        category: 'desserts',

        cuisine: 'Indian',

        price: 229.00,

        image: 'images/indian_desserts.png',

        desc: 'Soft paneer dumplings soaked in saffron milk and pistachio flakes.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 152,

        title: 'Gajar Halwa',

        category: 'desserts',

        cuisine: 'Indian',

        price: 199.00,

        image: 'images/gajar_halwa.jpg?v=1782680675',

        desc: 'Warm carrot pudding tempered with ghee, nuts, and aromatic spices.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 153,

        title: 'Chocolate Brownie Sundae',

        category: 'desserts',

        cuisine: 'Continental',

        price: 249.00,

        image: 'images/chocolate_lava_cake.png',

        desc: 'Warm brownie served with vanilla ice cream, chocolate sauce, and nuts.',

        isVeg: true,

        rating: 4.9,

        tags: ['special']

    },

    {

        id: 154,

        title: 'Kesar Kulfi',

        category: 'desserts',

        cuisine: 'Indian',

        price: 179.00,

        image: 'images/indian_desserts.png',

        desc: 'Creamy saffron ice cream garnished with pistachios and almond slices.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 155,

        title: 'Mango Cheesecake',

        category: 'desserts',

        cuisine: 'Continental',

        price: 259.00,

        image: 'images/tiramisu.png',

        desc: 'Rich cheesecake layered with mango puree and tropical flavor.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 156,

        title: 'Caramel Flan',

        category: 'desserts',

        cuisine: 'Continental',

        price: 229.00,

        image: 'images/tiramisu.png',

        desc: 'Silky caramel custard topped with caramel sauce and fresh berries.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 157,

        title: 'Masala Chai',

        category: 'beverages',

        cuisine: 'Indian',

        price: 119.00,

        image: 'images/masala_chai.jpg?v=2',

        desc: 'Warm spiced tea brewed with cardamom, cinnamon, ginger, and milk.',

        isVeg: true,

        rating: 4.8,

        tags: []

    },

    {

        id: 158,

        title: 'Rose Lassi',

        category: 'beverages',

        cuisine: 'Indian',

        price: 139.00,

        image: 'images/mango_lassi.png',

        desc: 'Creamy yogurt drink infused with rose syrup and a hint of cardamom.',

        isVeg: true,

        rating: 4.7,

        tags: ['recommended']

    },

    {

        id: 159,

        title: 'Sparkling Mango Cooler',

        category: 'beverages',

        cuisine: 'Continental',

        price: 159.00,

        image: 'images/cold_drinks.png',

        desc: 'Refreshingly fizzy mango drink with mint and lime.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 160,

        title: 'Ginger Lemon Honey',

        category: 'beverages',

        cuisine: 'Continental',

        price: 139.00,

        image: 'images/cold_drinks.png',

        desc: 'Soothing ginger tea with lemon and honey, served warm.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 161,

        title: 'Cold Brew Coffee',

        category: 'beverages',

        cuisine: 'Continental',

        price: 169.00,

        image: 'images/coffee_tea.png',

        desc: 'Smooth cold brew coffee served over ice with a hint of caramel.',

        isVeg: true,

        rating: 4.8,

        tags: ['special']

    },

    {

        id: 162,

        title: 'Hibiscus Iced Tea',

        category: 'beverages',

        cuisine: 'Continental',

        price: 149.00,

        image: 'images/hibiscus_iced_tea.jpg?v=2',

        desc: 'Chilled hibiscus tea with citrus and a touch of sweetness.',

        isVeg: true,

        rating: 4.6,

        tags: []

    },

    {

        id: 163,

        title: 'Orange Mojito',

        category: 'beverages',

        cuisine: 'Continental',

        price: 159.00,

        image: 'images/orange_mojito.jpg?v=2',

        desc: 'Zesty orange drink with mint, soda, and a splash of lime.',

        isVeg: true,

        rating: 4.7,

        tags: []

    },

    {

        id: 164,

        title: 'Vanilla Cold Brew',

        category: 'beverages',

        cuisine: 'Continental',

        price: 169.00,

        image: 'images/coffee_tea.png',

        desc: 'Cold brew coffee blended with vanilla syrup and almond milk.',

        isVeg: true,

        rating: 4.8,

        tags: ['recommended']

    },

    {

        id: 165,

        title: 'Coconut Water Cooler',

        category: 'beverages',

        cuisine: 'Continental',

        price: 149.00,

        image: 'images/cold_drinks.png',

        desc: 'Fresh coconut water mixed with mint and lime for a tropical refreshment.',

        isVeg: true,

        rating: 4.6,

        tags: []

    }

];



// Cart State

let cart = [];

const TAX_RATE = 0.05;



// DOM Elements

const menuSections = document.getElementById('menu-sections');

const categoryTabs = document.querySelectorAll('.category-tab');

const cuisineTabs = document.querySelectorAll('.cuisine-tab');

const searchInput = document.getElementById('search-input');

const searchClear = document.getElementById('search-clear');

const searchSuggestions = document.getElementById('search-suggestions');

const activeFilters = document.getElementById('active-filters');

const filterText = document.getElementById('filter-text');

const clearFiltersBtn = document.getElementById('clear-filters');

const noResults = document.getElementById('no-results');

const btnReset = document.getElementById('btn-reset');



let selectedCuisine = 'all';



const cartToggle = document.getElementById('cart-toggle');

const cartSidebar = document.getElementById('cart-sidebar');

const cartOverlay = document.getElementById('cart-overlay');

const cartClose = document.getElementById('cart-close');

const cartItems = document.getElementById('cart-items');

const cartEmpty = document.getElementById('cart-empty');

const cartFooter = document.getElementById('cart-footer');

const cartBadge = document.getElementById('cart-badge');

const cartSubtotal = document.getElementById('cart-subtotal');

const cartTax = document.getElementById('cart-tax');

const cartTotal = document.getElementById('cart-total');



const themeToggle = document.getElementById('theme-toggle');

const backToTopBtn = document.getElementById('back-to-top');

const navbar = document.getElementById('navbar');



// Initialize Application

document.addEventListener('DOMContentLoaded', () => {

    updateCategoryCounts();

    renderMenu(menuData);

    setupEventListeners();

    checkSavedTheme();

    animateNumbers();

});



// Setup Event Listeners

function setupEventListeners() {

    // Category Filtering

    categoryTabs.forEach(tab => {

        tab.addEventListener('click', () => {

            const category = tab.dataset.category;

            

            // Update active tab

            categoryTabs.forEach(t => t.classList.remove('active'));

            tab.classList.add('active');

            

            // Filter data

            filterMenu(category, searchInput.value);

        });

    });



    // Cuisine Filtering

    cuisineTabs.forEach(tab => {

        tab.addEventListener('click', () => {

            selectedCuisine = tab.dataset.cuisine;

            cuisineTabs.forEach(t => t.classList.remove('active'));

            tab.classList.add('active');



            const activeCategory = document.querySelector('.category-tab.active').dataset.category;

            filterMenu(activeCategory, searchInput.value);

        });

    });



    // Search Functionality

    searchInput.addEventListener('input', (e) => {

        const activeCategory = document.querySelector('.category-tab.active').dataset.category;

        const query = e.target.value;

        updateSearchSuggestions(query);

        filterMenu(activeCategory, query);

    });



    searchInput.addEventListener('keydown', (e) => {

        if (e.key === 'Escape') {

            hideSearchSuggestions();

        }

    });



    searchSuggestions.addEventListener('click', (e) => {

        const button = e.target.closest('.search-suggestion-item');

        if (!button || button.classList.contains('no-suggestion')) return;



        searchInput.value = button.dataset.title;

        const activeCategory = document.querySelector('.category-tab.active').dataset.category;

        filterMenu(activeCategory, button.dataset.title);

        hideSearchSuggestions();

        searchInput.focus();

    });



    document.addEventListener('click', (e) => {

        if (!document.getElementById('nav-search').contains(e.target)) {

            hideSearchSuggestions();

        }

    });



    searchClear.addEventListener('click', () => {

        searchInput.value = '';

        hideSearchSuggestions();

        const activeCategory = document.querySelector('.category-tab.active').dataset.category;

        filterMenu(activeCategory, '');

        searchInput.focus();

    });



    clearFiltersBtn.addEventListener('click', resetFilters);

    btnReset.addEventListener('click', resetFilters);



    // Category Scroll Buttons

    const track = document.getElementById('categories-track');

    document.getElementById('cat-scroll-left').addEventListener('click', () => {

        track.scrollBy({ left: -200, behavior: 'smooth' });

    });

    document.getElementById('cat-scroll-right').addEventListener('click', () => {

        track.scrollBy({ left: 200, behavior: 'smooth' });

    });



    // Cart Toggle

    cartToggle.addEventListener('click', openCart);

    cartClose.addEventListener('click', closeCart);

    cartOverlay.addEventListener('click', closeCart);



    // Theme Toggle

    themeToggle.addEventListener('click', toggleTheme);



    // Scroll Events

    window.addEventListener('scroll', () => {

        // Navbar style on scroll

        if (window.scrollY > 50) {

            navbar.style.padding = '0.5rem 2rem';

        } else {

            navbar.style.padding = '1rem 2rem';

        }



        // Back to top button

        if (window.scrollY > 500) {

            backToTopBtn.classList.add('visible');

        } else {

            backToTopBtn.classList.remove('visible');

        }

    });



    backToTopBtn.addEventListener('click', () => {

        window.scrollTo({ top: 0, behavior: 'smooth' });

    });

}



// Update Category Counts

function updateCategoryCounts() {

    document.getElementById('count-all').textContent = menuData.length;

    

    const categories = ['starters', 'mains', 'nonveg', 'breads', 'pizza', 'burgers', 'desserts', 'beverages'];

    

    categories.forEach(cat => {

        let count = 0;

        if (cat === 'nonveg') {

            count = menuData.filter(item => item.isVeg === false).length;

        } else {

            count = menuData.filter(item => item.category === cat).length;

        }

        const countEl = document.getElementById(`count-${cat}`);

        if (countEl) {

            countEl.textContent = count;

        }

    });

}



// Filter Menu Data

function filterMenu(category, searchQuery) {

    let filtered = menuData;

    let isFiltered = false;

    let filterMsg = [];



    // Apply category filter

    if (category !== 'all') {

        if (category === 'nonveg') {

            filtered = filtered.filter(item => item.isVeg === false);

        } else {

            filtered = filtered.filter(item => item.category === category);

        }

        isFiltered = true;

        const catName = document.querySelector(`.category-tab[data-category="${category}"] span`).textContent;

        filterMsg.push(`Category: ${catName}`);

    }



    // Apply cuisine filter

    if (selectedCuisine !== 'all') {

        filtered = filtered.filter(item => item.cuisine === selectedCuisine);

        isFiltered = true;

        filterMsg.push(`Cuisine: ${selectedCuisine}`);

    }



    // Apply search filter

    if (searchQuery.trim() !== '') {

        const query = searchQuery.toLowerCase().trim();

        filtered = filtered.filter(item => 

            item.title.toLowerCase().includes(query) || 

            item.desc.toLowerCase().includes(query)

        );

        isFiltered = true;

        filterMsg.push(`Search: "${searchQuery}"`);

    }



    // Update UI based on filters

    if (isFiltered) {

        activeFilters.style.display = 'flex';

        filterText.textContent = filterMsg.join(' | ');

    } else {

        activeFilters.style.display = 'none';

    }



    renderMenu(filtered);

}



// Reset Filters

function resetFilters() {

    searchInput.value = '';

    hideSearchSuggestions();

    categoryTabs.forEach(t => t.classList.remove('active'));

    cuisineTabs.forEach(t => t.classList.remove('active'));

    document.getElementById('cat-all').classList.add('active');

    document.querySelector('.cuisine-tab[data-cuisine="all"]').classList.add('active');

    selectedCuisine = 'all';

    filterMenu('all', '');

}



function updateSearchSuggestions(query) {

    const text = query.trim().toLowerCase();



    if (!text) {

        hideSearchSuggestions();

        return;

    }



    const matches = menuData

        .filter(item => item.title.toLowerCase().includes(text))

        .slice(0, 6);



    if (matches.length === 0) {

        searchSuggestions.innerHTML = `<button type="button" class="search-suggestion-item no-suggestion">No matching dishes</button>`;

        searchSuggestions.style.display = 'block';

        return;

    }



    searchSuggestions.innerHTML = matches.map(item => `

        <button type="button" class="search-suggestion-item" data-title="${item.title}">

            ${item.title}

        </button>

    `).join('');

    searchSuggestions.style.display = 'block';

}



function hideSearchSuggestions() {

    searchSuggestions.innerHTML = '';

    searchSuggestions.style.display = 'none';

}



// Render Menu Sections by Cuisine

function renderMenu(items) {

    menuSections.innerHTML = '';

    

    if (items.length === 0) {

        noResults.style.display = 'block';

        return;

    }

    

    noResults.style.display = 'none';



    const cuisines = ['Indian', 'Chinese', 'Italian', 'Continental', 'Tandoor'



];;;

    const grouped = cuisines.map(cuisine => ({

        cuisine,

        items: items.filter(item => item.cuisine === cuisine)

    })).filter(group => group.items.length > 0);



    grouped.forEach(group => {

        const section = document.createElement('section');

        section.className = 'cuisine-section';

        section.innerHTML = `

            <div class="cuisine-header">

                <div>

                    <h3 class="cuisine-title">${group.cuisine}</h3>

                    <p class="cuisine-subtitle">${group.items.length} freshly curated dishes</p>

                </div>

                <span class="cuisine-pill">${group.items.length} items</span>

            </div>

            <div class="cuisine-items"></div>

        `;



        const list = section.querySelector('.cuisine-items');



        group.items.forEach(item => {

            let tagsHtml = '';

            if (item.tags.includes('bestseller')) {

                tagsHtml += `<span class="tag tag-bestseller">Best Seller</span>`;

            }

            if (item.tags.includes('special')) {

                tagsHtml += `<span class="tag tag-special">Chef's Special</span>`;

            }

            if (item.tags.includes('recommended')) {

                tagsHtml += `<span class="tag tag-recommended">Recommended</span>`;

            }



            const vegIcon = item.isVeg ?

                `<div class="veg-indicator is-veg" title="Vegetarian"><i class="fas fa-circle"></i></div>` :

                `<div class="veg-indicator is-nonveg" title="Non-Vegetarian"><i class="fas fa-caret-up"></i></div>`;



            const card = document.createElement('div');

            card.className = 'food-card';

            card.innerHTML = `

                <div class="food-img-container">

                    <img src="${item.image}" alt="${item.title}" class="food-img" loading="lazy">

                    <div class="food-tags">

                        ${tagsHtml}

                    </div>

                    ${vegIcon}

                </div>

                <div class="food-content">

                    <div class="food-header">

                        <h3 class="food-title">${item.title}</h3>

                        <div class="food-rating">

                            <i class="fas fa-star"></i>

                            <span>${item.rating}</span>

                        </div>

                    </div>

                    <p class="food-desc">${item.desc}</p>

                    <div class="food-footer">

                        <div class="food-price">₹${item.price.toFixed(2)}</div>

                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">

                            <i class="fas fa-plus"></i> Add

                        </button>

                    </div>

                </div>

            `;

            list.appendChild(card);

        });



        menuSections.appendChild(section);

    });

}





// Cart Functionality

function openCart() {

    cartSidebar.classList.add('active');

    cartOverlay.classList.add('active');

    document.body.style.overflow = 'hidden'; // Prevent background scrolling

}



function closeCart() {

    cartSidebar.classList.remove('active');

    cartOverlay.classList.remove('active');

    document.body.style.overflow = '';

}



function addToCart(itemId) {

    const item = menuData.find(i => i.id === itemId);

    if (!item) return;



    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            ...item,

            quantity: 1

        });

    }



    updateCartUI();

    showToast(`Added ${item.title} to cart`, 'success');

    

    // Animate cart icon

    cartToggle.style.transform = 'scale(1.2)';

    setTimeout(() => {

        cartToggle.style.transform = 'scale(1)';

    }, 200);

}



function removeFromCart(itemId) {

    cart = cart.filter(item => item.id !== itemId);

    updateCartUI();

}



function updateQuantity(itemId, change) {

    const item = cart.find(i => i.id === itemId);

    if (!item) return;



    item.quantity += change;

    

    if (item.quantity <= 0) {

        removeFromCart(itemId);

    } else {

        updateCartUI();

    }

}



function updateCartUI() {

    // Update badge count

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartBadge.textContent = totalItems;

    

    if (cartBadge.textContent === '0') {

        cartBadge.style.display = 'none';

    } else {

        cartBadge.style.display = 'flex';

    }



    // Render cart items

    if (cart.length === 0) {

        cartEmpty.style.display = 'flex';

        cartItems.innerHTML = '';

        cartFooter.style.display = 'none';

        return;

    }



    cartEmpty.style.display = 'none';

    cartFooter.style.display = 'block';

    cartItems.innerHTML = '';



    let subtotal = 0;



    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        subtotal += itemTotal;



        const cartItemEl = document.createElement('div');

        cartItemEl.className = 'cart-item';

        cartItemEl.innerHTML = `

            <img src="${item.image}" alt="${item.title}" class="cart-item-img">

            <div class="cart-item-details">

                <h4 class="cart-item-title">${item.title}</h4>

                <div class="cart-item-price">₹${item.price.toFixed(2)}</div>

                <div class="cart-item-actions">

                    <div class="qty-controls">

                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">

                            <i class="fas fa-minus"></i>

                        </button>

                        <span class="qty-value">${item.quantity}</span>

                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">

                            <i class="fas fa-plus"></i>

                        </button>

                    </div>

                    <button class="remove-item" onclick="removeFromCart(${item.id})">

                        <i class="fas fa-trash-alt"></i>

                    </button>

                </div>

            </div>

        `;

        cartItems.appendChild(cartItemEl);

    });



    // Update totals

    const tax = subtotal * TAX_RATE;

    const total = subtotal + tax;



    cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;

    cartTax.textContent = `₹${tax.toFixed(2)}`;

    cartTotal.textContent = `₹${total.toFixed(2)}`;

}



// Toast Notifications

function showToast(message, type = 'info') {

    const toastContainer = document.getElementById('toast-container');

    

    const toast = document.createElement('div');

    toast.className = `toast ${type}`;

    

    const icon = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';

    

    toast.innerHTML = `

        <i class="fas ${icon}"></i>

        <span>${message}</span>

    `;

    

    toastContainer.appendChild(toast);

    

    // Remove toast after 3 seconds

    setTimeout(() => {

        toast.classList.add('fade-out');

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}



// Theme Handling

function toggleTheme() {

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    

    if (isDark) {

        document.documentElement.removeAttribute('data-theme');

        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

        localStorage.setItem('theme', 'light');

    } else {

        document.documentElement.setAttribute('data-theme', 'dark');

        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

        localStorage.setItem('theme', 'dark');

    }

}



function checkSavedTheme() {

    const savedTheme = localStorage.getItem('theme');

    

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

        document.documentElement.setAttribute('data-theme', 'dark');

        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

    }

}



// Animate Statistics Numbers

function animateNumbers() {

    const stats = document.querySelectorAll('.stat-number');

    

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const target = entry.target;

                const count = parseInt(target.dataset.count);

                let current = 0;

                const increment = count / 50; // Adjust for speed

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= count) {

                        target.textContent = count;

                        clearInterval(timer);

                    } else {

                        target.textContent = Math.ceil(current);

                    }

                }, 40);

                observer.unobserve(target);

            }

        });

    }, { threshold: 0.5 });



    stats.forEach(stat => observer.observe(stat));

}
