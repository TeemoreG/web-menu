// =============== CONFIGURATION SECTION ===============
// RESTAURANT CONFIGURATION - CHANGE THESE FOR EACH CLIENT
const RESTAURANT_CONFIG = {
    name: "Golden Star Restaurant",
    whatsappNumber: "254702099927", // Client's WhatsApp number
    // Base URL for images - you can change this for different restaurants
    imageBaseUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images/",
    fallbackImage: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=900&fit=crop&crop=center"
};

// =============== IMAGE MAPPING SYSTEM ===============
const IMAGE_MAP = {
    // Breakfast items
    "breakfast_farmers_omelette": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=900&fit=crop",
    "breakfast_samosa_6_pcs": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&h=900&fit=crop",
    "breakfast_mandazi_3_pcs": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&h=900&fit=crop",
    "breakfast_pancakes_3_pcs": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=900&fit=crop",
    "breakfast_french_toast": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1200&h=900&fit=crop",
    "breakfast_spanish_omelette": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1200&h=900&fit=crop",
    "breakfast_boiled_eggs_2": "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&h=900&fit=crop",
    "breakfast_scrambled_eggs": "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&h=900&fit=crop",
    "breakfast_eggs_sausage": "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&h=900&fit=crop",
    "breakfast_sausage_2_pcs": "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=1200&h=900&fit=crop",
    "breakfast_smokies_2_pcs": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=900&fit=crop",
    "breakfast_chapati_2_pcs": "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?w=1200&h=900&fit=crop",
    "breakfast_chapati_tea": "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=1200&h=900&fit=crop",
    "breakfast_bhajia_plate": "https://images.unsplash.com/photo-1629115916083-7a5c19d3d1c5?w=1200&h=900&fit=crop",
    "breakfast_toast_jam": "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=1200&h=900&fit=crop",
    "breakfast_fruit_salad_cup": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=1200&h=900&fit=crop",
    "breakfast_oat_porridge": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=900&fit=crop",
    "breakfast_uji_power_porridge": "https://images.unsplash.com/photo-1515446134809-993c501ca304?w=1200&h=900&fit=crop",
    "breakfast_full_breakfast_plate": "https://images.unsplash.com/photo-1559215440-3e3c5c75c6a8?w=1200&h=900&fit=crop",
    "breakfast_beans_chapati": "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?w=1200&h=900&fit=crop",
    
    // Lunch items
    "lunch_chicken_biryani": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&h=900&fit=crop",
    "lunch_chapati_beans": "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?w=1200&h=900&fit=crop",
    "lunch_beef_pilau": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&h=900&fit=crop",
    "lunch_chicken_pilau": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&h=900&fit=crop",
    "lunch_beef_stew_ugali": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=900&fit=crop",
    "lunch_chicken_stew_rice": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=900&fit=crop",
    "lunch_fish_fillet_chips": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1200&h=900&fit=crop",
    "lunch_chicken_curry_rice": "https://images.unsplash.com/photo-1585937421612-70ca003675ed?w=1200&h=900&fit=crop",
    "lunch_beef_curry_rice": "https://images.unsplash.com/photo-1585937421612-70ca003675ed?w=1200&h=900&fit=crop",
    "lunch_vegetable_rice": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&h=900&fit=crop",
    "lunch_rice_beans": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&h=900&fit=crop",
    "lunch_spaghetti_bolognese": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=1200&h=900&fit=crop",
    "lunch_spaghetti_veggie": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=1200&h=900&fit=crop",
    "lunch_fried_rice_chicken": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=1200&h=900&fit=crop",
    "lunch_fried_rice_veg": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=1200&h=900&fit=crop",
    "lunch_chicken_wings_chips": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=1200&h=900&fit=crop",
    "lunch_beef_burger_chips": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=900&fit=crop",
    "lunch_chicken_burger_chips": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=900&fit=crop",
    "lunch_kachumbari_salad_bowl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=900&fit=crop",
    "lunch_ndengu_chapati": "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?w=1200&h=900&fit=crop",
    
    // Specials
    "specials_kuku_choma": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&h=900&fit=crop",
    "specials_nyama_choma_beef": "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&h=900&fit=crop",
    "specials_grilled_tilapia": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1200&h=900&fit=crop",
    "specials_beef_ribs_bbq": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=900&fit=crop",
    "specials_chicken_tikka_platter": "https://images.unsplash.com/photo-1585937421612-70ca003675ed?w=1200&h=900&fit=crop",
    "specials_mixed_grill_platter": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=900&fit=crop",
    "specials_beef_stir_fry": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&h=900&fit=crop",
    "specials_chicken_stir_fry": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&h=900&fit=crop",
    "specials_lamb_chops": "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&h=900&fit=crop",
    "specials_goat_wet_fry": "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&h=900&fit=crop",
    "specials_butter_chicken": "https://images.unsplash.com/photo-1585937421612-70ca003675ed?w=1200&h=900&fit=crop",
    "specials_chicken_teriyaki_bowl": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=900&fit=crop",
    "specials_beef_teriyaki_bowl": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=900&fit=crop",
    "specials_seafood_platter": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1200&h=900&fit=crop",
    "specials_chefs_special_biryani": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&h=900&fit=crop",
    "specials_golden_star_signature_burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=900&fit=crop",
    "specials_peri_peri_chicken": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&h=900&fit=crop",
    "specials_honey_glazed_wings": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=1200&h=900&fit=crop",
    "specials_bbq_beef_steak": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=900&fit=crop",
    "specials_stuffed_chicken_breast": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&h=900&fit=crop",
    
    // Drinks
    "drinks_fresh_juice": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1200&h=900&fit=crop",
    "drinks_soda_300ml": "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=1200&h=900&fit=crop",
    "drinks_bottled_water": "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1200&h=900&fit=crop",
    "drinks_tea_milk": "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=1200&h=900&fit=crop",
    "drinks_black_coffee": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=900&fit=crop",
    "drinks_passion_lemonade": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=1200&h=900&fit=crop"
};

// =============== MENU ITEMS ===============
const items = [
    {
        id: "breakfast_farmers_omelette",
        cat: "Breakfast",
        name: "Farmer's Omelette",
        price: 450,
        bullets: ["Eggs", "Fresh ingredients", "Served hot", "Best with tea"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_samosa_6_pcs",
        cat: "Breakfast",
        name: "Samosa (6 pcs)",
        price: 300,
        bullets: ["Crispy pastry", "Spiced filling", "Served with sauce"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_mandazi_3_pcs",
        cat: "Breakfast",
        name: "Mandazi (3 pcs)",
        price: 150,
        bullets: ["Soft mandazi", "Freshly fried", "Great with tea"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_pancakes_3_pcs",
        cat: "Breakfast",
        name: "Pancakes (3 pcs)",
        price: 400,
        bullets: ["Soft & fresh", "Served with syrup/jam", "Perfect morning bite"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_french_toast",
        cat: "Breakfast",
        name: "French Toast",
        price: 400,
        bullets: ["Soft & fresh", "Served with syrup/jam", "Perfect morning bite"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_spanish_omelette",
        cat: "Breakfast",
        name: "Spanish Omelette",
        price: 500,
        bullets: ["Eggs", "Fresh ingredients", "Served hot", "Best with tea"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_boiled_eggs_2",
        cat: "Breakfast",
        name: "Boiled Eggs (2)",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_scrambled_eggs",
        cat: "Breakfast",
        name: "Scrambled Eggs",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_eggs_sausage",
        cat: "Breakfast",
        name: "Eggs & Sausage",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_sausage_2_pcs",
        cat: "Breakfast",
        name: "Sausage (2 pcs)",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_smokies_2_pcs",
        cat: "Breakfast",
        name: "Smokies (2 pcs)",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_chapati_2_pcs",
        cat: "Breakfast",
        name: "Chapati (2 pcs)",
        price: 200,
        bullets: ["Soft chapati", "Freshly made", "Filling & tasty"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_chapati_tea",
        cat: "Breakfast",
        name: "Chapati + Tea",
        price: 350,
        bullets: ["Soft chapati", "Milk tea", "Classic combo"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_bhajia_plate",
        cat: "Breakfast",
        name: "Bhajia (Plate)",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_toast_jam",
        cat: "Breakfast",
        name: "Toast + Jam",
        price: 400,
        bullets: ["Soft & fresh", "Served with syrup/jam", "Perfect morning bite"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_fruit_salad_cup",
        cat: "Breakfast",
        name: "Fruit Salad Cup",
        price: 250,
        bullets: ["Seasonal fruits", "Fresh cut", "Light & healthy"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_oat_porridge",
        cat: "Breakfast",
        name: "Oat Porridge",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_uji_power_porridge",
        cat: "Breakfast",
        name: "Uji Power Porridge",
        price: 250,
        bullets: ["Freshly prepared", "Served hot", "Good portion"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_full_breakfast_plate",
        cat: "Breakfast",
        name: "Full Breakfast Plate",
        price: 500,
        bullets: ["Eggs", "Fresh ingredients", "Served hot", "Best with tea"],
        tag: "Breakfast"
    },
    {
        id: "breakfast_beans_chapati",
        cat: "Breakfast",
        name: "Beans + Chapati",
        price: 350,
        bullets: ["Soft chapati", "Freshly made", "Filling & tasty"],
        tag: "Breakfast"
    },
    {
        id: "lunch_chicken_biryani",
        cat: "Lunch",
        name: "Chicken Biryani",
        price: 650,
        bullets: ["Basmati rice", "Spiced meat", "Herbs", "Raita optional"],
        tag: "Lunch"
    },
    {
        id: "lunch_chapati_beans",
        cat: "Lunch",
        name: "Chapati + Beans",
        price: 450,
        bullets: ["Freshly prepared", "Good portion", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "lunch_beef_pilau",
        cat: "Lunch",
        name: "Beef Pilau",
        price: 600,
        bullets: ["Spiced rice", "Tender meat/chicken", "Kachumbari"],
        tag: "Lunch"
    },
    {
        id: "lunch_chicken_pilau",
        cat: "Lunch",
        name: "Chicken Pilau",
        price: 600,
        bullets: ["Spiced rice", "Tender meat/chicken", "Kachumbari"],
        tag: "Lunch"
    },
    {
        id: "lunch_beef_stew_ugali",
        cat: "Lunch",
        name: "Beef Stew + Ugali",
        price: 550,
        bullets: ["Slow-cooked stew", "Served with ugali/rice", "Hearty & filling"],
        tag: "Lunch"
    },
    {
        id: "lunch_chicken_stew_rice",
        cat: "Lunch",
        name: "Chicken Stew + Rice",
        price: 550,
        bullets: ["Slow-cooked stew", "Served with ugali/rice", "Hearty & filling"],
        tag: "Lunch"
    },
    {
        id: "lunch_fish_fillet_chips",
        cat: "Lunch",
        name: "Fish Fillet + Chips",
        price: 750,
        bullets: ["Crispy fish", "Served with chips", "Lemon & sauce"],
        tag: "Lunch"
    },
    {
        id: "lunch_chicken_curry_rice",
        cat: "Lunch",
        name: "Chicken Curry + Rice",
        price: 650,
        bullets: ["Rich curry sauce", "Served with rice", "Comfort meal"],
        tag: "Lunch"
    },
    {
        id: "lunch_beef_curry_rice",
        cat: "Lunch",
        name: "Beef Curry + Rice",
        price: 650,
        bullets: ["Rich curry sauce", "Served with rice", "Comfort meal"],
        tag: "Lunch"
    },
    {
        id: "lunch_vegetable_rice",
        cat: "Lunch",
        name: "Vegetable Rice",
        price: 450,
        bullets: ["Freshly prepared", "Good portion", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "lunch_rice_beans",
        cat: "Lunch",
        name: "Rice + Beans",
        price: 450,
        bullets: ["Freshly prepared", "Good portion", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "lunch_spaghetti_bolognese",
        cat: "Lunch",
        name: "Spaghetti Bolognese",
        price: 500,
        bullets: ["Al dente pasta", "Rich sauce", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "lunch_spaghetti_veggie",
        cat: "Lunch",
        name: "Spaghetti Veggie",
        price: 500,
        bullets: ["Al dente pasta", "Rich sauce", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "lunch_fried_rice_chicken",
        cat: "Lunch",
        name: "Fried Rice (Chicken)",
        price: 600,
        bullets: ["Wok-fried rice", "Fresh veggies", "House sauce"],
        tag: "Lunch"
    },
    {
        id: "lunch_fried_rice_veg",
        cat: "Lunch",
        name: "Fried Rice (Veg)",
        price: 600,
        bullets: ["Wok-fried rice", "Fresh veggies", "House sauce"],
        tag: "Lunch"
    },
    {
        id: "lunch_chicken_wings_chips",
        cat: "Lunch",
        name: "Chicken Wings + Chips",
        price: 450,
        bullets: ["Freshly prepared", "Good portion", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "lunch_beef_burger_chips",
        cat: "Lunch",
        name: "Beef Burger + Chips",
        price: 700,
        bullets: ["Toasted bun", "Juicy patty", "Served with chips"],
        tag: "Lunch"
    },
    {
        id: "lunch_chicken_burger_chips",
        cat: "Lunch",
        name: "Chicken Burger + Chips",
        price: 700,
        bullets: ["Toasted bun", "Juicy patty", "Served with chips"],
        tag: "Lunch"
    },
    {
        id: "lunch_kachumbari_salad_bowl",
        cat: "Lunch",
        name: "Kachumbari Salad Bowl",
        price: 450,
        bullets: ["Freshly prepared", "Good portion", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "lunch_ndengu_chapati",
        cat: "Lunch",
        name: "Ndengu + Chapati",
        price: 450,
        bullets: ["Freshly prepared", "Good portion", "Served hot"],
        tag: "Lunch"
    },
    {
        id: "specials_kuku_choma",
        cat: "Specials",
        name: "Kuku Choma",
        price: 800,
        bullets: ["Grilled chicken", "House marinade", "Served with sides"],
        tag: "Special"
    },
    {
        id: "specials_nyama_choma_beef",
        cat: "Specials",
        name: "Nyama Choma (Beef)",
        price: 900,
        bullets: ["Freshly grilled", "Chef seasoning", "Served with sides"],
        tag: "Special"
    },
    {
        id: "specials_grilled_tilapia",
        cat: "Specials",
        name: "Grilled Tilapia",
        price: 950,
        bullets: ["Fresh catch", "Grilled/served hot", "Sauce & sides"],
        tag: "Special"
    },
    {
        id: "specials_beef_ribs_bbq",
        cat: "Specials",
        name: "Beef Ribs (BBQ)",
        price: 1100,
        bullets: ["Tender cut", "BBQ glaze", "Served with sides"],
        tag: "Special"
    },
    {
        id: "specials_chicken_tikka_platter",
        cat: "Specials",
        name: "Chicken Tikka Platter",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_mixed_grill_platter",
        cat: "Specials",
        name: "Mixed Grill Platter",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_beef_stir_fry",
        cat: "Specials",
        name: "Beef Stir Fry",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_chicken_stir_fry",
        cat: "Specials",
        name: "Chicken Stir Fry",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_lamb_chops",
        cat: "Specials",
        name: "Lamb Chops",
        price: 900,
        bullets: ["Freshly grilled", "Chef seasoning", "Served with sides"],
        tag: "Special"
    },
    {
        id: "specials_goat_wet_fry",
        cat: "Specials",
        name: "Goat Wet Fry",
        price: 900,
        bullets: ["Freshly grilled", "Chef seasoning", "Served with sides"],
        tag: "Special"
    },
    {
        id: "specials_butter_chicken",
        cat: "Specials",
        name: "Butter Chicken",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_chicken_teriyaki_bowl",
        cat: "Specials",
        name: "Chicken Teriyaki Bowl",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_beef_teriyaki_bowl",
        cat: "Specials",
        name: "Beef Teriyaki Bowl",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_seafood_platter",
        cat: "Specials",
        name: "Seafood Platter",
        price: 950,
        bullets: ["Fresh catch", "Grilled/served hot", "Sauce & sides"],
        tag: "Special"
    },
    {
        id: "specials_chefs_special_biryani",
        cat: "Specials",
        name: "Chef's Special Biryani",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_golden_star_signature_burger",
        cat: "Specials",
        name: "Golden Star Signature Burger",
        price: 950,
        bullets: ["Signature build", "Premium toppings", "Served with chips"],
        tag: "Special"
    },
    {
        id: "specials_peri_peri_chicken",
        cat: "Specials",
        name: "Peri Peri Chicken",
        price: 800,
        bullets: ["Grilled chicken", "House marinade", "Served with sides"],
        tag: "Special"
    },
    {
        id: "specials_honey_glazed_wings",
        cat: "Specials",
        name: "Honey Glazed Wings",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "specials_bbq_beef_steak",
        cat: "Specials",
        name: "BBQ Beef Steak",
        price: 1100,
        bullets: ["Tender cut", "BBQ glaze", "Served with sides"],
        tag: "Special"
    },
    {
        id: "specials_stuffed_chicken_breast",
        cat: "Specials",
        name: "Stuffed Chicken Breast",
        price: 850,
        bullets: ["Chef special", "Full flavor", "Served hot"],
        tag: "Special"
    },
    {
        id: "drinks_fresh_juice",
        cat: "Drinks",
        name: "Fresh Juice",
        price: 250,
        bullets: ["Freshly made", "Served chilled"],
        tag: "Drinks"
    },
    {
        id: "drinks_soda_300ml",
        cat: "Drinks",
        name: "Soda (300ml)",
        price: 150,
        bullets: ["Cold soda", "Choose flavour"],
        tag: "Drinks"
    },
    {
        id: "drinks_bottled_water",
        cat: "Drinks",
        name: "Bottled Water",
        price: 100,
        bullets: ["Chilled bottle", "Refreshing"],
        tag: "Drinks"
    },
    {
        id: "drinks_tea_milk",
        cat: "Drinks",
        name: "Tea (Milk)",
        price: 150,
        bullets: ["Milk tea", "Served hot"],
        tag: "Drinks"
    },
    {
        id: "drinks_black_coffee",
        cat: "Drinks",
        name: "Black Coffee",
        price: 200,
        bullets: ["Fresh brew", "Served hot"],
        tag: "Drinks"
    },
    {
        id: "drinks_passion_lemonade",
        cat: "Drinks",
        name: "Passion Lemonade",
        price: 250,
        bullets: ["Freshly made", "Served chilled"],
        tag: "Drinks"
    }
];

// =============== APPLICATION STATE ===============
const cart = new Map();
let activeCat = "All";

// =============== DOM ELEMENTS ===============
let grid, q, pills, countEl, summaryEl, modal, cartLines, totalEl;

// =============== UTILITY FUNCTIONS ===============
function money(n) { 
    return "KES " + Number(n).toLocaleString(); 
}

function getImageUrl(itemId) {
    if (IMAGE_MAP[itemId]) {
        return IMAGE_MAP[itemId];
    }
    
    const item = items.find(it => it.id === itemId);
    if (item) {
        return `https://source.unsplash.com/1200x900/?${encodeURIComponent(item.name)},food`;
    }
    
    return RESTAURANT_CONFIG.fallbackImage;
}

function filtered() {
    const term = (q.value || "").trim().toLowerCase();
    return items.filter(it => {
        const okCat = activeCat === "All" || it.cat === activeCat;
        const okTerm = !term || 
            it.name.toLowerCase().includes(term) || 
            it.bullets.join(" ").toLowerCase().includes(term);
        return okCat && okTerm;
    });
}

// =============== RENDER FUNCTIONS ===============
function render() {
    if (!grid) return;
    
    grid.innerHTML = "";
    filtered().forEach(it => {
        const div = document.createElement("div");
        div.className = "card";
        
        const imageUrl = getImageUrl(it.id);
        const qty = cart.get(it.id) || 0;

        div.innerHTML = `
            <img class="bg" src="${imageUrl}" alt="${it.name}" loading="lazy"
                 onerror="this.onerror=null; this.src='${RESTAURANT_CONFIG.fallbackImage}';" />
            <div class="shade"></div>
            <div class="overlay">
                <div class="topline">
                    <div>
                        <div class="name">${it.name}</div>
                        <div class="meta">
                            <span class="tag">${it.tag}</span>
                            <span class="tag">${money(it.price)}</span>
                        </div>
                    </div>
                </div>

                <div class="bottom">
                    <ul class="bullets">
                        ${it.bullets.map(b => `<li>${b}</li>`).join("")}
                    </ul>
                    <div class="row" style="justify-content: space-between;">
                        <div>
                            <div class="price">${money(it.price)}</div>
                            <div class="small">${qty > 0 ? `In order: ${qty}` : "Tap Order to add"}</div>
                        </div>
                        <button class="btn" data-add="${it.id}">🛒 Order</button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(div);
    });

    grid.querySelectorAll("[data-add]").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-add");
            cart.set(id, (cart.get(id) || 0) + 1);
            updateCartUI();
            render();
        });
    });
}

function updateCartUI() {
    const entries = Array.from(cart.entries()).filter(([, qty]) => qty > 0);
    const totalQty = entries.reduce((s, [, q]) => s + q, 0);
    const total = entries.reduce((s, [id, qty]) => {
        const it = items.find(x => x.id === id);
        return s + (it ? it.price * qty : 0);
    }, 0);

    countEl.textContent = totalQty;
    summaryEl.textContent = totalQty ? `${totalQty} item(s) • ${money(total)}` : "No items yet";
    totalEl.textContent = `Total: ${money(total)}`;

    cartLines.innerHTML = "";
    if (!entries.length) {
        cartLines.innerHTML = `<div style="color:rgba(255,255,255,.75)">Your cart is empty. Add items from the menu.</div>`;
        return;
    }

    entries.forEach(([id, qty]) => {
        const it = items.find(x => x.id === id);
        const line = document.createElement("div");
        line.className = "line";
        line.innerHTML = `
            <div class="info">
                <b>${it.name}</b>
                <small>${money(it.price)} each</small>
            </div>
            <div class="qty">
                <button class="iconBtn" data-dec="${id}">−</button>
                <b>${qty}</b>
                <button class="iconBtn" data-inc="${id}">+</button>
            </div>
        `;
        cartLines.appendChild(line);
    });

    cartLines.querySelectorAll("[data-inc]").forEach(b => {
        b.addEventListener("click", () => {
            const id = b.getAttribute("data-inc");
            cart.set(id, (cart.get(id) || 0) + 1);
            updateCartUI();
            render();
        });
    });
    
    cartLines.querySelectorAll("[data-dec]").forEach(b => {
        b.addEventListener("click", () => {
            const id = b.getAttribute("data-dec");
            const n = (cart.get(id) || 0) - 1;
            if (n <= 0) cart.delete(id); 
            else cart.set(id, n);
            updateCartUI();
            render();
        });
    });
}

// =============== WHATSAPP FUNCTION ===============
function buildWhatsAppText() {
    const entries = Array.from(cart.entries()).filter(([, qty]) => qty > 0);
    if (!entries.length) return "";

    let total = 0;
    const lines = entries.map(([id, qty]) => {
        const it = items.find(x => x.id === id);
        const lineTotal = it.price * qty;
        total += lineTotal;
        return `• ${it.name} x${qty} = ${money(lineTotal)}`;
    });

    return [
        `Hi ${RESTAURANT_CONFIG.name}, I'd like to place an order:`,
        "",
        ...lines,
        "",
        `TOTAL: ${money(total)}`,
        "",
        "Name: ______",
        "Location/Table: ______",
        "Preferred time: ______",
        "",
        "Kindly confirm and share M-PESA payment details."
    ].join("\n");
}

function waCheckout() {
    const msg = buildWhatsAppText();
    if (!msg) {
        alert("Please add at least one item to your order.");
        return;
    }
    const url = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}

// =============== EVENT LISTENERS ===============
function setupEventListeners() {
    pills.forEach(p => {
        p.addEventListener("click", () => {
            pills.forEach(x => x.classList.remove("active"));
            p.classList.add("active");
            activeCat = p.getAttribute("data-cat");
            render();
        });
    });

    q.addEventListener("input", render);

    document.getElementById("openCart").addEventListener("click", () => {
        modal.classList.add("open");
        updateCartUI();
    });
    
    document.getElementById("closeCart").addEventListener("click", () => {
        modal.classList.remove("open");
    });
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
    });

    document.getElementById("waCheckout").addEventListener("click", waCheckout);
    document.getElementById("waCheckout2").addEventListener("click", waCheckout);
}

// =============== INITIALIZATION ===============
function init() {
    // Initialize DOM elements
    grid = document.getElementById("grid");
    q = document.getElementById("q");
    pills = Array.from(document.querySelectorAll(".pill"));
    countEl = document.getElementById("count");
    summaryEl = document.getElementById("summary");
    modal = document.getElementById("modal");
    cartLines = document.getElementById("cartLines");
    totalEl = document.getElementById("total");

    // Set up event listeners
    setupEventListeners();

    // Initial render
    render();
    updateCartUI();
}

// =============== START APPLICATION ===============
// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}