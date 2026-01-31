// =============== CONFIGURATION SECTION ===============
// RESTAURANT CONFIGURATION
const RESTAURANT_CONFIG = {
    name: "Golden Star Restaurant",
    whatsappNumber: "254740940395",
    imageBaseUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images/",
    fallbackImage: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=900&fit=crop&crop=center"
};

// =============== IMAGE MAPPING SYSTEM ===============
const IMAGE_MAP = {
    // Breakfast items
    "breakfast_farmers_omelette": "https://i.ibb.co/0pTPZ3Nm/4190bf33-4a7c-4d56-901d-3bca9c688965.jpg",
    "breakfast_samosa_6_pcs": "https://i.ibb.co/YFWNMS6C/7-1024x1024.webp",
    "breakfast_mandazi_3_pcs": "https://i.ibb.co/xK5vG5yQ/soft-mandazi-recipe.jpg",
    "breakfast_pancakes_3_pcs": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=900&fit=crop",
    "breakfast_french_toast": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1200&h=900&fit=crop",
    "breakfast_spanish_omelette": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1200&h=900&fit=crop",
    "breakfast_boiled_eggs_2": "https://i.ibb.co/kgWXnSQF/air-fryer-hard-boiled-eggs-4.jpg",
    "breakfast_scrambled_eggs": "https://i.ibb.co/9HDtFDtd/JF-241160-Creamy-Cottage-Cheese-Scrambled-4x3-12902-619d00dc88594ea9b8ed884a108db16d.jpg",
    "breakfast_eggs_sausage": "https://i.ibb.co/Z1cWYPrG/breakfast-eggs-sausage-hash-bacon.webp",
    "breakfast_sausage_2_pcs": "https://i.ibb.co/LhgXPFwJ/Rodriguez-Traditional-Spanish-Chorizo3-605507ec-6eaa-457f-ad5d-ae387b1d719a.webp",
    "breakfast_smokies_2_pcs": "https://i.ibb.co/Rn3R0gC/Hawaiian-Litl-Smokies-7.jpg",
    "breakfast_chapati_2_pcs": "https://i.ibb.co/dsdvc6zZ/photo.jpg",
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
let cartItems = [];
let activeCat = "All";
let searchTerm = "";

// =============== UTILITY FUNCTIONS ===============
function money(n) { 
    return "KES " + Number(n).toLocaleString("en-KE"); 
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

function getItemQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    return item ? item.quantity : 0;
}

function addToCart(itemId) {
    const item = items.find(it => it.id === itemId);
    if (!item) return;

    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }

    // Update the global cart UI
    if (window.updateCartUI) {
        window.updateCartUI();
    }
    
    renderMenu();
    showToast(`${item.name} added to cart`);
}

function removeFromCart(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
        const item = cartItems[index];
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cartItems.splice(index, 1);
        }
        
        // Update the global cart UI
        if (window.updateCartUI) {
            window.updateCartUI();
        }
        
        renderMenu();
        showToast(`${item.name} quantity updated`);
    }
}

function clearCart() {
    cartItems = [];
    if (window.updateCartUI) {
        window.updateCartUI();
    }
    renderMenu();
    showToast("Cart cleared");
}

function getFilteredItems() {
    return items.filter(it => {
        const okCat = activeCat === "All" || it.cat === activeCat;
        if (!searchTerm.trim()) return okCat;
        
        const term = searchTerm.toLowerCase();
        const nameMatch = it.name.toLowerCase().includes(term);
        const bulletMatch = it.bullets.some(bullet => bullet.toLowerCase().includes(term));
        const tagMatch = it.tag.toLowerCase().includes(term);
        
        return okCat && (nameMatch || bulletMatch || tagMatch);
    });
}

function showToast(message, type = 'success') {
    // Use the toast system from HTML if available
    if (window.showToast) {
        window.showToast(message, type);
        return;
    }
    
    // Fallback toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#dc3545' : type === 'warning' ? '#ffc107' : '#1f6f3a'};
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// =============== RENDER FUNCTIONS ===============
function renderMenu() {
    const grid = document.getElementById("grid");
    if (!grid) return;
    
    const filteredItems = getFilteredItems();
    
    if (filteredItems.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="icon">🔍</div>
                <h3>No items found</h3>
                <p>Try a different search term or category</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredItems.map(item => {
        const qty = getItemQuantity(item.id);
        const imageUrl = getImageUrl(item.id);
        
        return `
            <div class="card">
                <img class="bg" 
                     src="${imageUrl}" 
                     alt="${item.name}" 
                     loading="lazy"
                     onerror="this.onerror=null; this.src='${RESTAURANT_CONFIG.fallbackImage}';">
                <div class="shade"></div>
                <div class="overlay">
                    <div class="topline">
                        <div>
                            <div class="name">${item.name}</div>
                            <div class="meta">
                                <span class="tag">${item.tag}</span>
                                <span class="tag">${money(item.price)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <ul class="bullets">
                            ${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                        </ul>
                        <div class="row">
                            <div>
                                <div class="price">${money(item.price)}</div>
                                <div class="small">${qty > 0 ? `In order: ${qty}` : "Tap Order to add"}</div>
                            </div>
                            <button class="btn" data-add="${item.id}" aria-label="Add ${item.name} to cart">
                                🛒 ${qty > 0 ? 'Add More' : 'Order'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add event listeners to all "Add to cart" buttons
    grid.querySelectorAll('[data-add]').forEach(button => {
        button.addEventListener('click', () => {
            const itemId = button.getAttribute('data-add');
            addToCart(itemId);
        });
    });
}

// =============== EVENT LISTENERS ===============
function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.pill[data-cat]').forEach(pill => {
        pill.addEventListener('click', () => {
            // Update active category
            activeCat = pill.getAttribute('data-cat');
            
            // Update UI
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            // Render menu
            renderMenu();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('q');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            searchTerm = searchInput.value.trim();
            
            // Debounce search to improve performance
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                renderMenu();
            }, 300);
        });
        
        // Clear search button
        const searchClear = document.createElement('button');
        searchClear.innerHTML = '×';
        searchClear.style.cssText = `
            background: transparent;
            border: none;
            color: rgba(255,255,255,0.7);
            cursor: pointer;
            font-size: 18px;
            padding: 0 4px;
            display: ${searchInput.value ? 'block' : 'none'};
        `;
        searchClear.setAttribute('aria-label', 'Clear search');
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchTerm = '';
            searchClear.style.display = 'none';
            renderMenu();
        });
        
        searchInput.parentNode.appendChild(searchClear);
        
        searchInput.addEventListener('input', () => {
            searchClear.style.display = searchInput.value ? 'block' : 'none';
        });
    }
    
    // Initialize with "All" category active
    const allButton = document.querySelector('.pill[data-cat="All"]');
    if (allButton) {
        allButton.click();
    }
}

// =============== INITIALIZATION ===============
function initMenu() {
    // Remove loading state
    const loadingState = document.getElementById('loadingState');
    if (loadingState) {
        loadingState.style.display = 'none';
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial render
    renderMenu();
    
    // Initial cart UI update
    if (window.updateCartUI) {
        window.updateCartUI();
    }
    
    console.log('Menu initialized successfully');
}

// =============== EXPOSE FUNCTIONS TO WINDOW ===============
window.initMenu = initMenu;
window.clearCart = clearCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

// For backward compatibility with payment system
window.getCartItems = () => cartItems.map(item => ({
    name: item.name,
    price: item.price,
    qty: item.quantity
}));

window.getCartTotal = () => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

window.getCartCount = () => cartItems.reduce((count, item) => count + item.quantity, 0);

// =============== START APPLICATION ===============
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for HTML payment system to load first
    setTimeout(initMenu, 100);
});
