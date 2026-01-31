// menu.js - FINAL CORRECTED VERSION WITH YOUR 64 ITEMS
// ========= GOLDEN STAR RESTAURANT MENU =========

// RESTAURANT WHATSAPP NUMBER
const RESTAURANT_WHATSAPP = "+254740940395";

// CONFIGURATION
const CONFIG = {
    restaurantName: "Golden Star Restaurant",
    whatsappTo: RESTAURANT_WHATSAPP,
    mpesaTill: "888555",
    bankName: "KCB Bank",
    bankAccount: "0123456789",
    bankAccountName: "GOLDEN STAR RESTAURANT",
};

// IMAGE MAPPING - Your original image URLs
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

// YOUR ORIGINAL 64 MENU ITEMS - Exactly as you provided
const MENU_ITEMS = [
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

// Helper functions
const el = (id) => document.getElementById(id);
const fmtKES = (n) => `KES ${Number(n || 0).toLocaleString("en-KE")}`;

// Cart State
let cart = JSON.parse(localStorage.getItem('goldenStarCart')) || [];
let currentFilter = 'All';
let currentSearch = '';

// Image helper
function getImageUrl(itemId) {
    return IMAGE_MAP[itemId] || "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=900&fit=crop&crop=center";
}

// Menu Display Functions
function renderMenuItems() {
    const grid = el('grid');
    if (!grid) return;
    
    // Hide loading state
    const loadingState = el('loadingState');
    if (loadingState) loadingState.style.display = 'none';
    
    // Filter items
    let filteredItems = MENU_ITEMS;
    
    if (currentFilter !== 'All') {
        filteredItems = filteredItems.filter(item => item.cat === currentFilter);
    }
    
    if (currentSearch) {
        const searchTerm = currentSearch.toLowerCase();
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.bullets.some(bullet => bullet.toLowerCase().includes(searchTerm)) ||
            item.tag.toLowerCase().includes(searchTerm)
        );
    }
    
    // Render items
    if (filteredItems.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="icon">🔍</div>
                <h3>No items found</h3>
                <p>Try a different search or filter</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredItems.map(item => {
        const cartItem = cart.find(ci => ci.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        const imageUrl = getImageUrl(item.id);
        
        return `
            <div class="card">
                <img src="${imageUrl}" alt="${item.name}" class="bg" loading="lazy">
                <div class="shade"></div>
                <div class="overlay">
                    <div class="topline">
                        <div>
                            <div class="name">${item.name}</div>
                            <div class="meta">
                                <span class="tag">${item.tag}</span>
                            </div>
                        </div>
                        <div class="price">${fmtKES(item.price)}</div>
                    </div>
                    
                    <div class="bottom">
                        <ul class="bullets">
                            ${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                        </ul>
                        <div class="row">
                            <div>
                                <div class="small">${quantity > 0 ? `In cart: ${quantity}` : "Ready to order"}</div>
                            </div>
                            <div style="display: flex; gap: 8px; align-items: center;">
                                ${quantity > 0 ? `
                                    <button class="iconBtn remove-from-cart" data-id="${item.id}" aria-label="Remove from cart">−</button>
                                    <span style="min-width: 20px; text-align: center; font-weight: bold;">${quantity}</span>
                                    <button class="iconBtn add-to-cart" data-id="${item.id}" aria-label="Add to cart">+</button>
                                ` : `
                                    <button class="btn add-to-cart" data-id="${item.id}" style="padding: 8px 12px;">
                                        Add to Order
                                    </button>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add event listeners for cart buttons
    setTimeout(() => {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                addToCart(itemId);
            });
        });
        
        document.querySelectorAll('.remove-from-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                removeFromCart(itemId);
            });
        });
    }, 100);
}

// Cart Management Functions
function addToCart(itemId) {
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(ci => ci.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }
    
    saveCart();
    renderMenuItems();
    updateCartUI();
    showToast(`Added ${item.name} to order`);
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(ci => ci.id === itemId);
    
    if (itemIndex === -1) return;
    
    const itemName = cart[itemIndex].name;
    
    if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
    } else {
        cart.splice(itemIndex, 1);
    }
    
    saveCart();
    renderMenuItems();
    updateCartUI();
    showToast(`Removed ${itemName} from order`);
}

function clearCart() {
    cart = [];
    saveCart();
    renderMenuItems();
    updateCartUI();
    showToast('Cart cleared');
}

function saveCart() {
    localStorage.setItem('goldenStarCart', JSON.stringify(cart));
}

// Cart Getters (used by payment system)
window.getCartItems = function() {
    return cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity
    }));
};

window.getCartTotal = function() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

window.getCartCount = function() {
    return cart.reduce((count, item) => count + item.quantity, 0);
};

// Filter and Search Functions
window.filterMenu = function(category) {
    currentFilter = category;
    renderMenuItems();
};

window.searchMenu = function(query) {
    currentSearch = query;
    renderMenuItems();
};

window.updateTableDisplay = function(tableValue) {
    const table = getTableLabel(tableValue);
    const currentTableEl = el('currentTable');
    const modalTableEl = el('modalTable');
    
    if (currentTableEl) currentTableEl.textContent = table || "No Table Selected";
    if (modalTableEl) modalTableEl.textContent = `Table: ${table || "--"}`;
    
    updatePaymentReferences(table);
    updateCheckoutButtonState();
    
    showToast(`Table set to: ${table}`);
};

// Payment System Functions
function getTableLabel(tableValue = null) {
    const tableSelect = el('tableNumber');
    if (!tableSelect) return '';
    
    const v = tableValue || tableSelect.value;
    if (!v) return '';
    if (v === "Take Away" || v === "Delivery") return v;
    return v.toString().startsWith("Table") || v.toString().startsWith("VIP") 
        ? v 
        : `Table ${v}`;
}

function requireTable() {
    const t = getTableLabel();
    if (!t) {
        showToast("Please select your table before checkout", "warning");
        const tableSelect = el('tableNumber');
        if (tableSelect) tableSelect.focus();
        return false;
    }
    return true;
}

function updatePaymentReferences(table) {
    const ref = table ? table.replace(/\s+/g, "-").toUpperCase() : "TABLE-";
    
    // Update all reference elements
    const refElements = {
        'mpesaRef': ref,
        'mpesaTable': ref,
        'bankRef': ref,
        'bankTable': ref,
        'cashTable': table || "--",
        'paystackTable': table || "--"
    };
    
    Object.entries(refElements).forEach(([id, value]) => {
        const element = el(id);
        if (element) element.textContent = value;
    });
    
    // Special case for paystack reference
    const paystackReferenceEl = el('paystackReference');
    if (paystackReferenceEl) {
        paystackReferenceEl.textContent = `GS-${table ? table.replace(/\s+/g, "") : "ORDER"}-${Date.now().toString().slice(-6)}`;
    }
}

function refreshAmountsInPaymentPanels() {
    const total = getCartTotal();
    const t = getTableLabel();
    
    // Update all amount displays
    const amountElements = {
        'mpesaAmount': fmtKES(total),
        'bankAmount': fmtKES(total),
        'cashAmount': fmtKES(total),
        'paystackAmount': fmtKES(total),
        'mpesaTill': CONFIG.mpesaTill,
        'mpesaTill2': CONFIG.mpesaTill,
        'bankName': CONFIG.bankName,
        'bankAcc': CONFIG.bankAccount,
        'bankAccName': CONFIG.bankAccountName,
        'cashTable': t || "--",
        'paystackTable': t || "--"
    };
    
    Object.entries(amountElements).forEach(([id, value]) => {
        const element = el(id);
        if (element) element.textContent = value;
    });
}

// WhatsApp Message Building
function buildRestaurantWhatsAppMessage(payload) {
    const items = payload.items || [];
    const lines = items.map(it => {
        return `• ${it.name} x${it.quantity} — ${fmtKES(it.price * it.quantity)}`;
    });
    
    const totalItems = items.reduce((sum, it) => sum + it.quantity, 0);
    
    return [
        `🚨 *NEW ORDER - GOLDEN STAR RESTAURANT* 🚨`,
        `📅 ${new Date().toLocaleDateString('en-KE', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        })}`,
        `📋 *Order ID:* ${payload.orderId}`,
        `🏠 *Table/Service:* ${payload.table}`,
        `💰 *Payment Method:* ${payload.paymentLabel}`,
        payload.paymentReference ? `🔢 *Payment Ref:* ${payload.paymentReference}` : '',
        `📊 *Total Items:* ${totalItems}`,
        `💵 *Order Total:* ${fmtKES(payload.total)}`,
        ``,
        `📝 *ORDER ITEMS:*`,
        ...lines,
        ``,
        `⏱️ *Status:* PENDING`,
        `👨‍🍳 *Action Required:* Prepare order immediately`,
        ``,
        `✅ *Auto-generated by Restaurant Order System*`
    ].filter(Boolean).join("\n");
}

function buildCustomerWhatsAppMessage(payload) {
    const items = payload.items || [];
    const lines = items.map(it => {
        return `• ${it.name} x${it.quantity} — ${fmtKES(it.price * it.quantity)}`;
    });
    
    return [
        `✅ *${CONFIG.restaurantName} — Order Confirmed*`,
        `🎉 Thank you for your order!`,
        ``,
        `📋 *Order ID:* ${payload.orderId}`,
        `🏠 *Table:* ${payload.table}`,
        `💰 *Payment:* ${payload.paymentLabel}`,
        payload.paymentReference ? `🔢 *Payment Ref:* ${payload.paymentReference}` : '',
        `💵 *Total:* ${fmtKES(payload.total)}`,
        ``,
        `📝 *Your Order:*`,
        ...lines,
        ``,
        `⏱️ *Estimated Time:* 15-20 minutes`,
        `📍 *Location:* Banda Street, Nairobi`,
        `📞 *Contact:* +254740940395`,
        ``,
        `👨‍🍳 *Your order is being prepared. Thank you!*`
    ].filter(Boolean).join("\n");
}

function autoForwardToRestaurantWhatsApp(payload) {
    // Build restaurant message
    const restaurantMsg = buildRestaurantWhatsAppMessage(payload);
    const encodedRestaurantMsg = encodeURIComponent(restaurantMsg);
    
    // Build customer message
    const customerMsg = buildCustomerWhatsAppMessage(payload);
    
    // Auto-open WhatsApp to restaurant number
    const restaurantUrl = `https://wa.me/${RESTAURANT_WHATSAPP.replace(/\D/g, "")}?text=${encodedRestaurantMsg}`;
    
    // Open in new tab
    const newWindow = window.open(restaurantUrl, '_blank');
    
    // If popup blocked, show instructions
    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        // Copy to clipboard as fallback
        navigator.clipboard.writeText(restaurantMsg).then(() => {
            showToast("Order details copied to clipboard. Please send to WhatsApp manually.");
        });
    }
    
    return customerMsg;
}

function generateOrderId() {
    const d = new Date();
    const y = d.getFullYear().toString().slice(-2);
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const rand = Math.floor(100 + Math.random() * 900);
    return `GS-${y}${m}${day}-${rand}`;
}

function finalizeOrderWithAutoWhatsApp(paymentLabel, paymentReference = "") {
    if (!requireTable()) return;

    const cartItems = getCartItems();
    if (cartItems.length === 0) {
        showToast("Your cart is empty", "warning");
        return;
    }

    const orderId = generateOrderId();
    const payload = {
        orderId,
        table: getTableLabel(),
        paymentLabel,
        paymentReference,
        items: cartItems,
        total: getCartTotal(),
        count: getCartCount(),
        timestamp: new Date().toISOString()
    };

    // Store for later use
    window.lastOrderPayload = payload;

    // AUTO-FORWARD TO RESTAURANT WHATSAPP
    const customerMessage = autoForwardToRestaurantWhatsApp(payload);
    payload.customerMessage = customerMessage;

    // Success UI
    setTimeout(() => {
        el('paymentModal').classList.remove('open');
        el('successModal').classList.add('open');

        // Update success modal details
        el('orderId').textContent = `ORDER-#${orderId}`;
        el('successTable').textContent = payload.table;
        el('successItems').textContent = String(payload.count);
        el('successTotal').textContent = fmtKES(payload.total);
        el('successPayment').textContent = payload.paymentLabel;
        
        // Clear cart after successful order
        clearCart();
    }, 1000);
}

// UI Update Functions
window.updateCartUI = function() {
    const count = getCartCount();
    const total = getCartTotal();
    const items = getCartItems();
    
    const itemText = count === 1 ? "1 item" : `${count} items`;
    
    // Update floating cart
    el('count').textContent = count;
    el('summary').textContent = count > 0 ? `${itemText} • ${fmtKES(total)}` : "No items yet";
    
    // Update cart modal
    const cartLines = el('cartLines');
    const emptyCartMessage = el('emptyCartMessage');
    const totalEl = el('total');
    const proceedToPaymentBtn = el('proceedToPayment');
    
    if (count === 0) {
        emptyCartMessage.style.display = "block";
        cartLines.innerHTML = '';
        totalEl.textContent = "Total: KES 0";
        proceedToPaymentBtn.disabled = true;
    } else {
        emptyCartMessage.style.display = "none";
        
        const linesHTML = items.map(item => {
            return `
                <div class="line" data-id="${item.id || item.name.replace(/\s+/g, '_')}">
                    <div class="info">
                        <b>${item.name}</b>
                        <small>${fmtKES(item.price)} each</small>
                    </div>
                    <div class="qty">
                        <button class="iconBtn qty-minus" data-id="${item.id || item.name}" aria-label="Decrease quantity">−</button>
                        <span>${item.quantity}</span>
                        <button class="iconBtn qty-plus" data-id="${item.id || item.name}" aria-label="Increase quantity">+</button>
                    </div>
                    <div style="font-weight:600; min-width:80px; text-align:right;">
                        ${fmtKES(item.price * item.quantity)}
                    </div>
                </div>
            `;
        }).join('');
        
        cartLines.innerHTML = linesHTML;
        totalEl.textContent = `Total: ${fmtKES(total)}`;
        proceedToPaymentBtn.disabled = false;
        
        // Add event listeners for quantity buttons in cart modal
        cartLines.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                removeFromCart(itemId);
            });
        });
        
        cartLines.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                addToCart(itemId);
            });
        });
    }
    
    updateCheckoutButtonState();
};

function updateCheckoutButtonState() {
    const hasItems = getCartCount() > 0;
    const hasTable = !!getTableLabel();
    const checkoutBtn = el('checkoutBtn');
    const proceedToPaymentBtn = el('proceedToPayment');
    
    if (checkoutBtn) {
        checkoutBtn.disabled = !(hasItems && hasTable);
    }
    if (proceedToPaymentBtn && !hasItems) {
        proceedToPaymentBtn.disabled = true;
    }
}

// Toast function
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.background = type === 'error' ? '#dc3545' : 
                            type === 'warning' ? '#ffc107' : 
                            '#1f6f3a';
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize Everything
function init() {
    console.log('Initializing Golden Star Restaurant Menu System...');
    
    // Render menu immediately
    renderMenuItems();
    
    // Setup payment event listeners
    setupPaymentEventListeners();
    
    // Update UI
    updateCartUI();
    updateCheckoutButtonState();
    
    // Load saved table if exists
    const savedTable = localStorage.getItem('goldenStarTable');
    if (savedTable && el('tableNumber')) {
        el('tableNumber').value = savedTable;
        updateTableDisplay(savedTable);
    }
    
    console.log('System initialized successfully with 64 menu items');
}

function setupPaymentEventListeners() {
    // Checkout button
    el('checkoutBtn')?.addEventListener('click', function() {
        if (!requireTable()) return;
        
        const items = getCartItems();
        if (items.length === 0) {
            showToast("Please add items to your order first", "warning");
            return;
        }
        
        el('cartModal').classList.remove('open');
        el('paymentModal').classList.add('open');
        refreshAmountsInPaymentPanels();
        
        // Select Paystack by default
        setTimeout(() => {
            document.querySelectorAll(".payment-option").forEach(x => x.classList.remove("selected"));
            const paystackOption = document.querySelector('.payment-option[data-method="paystack"]');
            if (paystackOption) {
                paystackOption.classList.add("selected");
                window.selectedPayment = "paystack";
                
                // Show Paystack panel
                ["mpesa","bank","cash","paystack"].forEach(m => {
                    const detailsEl = el(m + "Details");
                    if (detailsEl) detailsEl.classList.add("hidden");
                });
                const paystackDetails = el("paystackDetails");
                if (paystackDetails) paystackDetails.classList.remove("hidden");
            }
        }, 100);
    });
    
    // Proceed to payment button
    el('proceedToPayment')?.addEventListener('click', function() {
        if (!requireTable()) return;
        el('cartModal').classList.remove('open');
        el('paymentModal').classList.add('open');
        refreshAmountsInPaymentPanels();
    });
    
    // Payment method selection
    document.querySelectorAll(".payment-option").forEach(opt => {
        opt.addEventListener("click", function(e) {
            document.querySelectorAll(".payment-option").forEach(x => x.classList.remove("selected"));
            this.classList.add("selected");
            window.selectedPayment = this.dataset.method;
            
            // Show relevant panel
            ["mpesa","bank","cash","paystack"].forEach(m => {
                const detailsEl = el(m + "Details");
                if (detailsEl) detailsEl.classList.add("hidden");
            });
            const selectedDetails = el(window.selectedPayment + "Details");
            if (selectedDetails) selectedDetails.classList.remove("hidden");
        });
    });
    
    // Copy buttons
    document.addEventListener("click", function(e) {
        const btn = e.target.closest(".copy-btn");
        if (!btn) return;
        
        let v = btn.getAttribute("data-copy");
        if (!v && btn.id === "copyMpesaRef") v = el("mpesaRef")?.textContent || "";
        if (!v && btn.id === "copyBankRef") v = el("bankRef")?.textContent || "";
        if (!v && btn.id === "copyMpesaAmount") v = String(getCartTotal());
        if (!v && btn.id === "copyBankAmount") v = String(getCartTotal());
        
        navigator.clipboard.writeText(v || "").then(() => {
            showToast("Copied to clipboard!");
            btn.textContent = "Copied";
            setTimeout(() => btn.textContent = "Copy", 1000);
        }).catch(() => {
            showToast("Failed to copy. Please copy manually.", "error");
        });
    });
    
    // Payment confirmation buttons
    el('confirmMpesa')?.addEventListener('click', () => finalizeOrderWithAutoWhatsApp("MPesa Till"));
    el('confirmBank')?.addEventListener('click', () => finalizeOrderWithAutoWhatsApp("Bank Transfer"));
    el('confirmCash')?.addEventListener('click', () => finalizeOrderWithAutoWhatsApp("Cash"));
    el('initiatePaystack')?.addEventListener('click', () => finalizeOrderWithAutoWhatsApp("M-Pesa STK Push"));
    
    // Success modal buttons
    el('sendWhatsApp')?.addEventListener('click', function() {
        if (!window.lastOrderPayload || !window.lastOrderPayload.customerMessage) {
            showToast("No order details available", "error");
            return;
        }
        
        const encodedMsg = encodeURIComponent(window.lastOrderPayload.customerMessage);
        const whatsappUrl = `https://wa.me/?text=${encodedMsg}`;
        window.open(whatsappUrl, '_blank');
    });
    
    el('newOrder')?.addEventListener('click', function() {
        el('successModal').classList.remove('open');
        window.lastOrderPayload = null;
        showToast("Ready for new order!");
    });
    
    // Save table selection
    el('tableNumber')?.addEventListener('change', function() {
        localStorage.setItem('goldenStarTable', this.value);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for HTML to call
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.filterMenu = filterMenu;
window.searchMenu = searchMenu;
window.updateTableDisplay = updateTableDisplay;
window.updateCartUI = updateCartUI;
window.showToast = showToast;
