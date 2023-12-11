const Meals = [
  {
    id: 1,
    mealTitle: "Classic Burger",
    mealPrice: 9.99,
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/85/29/13/360_F_585291338_0J8Q8vYbKDCu8yqqwAO8PsQZ4ESP2zd8.jpg",
    category: "Burger",
    quantity: 1,
  },
  {
    id: 2,
    mealTitle: "Bacon Cheeseburger",
    mealPrice: 11.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg",
    category: "Burger",
    quantity: 1,
  },
  {
    id: 3,
    mealTitle: "Veggie Burger",
    mealPrice: 8.99,
    imageUrl:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/veggie-burger-lew-robertson.jpg",
    category: "Burger",
    quantity: 1,
  },
  {
    id: 4,
    mealTitle: "Margherita Pizza",
    mealPrice: 12.99,
    imageUrl:
      "https://media.istockphoto.com/id/1168754685/photo/pizza-margarita-with-cheese-top-view-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=psLRwd-hX9R-S_iYU-sihB4Jx2aUlUr26fkVrxGDfNg=",
    category: "Pizza",
    quantity: 1,
  },
  {
    id: 5,
    mealTitle: "Pepperoni Pizza",
    mealPrice: 14.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg",
    category: "Pizza",
    quantity: 1,
  },
  {
    id: 6,
    mealTitle: "Hawaiian Pizza",
    mealPrice: 13.99,
    imageUrl:
      "https://media.istockphoto.com/id/503580316/photo/pizza-with-pineapple-and-ham-on-white-background.jpg?s=612x612&w=0&k=20&c=CArlgKntmtUpZENENw0plUmIo3jau3TjHKQ7gPXzfZc=",
    category: "Pizza",
    quantity: 1,
  },
  {
    id: 7,
    mealTitle: "Caesar Salad",
    mealPrice: 7.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/caesar-salad-white-background_318269-1278.jpg",
    category: "Vegan",
    quantity: 1,
  },
  {
    id: 8,
    mealTitle: "Quinoa Bowl",
    mealPrice: 9.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/mexican-salad-with-quinoa-bowl-isolated-white_123827-15651.jpg",
    category: "Vegan",
    quantity: 1,
  },
  {
    id: 9,
    mealTitle: "Vegan Wrap",
    mealPrice: 8.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/veggie-wrap-with-white-background-high-quality-ultr_889056-17642.jpg",
    category: "Vegan",
    quantity: 1,
  },
  {
    id: 10,
    mealTitle: "Sweet and Sour Chicken",
    mealPrice: 10.99,
    imageUrl:
      "https://thumbs.dreamstime.com/b/meat-sweet-sour-sauce-red-pepper-plate-white-background-isolated-70024796.jpg",
    category: "Chinese",
    quantity: 1,
  },
  {
    id: 11,
    mealTitle: "Beef and Broccoli",
    mealPrice: 11.99,
    imageUrl:
      "https://thumbs.dreamstime.com/b/beef-broccoli-chinese-food-white-background-beef-broccoli-chinese-food-120518285.jpg",
    category: "Chinese",
    quantity: 1,
  },
  {
    id: 12,
    mealTitle: "Shrimp Fried Rice",
    mealPrice: 12.99,
    quantity: 1,
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/011/238/730/large_2x/fried-rice-with-shrimps-on-the-plate-and-white-background-photo.jpg",
    category: "Chinese",
  },
  // Additional meals for each category
  {
    id: 13,
    mealTitle: "Spicy Chicken Burger",
    mealPrice: 10.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/buffalo-chicken-burger-isolated-white_465253-56.jpg?w=2000",
    category: "Burger",
    quantity: 1,
  },
  {
    id: 14,
    mealTitle: "Mushroom Swiss Burger",
    mealPrice: 11.49,
    imageUrl:
      "https://media.istockphoto.com/id/521139262/photo/mushroom-swiss-cheeseburger.jpg?s=612x612&w=0&k=20&c=Mub1tnJSXxHMJazC8NzmqdHzqGmsI78MATglAj6KPzg=",
    category: "Burger",
    quantity: 1,
  },
  {
    id: 15,
    mealTitle: "BBQ Chicken Pizza",
    mealPrice: 13.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/top-view-bbq-chicken-pizza-with-tomatoes-paprika-isolated-white-background_79762-3009.jpg",
    category: "Pizza",
    quantity: 1,
  },
  {
    id: 16,
    mealTitle: "Vegetarian Pizza",
    mealPrice: 12.49,
    imageUrl:
      "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
    category: "Pizza",
    quantity: 1,
  },
  {
    id: 17,
    mealTitle: "Mango Avocado Salad",
    mealPrice: 8.99,
    imageUrl:
      "https://media.istockphoto.com/id/119648466/photo/salad-with-mango-avocado-arugula-and-walnuts.jpg?s=612x612&w=0&k=20&c=I9IhGDaeBWwicmtP55iu7JRtPj_BY-hoOSLP6EoNJkw=",
    category: "Vegan",
    quantity: 1,
  },
  {
    id: 18,
    mealTitle: "Chickpea Salad",
    mealPrice: 9.49,
    imageUrl:
      "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3N0YXJ0dXBpbWFnZXNfcmlzb2dyYXBoX3ByaW50aW5nX2lsbHVzdHJhdGlvbl9taW5pbWFsX3NpbXBsZV9idV80ODY1MTkwNS1lY2JjLTQ5YTgtYWNhNC05OWM3MzcwZDgyZmNfMy5qcGc.jpg",
    category: "Vegan",
    quantity: 1,
  },
  {
    id: 19,
    mealTitle: "Tofu Stir-fry",
    mealPrice: 10.49,
    imageUrl:
      "https://img.freepik.com/premium-photo/fresh-colorful-tofu-stir-fry-white-background-healthy-vegan-meal-healthy-eating_763042-1207.jpg?w=2000",
    category: "Vegan",
    quantity: 1,
  },
  {
    id: 20,
    mealTitle: "General Tso's Chicken",
    mealPrice: 13.99,
    imageUrl:
      "https://media.istockphoto.com/id/1263607629/photo/close-up-photo-of-general-tsos-chicken-on-top-of-rice.jpg?s=612x612&w=0&k=20&c=Qehm672tF0wBjf8rLv_YXfgfnY14xdT76Qs2ogewr6g=",
    category: "Chinese",
    quantity: 1,
  },
  {
    id: 21,
    mealTitle: "Spring Rolls",
    mealPrice: 8.99,
    imageUrl:
      "https://media.istockphoto.com/id/172419830/photo/spring-rolls-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=O8Xr_o6fVMxekilTWH75DYO7Ge9Tsabny33xbpgGkK8=",
    category: "Chinese",
    quantity: 1,
  },
  {
    id: 22,
    mealTitle: "Beef and Mushroom Noodles",
    mealPrice: 11.49,
    imageUrl:
      "https://st3.depositphotos.com/9086280/17889/i/450/depositphotos_178898690-stock-photo-beef-noodles-bowl-white-background.jpg",
    category: "Chinese",
    quantity: 1,
  },
  {
    id: 23,
    mealTitle: "Iced Caramel Macchiato",
    mealPrice: 4.99,
    imageUrl:
      "https://img.freepik.com/free-photo/iced-caramel-macchiato_1339-1124.jpg?size=626&ext=jpg",
    category: "Beverages",
    quantity: 1,
  },
  {
    id: 24,
    mealTitle: "Green Tea Frappuccino",
    mealPrice: 5.49,
    imageUrl:
      "https://freshbalancenutrition.com/wp-content/uploads/2021/07/Matcha-Green-Tea-Frappuccino-4.jpg",
    category: "Beverages",
    quantity: 1,
  },
  {
    id: 25,
    mealTitle: "Mango Smoothie",
    mealPrice: 6.99,
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Mango-Smoothie-3-2.jpg",
    category: "Beverages",
    quantity: 1,
  },
  {
    id: 26,
    mealTitle: "Classic Hot Chocolate",
    mealPrice: 3.99,
    imageUrl:
      "https://www.thespruceeats.com/thmb/1c0ep60tWPHUNZPlnEoxqxSotBs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-dutch-hot-chocolate-recipe-1128602-hero-01-8e3090ad1d024a25b170f5eb34b0939f.jpg",
    category: "Beverages",
    quantity: 1,
  },
  {
    id: 27,
    mealTitle: "Strawberry Cheesecake",
    mealPrice: 8.49,
    imageUrl:
      "https://www.thespruceeats.com/thmb/FVgJ6FkRjHenPPYHJgVrnEAHjyo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-cheesecake-4588014-03-5a5769c5f121456c8b4aa5c7c6e06f61.jpg",
    category: "Sweet",
    quantity: 1,
  },
  {
    id: 28,
    mealTitle: "Chocolate Lava Cake",
    mealPrice: 7.99,
    imageUrl:
      "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg",
    category: "Sweet",
    quantity: 1,
  },
  {
    id: 29,
    mealTitle: "Banana Split Sundae",
    mealPrice: 9.99,
    imageUrl:
      "https://www.thespruceeats.com/thmb/3QatTcsVjKeDVCD-rIeUa4fSRAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-banana-split-recipe-305712-hero-01-ef0482a539394da0b5ba64ade0c73b98.jpg",
    category: "Sweet",
    quantity: 1,
  },
  {
    id: 30,
    mealTitle: "Mixed Berry Parfait",
    mealPrice: 6.99,
    imageUrl:
      "https://d2gtpjxvvd720b.cloudfront.net/system/newsletter_item/social_image/1659/default_FS-20201204-1302-18030-2381.jpg",
    category: "Sweet",
    quantity: 1,
  },
  {
    id: 31,
    mealTitle: "Cucumber Mint Lemonade",
    mealPrice: 4.49,
    imageUrl:
      "https://ablissfulsip.com/wp-content/uploads/2021/07/cucumber-mint-lemonade-116.jpg",
    category: "Beverages",
    quantity: 1,
  },
  {
    id: 32,
    mealTitle: "Peach Iced Tea",
    mealPrice: 3.99,
    imageUrl:
      "https://realfood.tesco.com/media/images/RFO-1400x919-Peach-mint-and-vanilla-chai-iced-tea-37a59e40-fbe2-4fb2-b14c-00cf885d0000-0-1400x919.jpg",
    category: "Beverages",
    quantity: 1,
  },
];

export default Meals;
